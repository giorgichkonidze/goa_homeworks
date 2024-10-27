def count_item(item_list, item):
    count = 0  
    for i in item_list:
        if i == item:
            count += 1  
    return count  

items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
result = count_item(items, 'apple')
print("")
print(result)  
print("")