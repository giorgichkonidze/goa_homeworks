def separate_even_odd(numbers):
    evens = [num for num in numbers if num % 2 == 0]
    odds = [num for num in numbers if num % 2 != 0]
    return evens, odds

even_nums, odd_nums = separate_even_odd([1, 2, 3, 4, 5, 6])
print(even_nums)  
print(odd_nums)   