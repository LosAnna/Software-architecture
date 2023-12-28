from .Table import Table


class Reservation:

    def __init__(self, date: str):
        self.date = date
        self.schedule: dict[str, dict[Table: dict[str, str]]] = {date: {}}

    def add_reservation(self, table: Table, time: str, user: str) -> bool:
        reservations: dict = self.schedule[self.date].get(table)
        if reservations:
            if time in reservations:
                return False
            reservations[time] = user
            return True
        self.schedule[self.date][table] = {time: user}
        return True

    def change_reservation(self, table: Table, time: str, user: str, new_time: str) -> bool:
        reservations: dict = self.schedule[self.date].get(table)
        if not reservations:
            return False
        if time in reservations and reservations.get(time) == user:
            reservations.pop(time)
            return self.add_reservation(table, new_time, user)
        return False

    def delete_reservation(self, table: Table, time: str, user: str) -> bool:
        reservations: dict = self.schedule[self.date].get(table)
        if not reservations:
            return True
        if time in reservations and reservations.get(time) == user:
            reservations.pop(time)
            return True
        return False

    def __str__(self):
        return f'Date: {self.date}\n\t{self.schedule}'