# შექმენით რიცხვებით სავსე სია რომელშიც იქნება 1 დან 20 მდე ყველა რიცხვი,  
# შემდეგ კი ამ სიიდან ამოშალეთ ყველა კენტი რიცხვი და დაამატეთ ახალ სიაში, ორივე სია დაბეჭდეთ.

original_list =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]   

odd_number_list =[]
for number in list[:]:
    if number % 2 !=0:
        odd_number_list.append(number)
        original_list.remove(number)

print(original_list)
print("")
print(odd_number_list)



