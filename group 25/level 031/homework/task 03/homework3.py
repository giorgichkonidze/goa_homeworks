def ask_password(correct_password):
    while True:
        user_password = input("გთხოვთ, შეიყვანოთ პაროლი: ")   
        if user_password == correct_password:
            print("პაროლი სწორია!")
        else:
            print("არასწორი პაროლი. სცადეთ ხელახლა!")
            
password = "ზაზუნა123"

ask_password(password)