class Scale:
    def __init__(self, tonic):
        self.sharps_flats = {
          'sharp': ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'a', 'f#', 'e'],
          'flat': ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'd', 'g', 'bb']
        }
        self.tonic = f'{tonic[0].capitalize()}{tonic[1]}' if len(tonic) == 2 else tonic.capitalize()
        self.type = [key for key, value in self.sharps_flats.items() if tonic in value][0]

    def chromatic(self):
        output = []
        notes = map(chr, range(65, 72))
        if self.type == 'flat':
            for note in notes:
                if note == 'C' or note == 'F':
                    output.append(note)
                else:
                    output.append(f'{note}b')
                    output.append(note)
        else:
            for note in notes:
                  if note == 'B' or note == 'E':
                      output.append(note)
                  else:
                      output.append(note)
                      output.append(f'{note}#')
        char = output.index(self.tonic)
        return output if output[0] == self.tonic else output[char:] + output[0:char]

    def interval(self, intervals):
        int_vals = { 'm': 1, 'M': 2, 'A': 3 }
        chromatic_scale = self.chromatic()
        output = []
        next_note = 0
        for interval in intervals:
            output.append(chromatic_scale[next_note])
            next_note += int_vals[interval]
        return output