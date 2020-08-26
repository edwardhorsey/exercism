import math

def largest_product(series, size):
    if len(series) < size  or len(series) < 0 or size < 0:
        raise ValueError('invalid arguments')
    counter = len(series) - size
    largest = 0
    while counter >= 0:
        total = math.prod([int(letter) for letter in series[counter:counter+size]])
        if total > largest:
            largest = total
        counter -= 1
    return largest