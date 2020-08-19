def tally(rows):
    teams = {}
    table = []

    for round in rows:
        game = round.split(';')
        teams.setdefault(game[0], {'win': 0, 'draw': 0, 'loss': 0, 'mp': 0})
        teams.setdefault(game[1], {'win': 0, 'draw': 0, 'loss': 0, 'mp': 0})
        teams[game[0]]['mp'] += 1
        teams[game[1]]['mp'] += 1
        if game[2] == 'win':
            teams[game[0]]['win'] += 1
            teams[game[1]]['loss'] += 1
        elif game[2] == 'loss':
            teams[game[0]]['loss'] += 1
            teams[game[1]]['win'] += 1
        else:
            teams[game[0]]['draw'] += 1
            teams[game[1]]['draw'] += 1

    for team in teams.keys():
        teams[team]['points'] = teams[team]['win'] * 3 + teams[team]['draw']
        sheet = "{:<30} | {:>2} | {:>2} | {:>2} | {:>2} | {:>2}".format(team, teams[team]["mp"], teams[team]["win"], teams[team]["draw"], teams[team]["loss"], teams[team]["points"])
        table.append(sheet)

    table = sorted(table, key=lambda string: (-int(string[-1]), string[0]))
    table.insert(0, "{:<30} | {:>2} | {:>2} | {:>2} | {:>2} | {:>2}".format('Team', 'MP', 'W', 'D', 'L', 'P'))

    return table