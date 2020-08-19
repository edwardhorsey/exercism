import re

def is_pangram(sentence):
    return len(set(re.findall(r"[a-z]", sentence.lower()))) == 26