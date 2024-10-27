#1)Calculate the sum of digits of a number entered by the user.
#გამოთვალეთ მომხმარებლის მიერ შეყვანილი რიცხვის რიცხვების ჯამი


numbers = input("შემოიტანეთ რიცხვები: ")
total = 0
for num in numbers:
    total += int(num)

