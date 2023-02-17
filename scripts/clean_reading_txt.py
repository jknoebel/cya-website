import argparse
import re


def main():
    """
    Accepts a txt of readings and produces a clean txt.
    """
    parser = argparse.ArgumentParser(description='Accepts a txt of readings and produces a cleaned txt.')
    parser.add_argument('input_txt', help='filepath to txt of readings')
    parser.add_argument('output_txt', help='filename of generated txt')
    parsed_args = parser.parse_args()
    input_txt_path = parsed_args.input_txt
    output_txt_path = parsed_args.output_txt

    all_readings = ''

    with open(input_txt_path, 'r', encoding='utf-8') as input_txt:
        for line in input_txt:
            text = line[:-1].strip() # remove \n and spaces from every line
            if text == '':
                text = '\n'
            else:
                text += " " 
            text = text.replace('“', '"')
            text = text.replace('”', '"')
            text = text.replace('—', '-')
            text = re.sub(u"\u2013", "-", text) # convert dashes from utf8 to ascii

            all_readings += text

    
    with open(output_txt_path, 'w', encoding='ascii', errors='ignore') as output_txt:
        output_txt.write(all_readings)


if __name__ == "__main__":
    main()
