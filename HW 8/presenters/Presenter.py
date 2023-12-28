import random

from views import View
from models import Restaurant

restaurant: Restaurant.Restaurant | None = None


def main(instance: Restaurant.Restaurant):
    global restaurant
    restaurant = instance

    progressing = True

    while progressing:
        View.show_menu()
        variant = input('Choose one: ')
        if variant in ('1', '2', '3', '4'):
            match_variants(variant)
        else:
            progressing = False
            View.print_bye()


def match_variants(variant: str):
    match variant:
        case '1':
            View.show_tables(list(restaurant.tables.values()))
        case '2':
            dates = restaurant.schedule.values()
            for date in dates:
                View.show_reservation(date)
        case '3':
            add_reservation()
        case '4':
            change_reservation()
        case _:
            return


def add_reservation():
    date = input('Date: ')
    time = input('Time: ')
    table_number = int(input('Table number: '))
    user = input('User: ')
    result = restaurant.add_booking(date, time, table_number, user)
    if result:
        View.print_success(f'Table: {table_number}', f'Date: {date}', f'Time: {time}', f'User: {user}')
    else:
        View.print_fail()


def change_reservation():
    date = input('Date: ')
    time = input('Time: ')
    table_number = int(input('Table number: '))
    user = input('User: ')
    new_time = input('New Time: ')
    result = restaurant.change_booking(date, time, table_number, user, new_time)
    if result:
        View.print_success(f'Table: {table_number}', f'Date: {date}', f'Time: {new_time}', f'User: {user}')
    else:
        View.print_fail()