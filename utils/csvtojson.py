with open('metadados_v2.csv', encoding='utf-8') as csvfile:
    data = []
    reader = csv.DictReader(csvfile)
    for row in reader:
            data.append(row)
    with open('metadados_v2.json', 'w', encoding='utf-8') as jsonfile:
        jsonfile.write(json.dumps(data))