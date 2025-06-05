def category_age(age):
    if age < 0:
        return "არასწორი ასაკი."
    elif age < 13:
        return "ბავშვი."
    elif age < 20:
        return "თინეიჯერი."
    elif age < 65:
        return "ზრდასრულია."
    else:
        return "მოხუცი."
    
user_age = int(input("შეიყვანეთ თქვენი ასაკი: "))

print("")
print(category_age(user_age))
print("")

