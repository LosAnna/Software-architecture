class Table:
    _number = 0

    def __init__(self):
        self.__class__._number += 1
        self.__id = self.__class__._number

    def __repr__(self):
        return f'Table № {self.__id}'

    @property
    def number(self):
        return self.__id