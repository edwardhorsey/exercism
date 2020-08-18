import re

def is_isogram(string): 
    trim = re.sub(r"[\s\W_]+", "", string.lower())
    return len(trim) == len(list(dict.fromkeys(trim)))