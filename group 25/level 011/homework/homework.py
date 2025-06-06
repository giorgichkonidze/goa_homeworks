first_age = int(input("enter first age: "))
second_age = int(input("enter second age: "))

# ასაკების შედარება
if first_age > second_age:
    print("The first is older than the second.")
elif first_age < second_age:
    print("The second is older than the first.")
else:
    print("Both persons are of the same age.")