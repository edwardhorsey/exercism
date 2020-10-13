from itertools import groupby
import re

def decode(string):
    decoded = ''
    idx = 0
    grouped = re.findall(r"[0-9]+|[a-zA-Z]", string)
    while idx < len(grouped):
        if grouped[idx].isnumeric():
            decoded += (grouped[idx + 1] * int(grouped[idx]))
            idx += 1
        else:
            decoded += grouped[idx]
        idx += 1
    return decoded

def encode(string):
    encoded = ''
    for group in groupby(string):
        num = len(list(group[1]))
        encoded += ((str(num) if num>1 else '') + group[0])
    return encoded