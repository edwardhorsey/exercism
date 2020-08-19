from functools import reduce

class School:
    def __init__(self):
        self.all_classes = {}

    def add_student(self, name, grade):
        self.all_classes.setdefault(grade, []).append(name)
        self.all_classes[grade].sort()            

    def roster(self):
        grades = sorted(self.all_classes.keys())
        return reduce(lambda x,y: x+y, [self.grade(grade) for grade in grades], [])


    def grade(self, grade_number):
        if grade_number in self.all_classes:
            return self.all_classes[grade_number]
        else:
            return []