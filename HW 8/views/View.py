def show_tables(tables: list) -> None:
    for table in tables:
        print(table)


def show_reservation(reservation):
    print(reservation)


def show_menu():
    print('\n==========\n')
    print('Main Menu:')
    print('1. Show tables')
    print('2. Show reservations')
    print('3. Add Reservation')
    print('4. Change reservation')
    print('0. EXIT')


def print_bye():
    print('\n==========\n')
    print('See you soon!')


def print_success(*args):
    print('\n==========\n')
    print('Success!', *args, sep=' ')
    print('\n==========\n')


def print_fail(*args):
    print('\n==========\n')
    print('Oops!', *args, sep=' ')
    print('\n==========\n')