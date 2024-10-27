#3)Write a program that calculates and prints the sum of all integers from 1 to 100 using a while loop.
#დაწერეთ პროგრამა, რომელიც გამოთვლის და დაბეჭდავს ყველა მთელი რიცხვის ჯამს 1-დან 100-მდე while მარყუჟის გამოყენებით


total = 0
number = 1
while number <= 100:
    total += number
    number += 1
print(f"ყველა მთელი რიცხვის ჯამი 1-დან 100-მდე არის: {total}")