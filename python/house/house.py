verses = {
  1: 'This is the house that Jack built.',
  2: 'the malt that lay in ',
  3: 'the rat that ate ',
  4: 'the cat that killed ',
  5: 'the dog that worried ',
  6: 'the cow with the crumpled horn that tossed ',
  7: 'the maiden all forlorn that milked ',
  8: 'the man all tattered and torn that kissed ',
  9: 'the priest all shaven and shorn that married ',
  10: 'the rooster that crowed in the morn that woke ',
  11: 'the farmer sowing his corn that kept ',
  12: 'the horse and the hound and the horn that belonged to '
}

def create(verse):
    if verse == 1:
        return verses[1]
    elif verse > 1:
        sandwich = create(verse-1)
        return sandwich[0:8] + verses[verse] + sandwich[8:]

def recite(start, end):
    return [create(start)] if start == end else [create(i) for i in range(start, end+1)]