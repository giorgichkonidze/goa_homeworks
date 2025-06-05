user_input = input("შეიტანეთ რიცხვი 1 - დან 1000 - მდე: ")
try:
    number = int(user_input)
    if 1 <= number <= 1000:
        print("სწორია!")
    else:
        print("არასწორია!")
except ValueError:
    print("არასწორია! შეიყვანეთ რიცხვი!")
    