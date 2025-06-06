def get_positive_integer(prompt):
    while True:
        try:
            value = int(input(prompt))
            if value >= 0:
                return value
            else:
                print("გთხოვთ შეიტანოთ დადებითი მთელი რიცხვი.")
        except ValueError:
            print("გთხოვთ შეიტანოთ ვალიდური მთელი რიცხვი.")

# შეიტანეთ ასაკი და მართვის გამოცდილება
age = get_positive_integer("შეიტანეთ თქვენი ასაკი: ")
driving_experience = get_positive_integer("შეიტანეთ წლები, რაც მართავთ მანქანას: ")

# შეამოწმეთ მართვის მოწმობის უფლება
if age >= 18:
    if driving_experience >= 1:
        print("გილოცავთ! გაქვთ უფლება მიიღოთ მართვის მოწმობა.")
    else:
        print("სამწუხაროდ, თქვენ უნდა ჰქონდეთ მინიმუმ 1 წლიანი მართვის გამოცდილება.")
else:
    print("სამწუხაროდ, უნდა იყოთ მინიმუმ 18 წლის მართვის მოწმობის აღებისთვის.")