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

def count(list):
    results = dict()
    for i in list:
        results[i] = results.get(i, 0) + 1
    return results

def total(basket):
    basket = sorted(basket, reverse=True)
    print(basket)
    price = 0
    counted = count(basket)
    bundles=[]
    print(counted)
    
    while len(counted)>0:
        print(len(counted), counted)
        price += int(len(counted) * base_price * discounts[len(counted)])
        bundles.append(len(counted))
        for key in counted.keys():
            counted[key] -= 1
        counted = {key: val for key, val in counted.items() if val != 0}
        print(counted)

    while 3 in bundles and 5 in bundles:
        bundles.remove(3)
        bundles.remove(5)
        price -= 40

    print(price, 'hi', bundles)
    return price

basket = [1, 1, 2, 2, 3, 3, 4, 4, 5]
total(basket)