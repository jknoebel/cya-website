import argparse
import csv
import re

def main():
    parser = argparse.ArgumentParser(description='Accepts a csv of gospel readings and counts the number of words in them.')
    parser.add_argument('input_csv', help='filepath to csv of gospel readings')
    parser.add_argument('output_csv', help='filename of generated csv with word counts')
    parsed_args = parser.parse_args()
    input_csv_path = parsed_args.input_csv
    output_csv_path = parsed_args.output_csv

    with open(input_csv_path, newline='') as input_csv:
        reader = csv.DictReader(input_csv)
        with open(output_csv_path, 'w') as output_csv:
            output_fieldnames = reader.fieldnames
            output_fieldnames.append('gospel_word_count')
            writer = csv.DictWriter(output_csv, fieldnames=output_fieldnames)
            writer.writeheader()
            for row in reader:
                gospel_words = row['gospel'].split()
                row['gospel_word_count'] = len(gospel_words)
                writer.writerow(row)


if __name__ == "__main__":
    main()
