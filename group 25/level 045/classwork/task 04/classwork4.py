def check_number(num):
    if num > 0:
        return "დადებითია."
    elif num < 0:
        return "უარყოფითია."
    else:
        return "ნულია."

user_input = float(input("შეიყვანეთ რიცხვი: "))
print("")
print(check_number(user_input))
print("")