def get_score(prompt):
    while True:
        try:
            score = float(input(prompt))
            if 0 <= score <= 100:
                return score
            else:
                print("ქულა უნდა იყოს 0-დან 100-მდე.")
        except ValueError:
            print("გთხოვთ შეიტანოთ ვალიდური რიცხვი.")

# შეიტანეთ ქულები
midterm_score = get_score("შეიტანეთ შუალედური გამოცდის ქულა: ")
final_score = get_score("შეიტანეთ დასკვნითი გამოცდის ქულა: ")
project_score = get_score("შეიტანეთ პროექტის ქულა: ")

# გამოთვალეთ საშუალო ქულა
average_score = (midterm_score * 0.2) + (final_score * 0.4) + (project_score * 0.4)

# შედეგი
if average_score >= 70:
    print(f"გილოცავთ! თქვენ გაიარეთ კურსი. თქვენი საშუალო ქულა: {average_score:.2f}")
else:
    print(f"სამწუხაროდ, ვერ გაიარეთ კურსი. თქვენი საშუალო ქულა: {average_score:.2f}")