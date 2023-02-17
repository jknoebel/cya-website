import argparse
from pathlib import Path
from enchant.checker import SpellChecker


def main():
    """
    Accepts a directory of txt files and spellchecks them.
    """
    parser = argparse.ArgumentParser(description='Accepts a directory of txts and spellchecks them.')
    parser.add_argument('input_dir', help='filepath to directory of txts')
    parser.add_argument('-o', '--output', help='filepath to directory for spellchecked txts', default='spellchecked_txts')
    parsed_args = parser.parse_args()
    input_dir = parsed_args.input_dir
    output_dir = parsed_args.output

    output_dir_path = Path(output_dir)
    output_dir_path.mkdir(exist_ok=True)
    checker = SpellChecker("en_US")

    path_list = Path(input_dir).glob('**/*.txt')
    for input_path in path_list:
        txt = ''
        with input_path.open('r', encoding='utf-8', errors='replace') as input_txt:
            for line in input_txt:
                checker.set_text(line)
                for error in checker:
                    new_word = input(f"Found typo \"{error.word}\" in\n{line}for\n{input_path.name}\nWhat should replace it? Press Enter if none\n")
                    if new_word:
                        line = line.replace(error.word, new_word)
                
                txt += line

        output_path = output_dir_path.joinpath(input_path.name)
        with output_path.open('w', encoding='ascii') as output_txt:
            output_txt.write(txt)

if __name__ == "__main__":
    main()