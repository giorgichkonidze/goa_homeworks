for i in range(120, 501, 3):
    if i % 3 == 0 and i % 5 == 0 and i % 7 == 0:
        print(f"{i} იყოფა 3 ზე , 5 ზე და 7 ზე")
    elif i % 3 == 0 and i % 5 == 0:
        print(f"{i} იყოფა 3 ზე და 5 ზე")
    elif i % 3 == 0 and i % 5 == 0 and i % 7 == 0:
        print(f"{i} იყოფა 3 ზე და 7 ზე") 
    elif i % 3 == 0 and i % 5 == 0 and i % 7 == 0:
        print(f"{i} იყოფა 5 ზე და 7 ზე")        

