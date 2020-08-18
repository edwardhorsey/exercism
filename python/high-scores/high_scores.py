def latest(scores):
    return scores[-1]


def personal_best(scores):
    return max(scores)


def personal_top_three(scores):
    return sorted(scores, reverse=True)[0:3]





print(latest([1,45,3,2,67,5,33,20]))
print(personal_best([1,45,3,2,67,5,33,20]))
print(personal_top_three([1,45,3,2,67,5,33,20]))
