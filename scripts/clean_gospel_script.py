import argparse
import csv
import re

def clean(text):
    original_text = text
    text = re.sub(r'\n\n', '\n', original_text)
    original_text = text
    text = re.sub(r'\n', ' ', original_text)
    original_text = text
    text = re.sub(r'\s+', ' ', original_text)
    return text

def main():
    """
    Accepts a csv of gospel readings and removes double line breaks from them.
    """
    parser = argparse.ArgumentParser(description='Accepts a csv of gospel readings and removes double line breaks from them.')
    parser.add_argument('input_csv', help='filepath to csv of gospel readings')
    parser.add_argument('output_csv', help='filename of generated csv')
    parsed_args = parser.parse_args()
    input_csv_path = parsed_args.input_csv
    output_csv_path = parsed_args.output_csv

    with open(input_csv_path, newline='') as input_csv:
        reader = csv.DictReader(input_csv)
        with open(output_csv_path, 'w') as output_csv:
            writer = csv.DictWriter(output_csv, fieldnames=reader.fieldnames)
            writer.writeheader()
            for row in reader:
                original_gospel = row['gospel']
                row['gospel'] = clean(original_gospel)
                # add prayer cleanup
                # output in ascii, not utf8
                writer.writerow(row)


if __name__ == "__main__":
    main()
