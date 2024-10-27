# შევქმნათ პროგრამა რომელსაც გადავცემთ მოსწავლეების სახელებს , შემდეგ რკი ეს პროგრამა ამ სახელებიდან რენდომულად ამოარშევს 
#თითოეულს და გაანაწილებს ჯგუფეში.

# .........
#  rendom .
#  if alse.
#  loop   .
#  list   . 
# .........
# list
   # append 
   # remove
#..........


import random
group_19_students =["meraba", "luka", "zaura", "toko", "oto", "giorgi", "elguja"]

random.choice(group_19_students) 


all_groups=[]
group=[]

while group_19_students !=[]:

    random_student = random.choice(group_19_students)
    group.append(random_student)
    group_19_students.remove(random_student)

    if len(group) == 3:
        all_groups.append(group)
        group = []


for i in range(3):
   print(all_groups[i])






