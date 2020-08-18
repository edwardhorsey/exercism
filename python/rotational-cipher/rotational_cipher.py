def rotate(text, key):
    output = ''
    for char in text:
        new_char = ord(char)
        if 97 <= new_char <= 122:
            new_char = new_char + key if new_char + key <= 122 else new_char + key - 26 
        if 65 <= new_char <= 90:
            new_char = new_char + key if new_char + key <= 90 else new_char + key - 26
        output += chr(new_char)
    return output