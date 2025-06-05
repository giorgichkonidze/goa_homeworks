print("")
print("welcome")
print("")

num1 = int(input("Enter first number: "))
num2 = int(input("Enter your second number: "))
operation = input("Enter your operation ;+ , * , - , / : ")


if operation == '+':
    print(num1 + num2)

elif operation == '*':
    print(num1 * num2)

elif operation == '-':
    print(num1 - num2)
    
elif operation == '/':
    if num2 == 0:
        print("it is imposible to divide number by 0!")
    else:
        print(num1 / num2)
    
else:
    print("That is wrong operation!")