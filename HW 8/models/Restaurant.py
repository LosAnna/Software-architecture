from .Table import Table
from .Reservation import Reservation


class Restaurant:

    def __init__(self):
        self.schedule: dict[str, Reservation] = {}
        self.tables: dict[int, Table] = {}

    def add_tables(self, count: int) -> None:
        for _ in range(count):
            table = Table()
            self.tables.setdefault(table.number, table)

    def add_booking(self, date: str, time: str, table_number: int, user: str):
        date_schedule = self.schedule.get(date)
        if not date_schedule:
            self.schedule[date] = Reservation(date)
        table = self.tables.get(table_number)
        return self.schedule.get(date).add_reservation(table, time, user)

    def change_booking(self, date: str, time: str, table_number: int, user: str, new_time: str):
        date_schedule = self.schedule.get(date)

        if not date_schedule:
            self.schedule[date] = Reservation(date)

        table = self.tables.get(table_number)
        return self.schedule.get(date).change_reservation(table, time, user, new_time) 