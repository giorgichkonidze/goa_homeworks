class User:
    def __init__(self, name):
        self.name = name

    def send_message(self, recipient, message):
        print(f"{self.name} -> {recipient.name}: {message}")

    def receive_message(self, sender, message):
        print(f"{self.name} <- {sender.name}: {message}")



user1 = User("zaura")
user2 = User("tengo")


user1.send_message(user2, "hello, how are you?")
user2.receive_message(user1,"i am ok, thank you!how are you?")

user2.send_message(user1, "i am ok, tahnk you!")
user1.receive_message(user2, "i am sorry, for answering you late!")

user1.send_message(user2, "its okay")
user2.receive_message(user1, "Well, I will write to you in 5 minutes")

user2.send_message(user1, "okay, bye.")
user1.receive_message(user2, "bye.")




