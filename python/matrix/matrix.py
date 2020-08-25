class Matrix:
    def __init__(self, matrix_string):
        self.rows = [ [int(x) for x in row.split(' ')] for row in matrix_string.split('\n') ]

    def row(self, index):
        return self.rows[index-1]

    def column(self, index):
        return [ self.row(x + 1)[index - 1] for x in range(len(self.rows)) ]