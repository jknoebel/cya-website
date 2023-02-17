import argparse
from asyncore import read
import csv
import re

from enum import Enum

FIELDNAMES = [
    'First Reading',
    'First Reading Ref',
    'Second Reading',
    'Second Reading Ref',
    'Gospel',
    'Gospel Ref',
    'Label'
]

class Status(Enum):
    PAUSED = 0
    READY = 1
    COMPLETE = 2

EXCLUDED_LINES = [
    'The word of the Lord.',
    'The Gospel of the Lord.'
]


class Reading():
    def __init__(self, type) -> None:
        self.type = type
        self.text = ''
        self.ref = ''

    def __add__(self, other) -> str:
        return self.text + other

    def get_text(self) -> str:
        text = self.text.strip()
        text = text.replace('“', '"')
        text = text.replace('”', '"')
        text = re.sub(u"\u2013", "-", text) # convert dashes from utf8 to ascii
        return text

class ReadingReader():
    def __init__(self, label) -> None:
        self.label = label.lower().title()
        self.readings = [
            Reading('First Reading'),
            Reading('Second Reading'),
            Reading('Gospel')
        ]
        self.status = Status.PAUSED
        self.pointer = 0

    def add_line(self, line) -> None:
        if line not in EXCLUDED_LINES:
            self.readings[self.pointer].text += line + " "
        else:
            self.pause_reading()
            self.next()
    
    def add_ref(self, ref) -> None:
        ref = re.sub(u"\u2013", "-", ref) # convert dashes from utf8 to ascii
        self.readings[self.pointer].ref = ref
        self.status = Status.READY

    def next(self) -> None:
        self.pointer += 1
        if self.pointer == len(self.readings):
            self.stop_reading()

    def set_reading(self, reading_title) -> None:
        for index, reading in enumerate(self.readings):
            if reading.type.lower() == reading_title.lower():
                self.pointer = index

    def get_row(self) -> dict:
        row = { 'Label': self.label }
        for reading in self.readings:
            row[reading.type] = reading.get_text()
            row[f"{reading.type} Ref"] = reading.ref
        return row

    def pause_reading(self):
        self.status = Status.PAUSED

    def stop_reading(self):
        self.status = Status.COMPLETE

    def is_complete(self):
        return self.status == Status.COMPLETE

    def is_ready(self):
        return self.status == Status.READY


def main():
    """
    Accepts a txt of sunday/solemnity readings and produces a csv.
    """
    parser = argparse.ArgumentParser(description='Accepts a txt of sunday/solemnity readings and produces a csv.')
    parser.add_argument('input_txt', help='filepath to txt of readings')
    parser.add_argument('output_csv', help='filename of generated csv')
    parser.add_argument('-s', '--solemnity', help='whether processing solemnities instead of sundays', action='store_true')
    parsed_args = parser.parse_args()
    input_txt_path = parsed_args.input_txt
    output_csv_path = parsed_args.output_csv
    are_solemnities = parsed_args.solemnity

    all_readings = []
    reader = ReadingReader('')

    with open(input_txt_path, 'r', encoding='utf-8') as input_txt:
        for line in input_txt:
            line = line[:-1].strip() # remove \n and spaces from every line
            if line == '':
                continue
            if line in ['FIRST READING', 'SECOND READING', 'GOSPEL']:
                reader.set_reading(line)
            if re.match(r'\d+\.', line):
                words = line.split(' ')
                if 'A' in words:
                    breakpoint()
                    if reader.label:
                        all_readings.append(reader.get_row())

                    label = re.search(r'\s([\w\s]+)[A-Z\s]+', line)[1]
                    reader = ReadingReader(label)
                else:
                    reader.stop_reading()
                continue
            
            if reader.is_complete():
                continue
            
            before_parens = line.split('(')[0]
            if re.search(r'[A-Z]{2,}', before_parens) and not re.search(r'[a-z]{2,}', before_parens):
                reader.pause_reading()
                continue
            
            if re.search(r'\(\d+:\d+', line):
                ref_match = re.search(r'\w+ \(.*\)', line)
                if ref_match:
                    ref = ref_match[0]
                    if 'first' in line:
                        ref = "1 " + ref
                    if 'second' in line:
                        ref = "2 " + ref
                    reader.add_ref(ref)
                    continue
            
            if reader.is_ready():
                reader.add_line(line)

        # add the last one since we only add when we get to the next one
        all_readings.append(reader.get_row())

    
    with open(output_csv_path, 'w', encoding='ascii', errors='ignore') as output_csv:
        writer = csv.DictWriter(output_csv, fieldnames=FIELDNAMES)
        writer.writeheader()
        for row in all_readings:
            writer.writerow(row)


if __name__ == "__main__":
    main()
