import argparse
import csv
from PyRTF.Elements import Document, Section, Renderer
from PyRTF.document.paragraph import Paragraph
from PyRTF.document.character import B, I, TEXT
from PyRTF.PropertySets import ParagraphPropertySet

def get_subject(date):
    return f"Lenten Reflection for {date} \n\n"

def get_header(liturgical_date):
    if "day" not in liturgical_date:
        liturgical_date = liturgical_date.replace(", V", ", Virgin")
        return f"Commemoration of {liturgical_date} \n\n"
    return liturgical_date + "\n\n"

def get_gospel_header(gospel_ref):
    return f"Gospel Reading: {gospel_ref} \n\n"

def get_reflection_header(name):
    return f"Reflection by {name} \n\n"

def get_text(text):
    text = text.replace("–", "\endash ")
    return text + "\n\n"

def get_bio(bio):
    return f"Author Biography: {bio}"


def main():
    """
    Accepts a csv of reflections and produces a flocknote template  for each.
    """
    parser = argparse.ArgumentParser(description='Accepts a csv of reflections and produces a flocknote template for each.')
    parser.add_argument('input_csv', help='filepath to csv of reflections')
    parser.add_argument('output', help='output file name')
    parsed_args = parser.parse_args()
    input_csv_path = parsed_args.input_csv
    output = parsed_args.output

    doc = Document()
    with open(input_csv_path, newline='', encoding='utf-8-sig') as input_csv:
        reader = csv.DictReader(input_csv)

        for row in reader:
            section = Section(break_type=Section.PAGE, first_page_number=1)
            date = row['Day of Reading'].replace("\"", "")
            id = f"{date} {row['Name']}"


            section.append(get_subject(date))
            section.append(get_header(row['Liturgical Date']))
            section.append("\n")

            p = Paragraph()
            p.append(B(get_gospel_header(row['gospel_reference (from Day of Reading)'])))
            section.append(p)

            section.append(get_text(row['gospel (from Day of Reading)']))
            section.append("\n")

            p = Paragraph()
            p.append(B(get_reflection_header(row['Name'])))
            section.append(p)

            section.append(get_text(row['Reflection']))
            section.append("\n")

            p = Paragraph()
            p.append(I(get_text(row['Prayer'])))
            section.append(p)

            section.append("\n")

            p = Paragraph()
            p.append(TEXT("Author Biography: ", bold=True, italic=True), row['Bio'])
            section.append(p)
            
            doc.Sections.append(section)

            p = Paragraph(ParagraphPropertySet().SetPageBreakBefore(True))
            section.append(p)
            page_section = Section()
            doc.Sections.append(page_section)

    with open(output, 'w') as output_file:
        DR = Renderer()
        DR.Write(doc, output_file)
            




if __name__ == "__main__":
    main()
