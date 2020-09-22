class Node:
    def __init__(self, value, next=None):
        self.__value__ = value
        self.__next__ = next

    def value(self):
        return self.__value__

    def next(self):
        return self.__next__

    def set_next(self, next):
        self.__next__ = next

class LinkedList:
    def __init__(self, values=[], head=None):
        self.__head__ = head
        for value in values:
            self.push(value)

    def __len__(self):
        if not self.__head__:
            return 0
        counter = 1
        current = self.__head__
        while current.next():
            current = current.next()
            counter += 1
        return counter

    def __iter__(self):
        self.iterating = self.__head__
        return self

    def __next__(self):
        if self.iterating:
            current = self.iterating.value()
            self.iterating = self.iterating.__next__
            return current
        else:
            StopIteration

    def head(self):
        if self.__head__:
            return self.__head__
        else:
            raise EmptyListException('List is empty')

    def push(self, value):
        new = Node(value)
        new.set_next(self.__head__)
        self.__head__ = new

    def pop(self):
        if not self.__head__:
            raise EmptyListException('List is empty') 
        popped = self.__head__
        self.__head__ = self.__head__.next()
        return popped.value()

    def reversed(self):
        return LinkedList(list(self))

class EmptyListException(Exception):
    def __init__(self, error_msg):
        self.error_msg = error_msg