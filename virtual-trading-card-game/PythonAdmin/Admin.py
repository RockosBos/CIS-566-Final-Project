from CardCreatorCustom import CardCreatorCustom
from CardCreatorGenerated import CardCreatorGenerated

userInput = ""

while(True):
                    
	print("Welcome to the Admin CLI for the virtual trading card game!")
	print("You have the following options:")
	print("1) Create a new Card")
	print("2) Generate a random Card")
	print("9) Close CLI")
	userInput = input("")
	
	match userInput:
		case "1":
			CardCreatorCustom()
		case "2":
			CardCreatorGenerated()
		case "9":
			pass
		case _:
			print("You seem to have entered an invalid response, please try again.")

	if(userInput == "9"):
		break

