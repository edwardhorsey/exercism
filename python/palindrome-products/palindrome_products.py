from itertools import combinations_with_replacement

def get_combinations(min_num, max_num, rev=False):
    if min_num > max_num:
        raise ValueError('Min num cannot be larger than Max num')
    num_range = sorted(range(min_num, max_num+1), reverse=True) if rev else range(min_num, max_num+1)
    return combinations_with_replacement(num_range, r=2)

def largest(min_factor, max_factor):
    combinations = get_combinations(min_factor, max_factor, True)
    value = 0
    factors = []

    for item in combinations:
        product = item[0]*item[1]
        item = sorted(item)
        if str(product) == str(product)[::-1]:
            if product > value:
                value = product
                factors = [item]

                # Edge Case
                if max_factor > 9998:
                    break

            elif product == value and item not in factors:
                factors.append(item)

    return None if value == 0 else value, factors

def smallest(min_factor, max_factor):
    combinations = get_combinations(min_factor, max_factor)

    for item in combinations:
        product = item[0]*item[1]
        if str(product) == str(product)[::-1]:
            return product, [sorted(item)]

    return None, []