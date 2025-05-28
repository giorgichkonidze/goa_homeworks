def leap_year(year):
    if year % 4 != 0:
        return "Not a leap year"
    elif year % 4 == 0 and year % 100 == 0 and year % 400 != 0:
        return "Not a leap year"
    else:
        return "leap year"
    
    
print(leap_year(2000))
print(leap_year(2100))