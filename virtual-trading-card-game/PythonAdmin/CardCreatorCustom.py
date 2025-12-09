from CardCreator import CardCreator 
from CardCustom import CardCustom

class CardCreatorCustom(CardCreator):

	Card = CardCustom()

	def __init__(self):
		userInput = input("Please Enter the Card Name: ")
		self.Card.setName(userInput)
		userInput = input("Please Enter the Card Red Stat: ")
		self.Card.setRedStat(userInput)
		userInput = input("Please Enter the Card Blue Stat: ")
		self.Card.setBlueStat(userInput)
		userInput = input("Please Enter the Card Green Stat: ")
		self.Card.setGreenStat(userInput)
		userInput = input("Please Enter the Card Rarity: ")
		self.Card.setRarity(userInput)
		userInput = input("Please Enter the Card Weakness: ")
		self.Card.setWeakness(userInput)
		userInput = input("Please Enter the Card Strength: ")
		self.Card.setStrength(userInput)
		userInput = input("Please Enter the Card Type: ")
		self.Card.setType(userInput)
		self.Card.displayProps()
		self.Card.upload_to_database()
	

