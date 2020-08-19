import re

def is_paired(input_string):
    brackets = re.findall(r"[\[\{\(\]\}\)]", input_string)
    temp = []
    for bracket in brackets:
        match = re.search(r'^[\]\}\)]', bracket)
        if match and not temp:
            return False
        elif match and temp:
            diff = ord(bracket) - ord(temp[-1])
            if -3 < diff < 3:
                temp.pop(-1)
            else:
                return False
        else:
            temp.append(bracket)
    return not len(temp)