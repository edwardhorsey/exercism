from itertools import combinations_with_replacement

def find_fewest_coins(coins, target):
    if target == 0: 
        return []
    elif target < 0:
        raise ValueError('Cannot have negative target')
    for x in range(target // coins[0] + 1):
        sets = combinations_with_replacement(coins, x)
        for set in sets:
            if sum(set) == target:
                return sorted(list(set))
    raise ValueError('No possible coin combinations')