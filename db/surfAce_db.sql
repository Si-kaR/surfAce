-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 09, 2024 at 11:07 AM
-- Server version: 11.3.2-MariaDB
-- PHP version: 8.3.4 (cli) (built: Mar 17 2024 09:12:30) (NTS)
-- Copyright (c) The PHP Group
-- Zend Engine v4.3.4 
-- Copyright (c) Zend Technologies


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `surfAce_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Assigned_people`
--
DROP DATABASE IF EXISTS surfAce_db;

CREATE DATABASE surfAce_db;

USE surfAce_db;

--
-- Table Creation
-- Defines the structure of the database tables: User, SurfSpot, Review, SurfReport, ForumPost, ForumComment.
--
-- CREATE TABLE `User` (
--   `UserID` INT PRIMARY KEY AUTO_INCREMENT,
--   `Username` VARCHAR(255),
--   `Email` VARCHAR(255),
--   `Password` VARCHAR(255),
--   `UserType` ENUM(Surfer,Instructor,Enthusiast),
--   `ProfilePicture` VARCHAR(255),
--   `Bio` TEXT,
--   `Location` VARCHAR(255)
-- );
CREATE TABLE `User` (
  `UserID` INT PRIMARY KEY AUTO_INCREMENT,
  `Username` VARCHAR(255),
  `Email` VARCHAR(255),
  `Password` VARCHAR(255),
  `UserType` ENUM('Surfer','Instructor','Enthusiast'),
  `ProfilePicture` VARCHAR(255),
  `Bio` TEXT,
  `Location` VARCHAR(255)
);


CREATE TABLE `SurfSpot` (
  `SpotID` INT PRIMARY KEY AUTO_INCREMENT,
  `SpotName` VARCHAR(255),
  `Location` VARCHAR(255),
  `Description` TEXT,
  `WaveConditions` TEXT,
  `ImageURL` VARCHAR(255)
);

CREATE TABLE `Review` (
  `ReviewID` INT PRIMARY KEY AUTO_INCREMENT,
  `UserID` INT,
  `SpotID` INT,
  `Rating` INT,
  `ReviewText` TEXT,
  `DatePosted` DATETIME
);

CREATE TABLE `SurfReport` (
  `ReportID` INT PRIMARY KEY AUTO_INCREMENT,
  `UserID` INT,
  `SpotID` INT,
  `WaveHeight` DECIMAL(5,2),
  `WindSpeed` DECIMAL(5,2),
  `WeatherConditions` VARCHAR(255),
  `WaterTemperature` DECIMAL(5,2),
  `ReportText` TEXT,
  `DatePosted` DATETIME
);

CREATE TABLE `ForumPost` (
  `PostID` INT PRIMARY KEY AUTO_INCREMENT,
  `UserID` INT,
  `Title` VARCHAR(255),
  `Content` TEXT,
  `DatePosted` DATETIME
);

CREATE TABLE `ForumComment` (
  `CommentID` INT PRIMARY KEY AUTO_INCREMENT,
  `PostID` INT,
  `UserID` INT,
  `CommentText` TEXT,
  `DatePosted` DATETIME
);

--
-- Foreign Key Constraints
-- Defines the foreign key constraints to maintain referential integrity between tables.
--

ALTER TABLE `Review` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);

ALTER TABLE `Review` ADD FOREIGN KEY (`SpotID`) REFERENCES `SurfSpot` (`SpotID`);

ALTER TABLE `SurfReport` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);

ALTER TABLE `SurfReport` ADD FOREIGN KEY (`SpotID`) REFERENCES `SurfSpot` (`SpotID`);

ALTER TABLE `ForumPost` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);

ALTER TABLE `ForumComment` ADD FOREIGN KEY (`PostID`) REFERENCES `ForumPost` (`PostID`);

ALTER TABLE `ForumComment` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`);


--
-- Transaction Commit
-- Commits the transaction to save the changes made during the execution of the script.
--
Commit;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;