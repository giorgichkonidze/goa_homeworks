numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
#შევქმენი სია

numbers.append(100)
# სიის ბოლოს დავამატე 100

numbers.insert(0, 5)
#სიის დასაწყისში დავამატე რიცხვი 5

numbers.remove(30)
# სიიდან წავშალე 30

numbers.sort()
#სია დავალაგე ზრდის მიხედვით

numbers.reverse()
# შემოვატრიალე სია

index_50 = numbers.index(50)
print(index_50)#5

count_20 = numbers.index(20)
print(count_20)#7