# ლოგიკური ოპერატორები
def get_positive_number(prompt):
    while True:
        
            number = float(input(prompt))
            if number > 0:
                return number
            else:
                print("გთხოვთ შეიყვანოთ რიცხვი.")
       
def main():
    age = get_positive_number("შეიყვანეთ თქვენი ასაკი: ")
    total_amount = get_positive_number("შეიყვანეთ შესყიდვის მთლიანი თანხა (დოლარებში): ")

    if age > 60 or total_amount >= 100:
        if age > 60 and total_amount >= 100:
            discount = "30%"  # მაღალი ფასდაკლება
        elif age > 60:
            discount = "15%"  # ასაკობრივი ფასდაკლება
        else:
            discount = "10%"  # შესყიდვის მიხედვით ფასდაკლება
        print(f"თქვენ გაქვთ ფასდაკლების უფლება! ფასდაკლების ოდენობა: {discount}")
    else:
        print("თქვენ არ გაქვთ ფასდაკლების უფლება.")

if __name__ == "__main__":
    main()
