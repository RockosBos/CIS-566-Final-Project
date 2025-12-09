from abc import ABC, abstractmethod

import mysql.connector

class Card(ABC):
	Name = ""
	RedStat = int
	BlueStat = int
	GreenStat = int
	Rarity = ""
	Weakness = ""
	Strength = ""
	Type = ""

	def setName(self, name):
		self.Name = name	

	def setRedStat(self, redStat):
		self.RedStat = redStat	

	def setBlueStat(self, blueStat):
		self.BlueStat = blueStat	

	def setGreenStat(self, greenStat):
		self.GreenStat = greenStat	

	def setRarity(self, rarity):
		self.Rarity = rarity	

	def setWeakness(self, weakness):
		self.Weakness = weakness	

	def setStrength(self, strength):
		self.Strength = strength
		
	def setType(self, type):
		self.Type = type		

	def displayProps(self):
		print("Name: " + self.Name)
		print("Red Stat: " + self.RedStat)
		print("Blue Stat: " + self.BlueStat)
		print("Green Stat: " + self.GreenStat)
		print("Rarity: " + self.Rarity)
		print("Weakness: " + self.Weakness)
		print("Strength: " + self.Strength)
		print("Type", self.Type)

	def upload_to_database(self):
		mydb = mysql.connector.connect(
			host="127.0.0.1",
			user="root",
			password="root",
			database="cis566"
		)

		cursor = mydb.cursor()

		cursor.execute("Select COUNT(*) from Cards")

		res = cursor.fetchall()

		CardID = int(res[0][0]) + 1

		query = f"INSERT INTO `cis566`.`cards` (`CardID`, `Name`, `RedStat`, `BlueStat`, `GreenStat`, `Rarity`, `Weakness`, `Strength`, `Type`) VALUES ({CardID}, '{self.Name}', {self.RedStat}, {self.BlueStat}, {self.GreenStat}, '{self.Rarity}', '{self.Weakness}', '{self.Strength}', '{self.Type}')"

		print(query)

		cursor.execute(query)

		deckQuery = f"ALTER TABLE `cis566`.`deck` ADD COLUMN `QCard{CardID}` INT NULL DEFAULT '0' AFTER `QCard{CardID - 1}`;"

		print(deckQuery)

		cursor.execute(deckQuery)
		
		mydb.commit()

		print("----------------------------------------------")
		print("Card Creation Successful!")
		print("----------------------------------------------")

