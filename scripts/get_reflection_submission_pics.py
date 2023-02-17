import argparse
import csv
import requests

def main():
    """
    Accepts a csv of reflection submissions and downloads the images
    """
    parser = argparse.ArgumentParser(description='Accepts a csv of reflection submissions and downloads the images.')
    parser.add_argument('input_csv', help='filepath to csv of reflection submissions')
    parser.add_argument('-o', '--output', help='path to output directory', default='.')
    parsed_args = parser.parse_args()
    input_csv_path = parsed_args.input_csv
    output_dir = parsed_args.output

    with open(input_csv_path, newline='', encoding='utf-8-sig') as input_csv:
        reader = csv.DictReader(input_csv)
        index = 1
        for row in reader:
            image_url = row['Bio image']
            if not image_url:
                break
            url_start = image_url.find('http')
            url_end = image_url.find(')', url_start)
            image_url = image_url[url_start:url_end]
            image_data = requests.get(image_url).content
            # id = row['ID']
            id = f"{index} {row['Name']}"
            output_path = f'{output_dir}/{id}.jpg'
            with open(output_path, 'wb') as output_handler:
                output_handler.write(image_data)
            index += 1


if __name__ == "__main__":
    main()
