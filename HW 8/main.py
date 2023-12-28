import random

from models import Restaurant
from presenters import Presenter


def main():
    restaurant = Restaurant.Restaurant()
    restaurant.add_tables(random.randint(5, 8))
    Presenter.main(restaurant)


if __name__ == '__main__':
    main()