def categorize_age(age):
    if age < 0:
        return "მიუღებელი ასაკი"
    elif age < 13:
        return "ბავშვი"
    elif age < 20:
        return "ტინეიჯერი"
    elif age < 65:
        return "ბიჭი/გოგონა"
    else:
        return "დედა/მამა"
    
print("")
print(categorize_age(10))  
print(categorize_age(15))  
print(categorize_age(30))  
print(categorize_age(70))  
print("")