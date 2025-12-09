from CardGenerated import CardGenerated 
import random

class CardCreatorGenerated(CardGenerated):

	Card = CardGenerated()

	def __init__(self):
		userInput = input("Please Enter the Card Name: ")
		self.Card.setName(userInput)
		self.Card.setRedStat(str(random.randrange(0, 100)))
		self.Card.setBlueStat(str(random.randrange(0, 100)))
		self.Card.setGreenStat(str(random.randrange(0, 100)))

		rng = random.randrange(0,3)
		match(rng):
			case 0:
				self.Card.setRarity("U")
			case 1:
				self.Card.setRarity("H")
			case 2:
				self.Card.setRarity("M")
			case _:
				self.Card.setRarity("L")

		rng = random.randrange(0,2)
		match(rng):
			case 0:
				self.Card.setWeakness("R")
			case 1:
				self.Card.setWeakness("G")
			case _:
				self.Card.setWeakness("B")

		rng = random.randrange(0,2)
		match(rng):
			case 0:
				self.Card.setStrength("R")
			case 1:
				self.Card.setStrength("G")
			case _:
				self.Card.setStrength("B")

		rng = random.randrange(0,2)
		match(rng):
			case 0:
				self.Card.setType("R")
			case 1:
				self.Card.setType("G")
			case _:
				self.Card.setType("B")

		self.Card.displayProps()
		self.Card.upload_to_database()
