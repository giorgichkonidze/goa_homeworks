import random

target_number = random.randint(1, 100)

print("გამოიცანეთ რიცხვი 1-დან 100-მდე.")

while True:
    try:
        # მომხმარებლის რიცხვის შეყვანა
        guess = int(input("შეიტანეთ რიცხვი: "))

        # შეყვანილი რიცხვის შემოწმება
        if guess < 1 or guess > 100:
            print("შეიტანეთ რიცხვი 1-დან 100-მდე.")
            continue

        # შეყვანილი რიცხვის შედარება 
        if guess < target_number:
            print("მცირედია, სცადეთ კიდევ.")
        elif guess > target_number:
            print("დიდია, სცადეთ კიდევ.")
        else:
            print(f"გილოცავთ! თქვენ გამოიცანით სწორი რიცხვი: {target_number}")
            break

    except ValueError:
        print("გთხოვთ შეიტანოთ ვალიდური რიცხვი.")
