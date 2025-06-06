def average_of_list(numbers):
    if len(numbers) == 0:
        return 0  
    return sum(numbers) / len(numbers)

print("")
print(average_of_list([1, 2, 3, 4, 5])) 
print("")