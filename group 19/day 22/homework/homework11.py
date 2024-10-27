#3)termine if a number entered by the user is positive, negative, or zero.
#დაასრულეთ, თუ მომხმარებლის მიერ შეყვანილი რიცხვი არის დადებითი, უარყოფითი ან ნულოვანი.

number = float(input("შეიყვანეთ რიცხვი: "))

if number > 0:
    print(f"{number}დადებითი ")
elif number < 0:
    print(f"{number} უარყოფითი")
else:
    print(f"{number}ნულოვანი ")