import argparse
import re
from pathlib import Path

def clean_ths(line):
    line = line.replace('Te ', 'The ')
    if line[-2:] == 'Te':
        line = line[:-2]
        line += 'The'
    if 'True' in line:
        return line
    line = re.sub(r'T([a,i,u,r])', r'Th\1', line)
    return line

def main():
    """
    Accepts a directory of hymns in txt files and produces a directory of parsed hymns.
    """
    parser = argparse.ArgumentParser(description='Accepts a directory of hymns and parses them.')
    parser.add_argument('input_dir', help='filepath to directory of hymns')
    parser.add_argument('-o', '--output', help='filepath to directory for parsed hymns', default='parsed_hymns')
    parsed_args = parser.parse_args()
    input_dir = parsed_args.input_dir
    output_dir = parsed_args.output

    output_dir_path = Path(output_dir)
    output_dir_path.mkdir(exist_ok=True)

    path_list = Path(input_dir).glob('**/*.txt')
    for input_path in path_list:
        hymn = []
        hymn_type = ''
        hymn_name = ''
        pointer = -1
        with input_path.open('r', encoding='utf-8', errors='replace') as hymn_txt:
            for line in hymn_txt:
                line = line.strip()
                if line == '' or re.search(r'[\.b]{3,}', line):
                    continue

                if re.search(r'\ufffd', line):
                    line = re.sub(r'(\w)\ufffd(\w)', r"\1'\2", line)
                    line = re.sub(r'\ufffd', '-', line)

                if re.match(r'\d\.', line):
                    pointer = int(re.search(r'\d', line)[0]) - 1
                    while pointer >= len(hymn):
                        hymn.append('')
                    continue

                if re.match(r'\d+\.', line):
                    line = clean_ths(line)
                    # hymn_name = re.search(r'\d+\.\s+([\w\s]+)', line)[1]
                    hymn_name = re.search(r'[A-Z][a-zA-Z\s\',]+', line)[0]
                    continue

                if re.match(r'[A-Z]{2,}', line) and not re.search(r'[a-z]{2,}', line):
                    hymn_type = re.search(r'[A-Z\s]+', line)[0]
                    continue

                if pointer >= 0:
                    end_char = ' '
                    if line.endswith('-'):
                        end_char = ''
                        line = line[:-1]
                    while(re.search(r'[\w\s]-[\w\s-]', line)):
                        line = re.sub(r'([\w])-([\w])', r'\1\2', line)
                        line = re.sub(r'([\w])-[\s-]', r'\1', line)
                    line = clean_ths(line)
                    hymn[pointer] += line + end_char

        output_file_name = f"{hymn_type}.txt"
        output_path = output_dir_path.joinpath(output_file_name)
        with output_path.open('w', encoding='ascii') as output_txt:
            output_txt.write(hymn_name + '\n\n')

            for verses in hymn:
                output_txt.write(verses + '\n')

if __name__ == "__main__":
    main()