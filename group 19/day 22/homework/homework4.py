#4)Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.
#დაბეჭდეთ რიცხვები, რომლებიც იყოფა 3-ზე და 5-ზე 1-დან 100-ის ჩათვლით

for number in range(1, 101):
    if number % 3 == 0 and number % 5 == 0:
        print(number)