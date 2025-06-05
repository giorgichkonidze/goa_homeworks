def get_positive_number(prompt):
    while True: 
            number = float(input(prompt))
            if number > 0:
                return number
            else:
                print("გთხოვთ შეიყვანოთ რიცხვი.")
        
def calculate_bmi(weight, height):


    return weight / (height ** 2)

def get_bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obesity"

def main():
    # წონის და სიმაღლის მიღება
    weight = get_positive_number("შეიყვანეთ წონა (კილოგრამებში): ")
    height = get_positive_number("შეიყვანეთ სიმაღლე (მეტრებში): ")

    # BMI  ის გამოთვლა!
    bmi = calculate_bmi(weight, height)

    # BMI კატეგორიის მიღება!
    bmi_category = get_bmi_category(bmi)

    # შედეგები
    print(f"გამოთვლილი BMI: {bmi:.2f}")
    print(f"ჯანმრთელობის კატეგორია: {bmi_category}")

if __name__ == "__main__":
    main()
