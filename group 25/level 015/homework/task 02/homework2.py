def get_positive_number(prompt):
    """მიღებს დადებით რიცხვს მომხმარებლისგან"""
    while True:
            number = float(input(prompt))
            if number > 0:
                return number
            else:
                print("გთხოვთ შეიყვანოთ დადებითი რიცხვი.")
def main():
    item_count = int(get_positive_number("შეიყვანეთ ნივთების რაოდენობა: "))

    total_cost = 0.0

    for i in range(item_count):
        item_price = get_positive_number(f"შეიყვანეთ ნივთის #{i + 1} ფასი: ")
        total_cost += item_price

    print(f"დაჯდა სულ: {total_cost:.2f}")
if __name__ == "__main__":
    main()
    