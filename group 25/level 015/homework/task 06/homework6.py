def get_positive_number(prompt):
    while True:
            number = float(input(prompt))
            if number > 0:
                return number
            else:
                print("გთხოვთ შეიყვანოთ დადებითი რიცხვი")

def main():
    gpa = get_positive_number("შეიყვანეთ თქვენი GPA: ")
    family_income = get_positive_number("შეიყვანეთ თქვენი ოჯახის შემოსავალი (დოლარებში): ")
    
    if gpa >= 3.5:
        if family_income < 50000:
            scholarship = "უმაღლესი სტიპენდა"
        else:
            scholarship = "სტიპენდა"
    elif gpa >= 3.0:
        scholarship = "სტიპენდა"
    else:
        scholarship = "სტიპენდა არ არის ხელმისაწვდომი"

    print(f"თქვენი სტიპენდის სტატუსი: {scholarship}")

if __name__ == "__main__":
    main()