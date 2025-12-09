-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cis566
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `CardID` int NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `RedStat` int DEFAULT NULL,
  `BlueStat` int DEFAULT NULL,
  `GreenStat` int DEFAULT NULL,
  `Rarity` varchar(1) DEFAULT NULL,
  `Weakness` varchar(1) DEFAULT NULL,
  `Strength` varchar(1) DEFAULT NULL,
  `Type` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`CardID`),
  UNIQUE KEY `CardID_UNIQUE` (`CardID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'Darth Vader',65,25,30,'H','G','B','R'),(2,'SpongeBob',40,40,25,'L','R','N','B'),(3,'Spiderman',40,45,25,'M','N','N','R'),(4,'Obama',60,25,40,'H','R','G','G'),(5,'Michael Jordan',25,35,40,'M','N','N','B'),(6,'Elmo',25,25,40,'L','G','R','R'),(7,'Pikachu',30,30,30,'L','N','N','G'),(8,'Steve',20,50,20,'L','R','B','B'),(9,'Santa',70,20,20,'M','G','R','R'),(10,'Thomas Jefferson',20,35,35,'L','N','N','G'),(11,'Goku',40,50,40,'H','B','N','B'),(12,'Chuck Norris',75,75,75,'U','N','N','B'),(13,'Crazy Steve',30,15,40,'L','N','B','R'),(14,'Maxwell',20,40,45,'M','B','G','B');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deck`
--

DROP TABLE IF EXISTS `deck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deck` (
  `deckID` int NOT NULL,
  `QCard01` int DEFAULT '0',
  `QCard02` int DEFAULT '0',
  `QCard03` int DEFAULT '0',
  `QCard04` int DEFAULT '0',
  `QCard05` int DEFAULT '0',
  `QCard06` int DEFAULT '0',
  `QCard07` int DEFAULT '0',
  `QCard08` int DEFAULT '0',
  `QCard09` int DEFAULT '0',
  `QCard10` int DEFAULT '0',
  `QCard11` int DEFAULT '0',
  `QCard12` int DEFAULT '0',
  `QCard13` int DEFAULT '0',
  `QCard14` int DEFAULT '0',
  PRIMARY KEY (`deckID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deck`
--

LOCK TABLES `deck` WRITE;
/*!40000 ALTER TABLE `deck` DISABLE KEYS */;
INSERT INTO `deck` VALUES (0,2,222,104,6,88,219,220,231,97,230,8,3,51,9),(1,0,0,1,0,0,3,0,2,0,1,0,0,3,0),(2,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(3,0,0,0,0,0,0,0,0,0,0,0,0,0,0),(4,1,18,4,0,5,14,18,22,11,14,0,0,13,10),(5,0,1,0,0,0,0,0,1,0,1,0,0,1,1),(6,0,1,2,1,1,5,2,4,0,2,0,0,4,3);
/*!40000 ALTER TABLE `deck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userID_UNIQUE` (`userID`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('nkessey','nkesseypassword',0),('nkessey2','test',1),('Test','Test',2),('testing','123',3),('deck','test',4),('DemoTest123','test',5),('DemoTest','1234',6);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-08 21:52:50
