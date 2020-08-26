from itertools import combinations_with_replacement
from collections import Counter 

discounts = {
    1: 1,
    2: 0.95,
    3: 0.90,
    4: 0.8,
    5: 0.75
}

base_price = 800

def total(basket):
    price = 0
    counted = dict()
    for val in basket:
        counted[val] = counted.get(val, 0) + 1
    bundles=[]
    
    while len(counted)>0:
        price += int(len(counted) * base_price * discounts[len(counted)])
        bundles.append(len(counted))
        for key in counted.keys():
            counted[key] -= 1
        counted = {key: val for key, val in counted.items() if val != 0}

    while 3 in bundles and 5 in bundles:
        bundles.remove(3)
        bundles.remove(5)
        price -= 40

    return price
