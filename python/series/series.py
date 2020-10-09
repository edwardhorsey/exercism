def slices(series, length):
    if length <= 0 or len(series) < length:
        raise ValueError('.+')
    return [series[num:num+length] for num in range(len(series)-length+1)]