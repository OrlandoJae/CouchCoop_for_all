-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 17. Nov 2018 um 09:05
-- Server-Version: 10.1.36-MariaDB
-- PHP-Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `what2eat`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `essensgewohnheiten`
--

CREATE TABLE `essensgewohnheiten` (
  `idessensgewohnheiten` int(11) NOT NULL,
  `gewohnheitsbezeichnung` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `essensgewohnheiten`
--

INSERT INTO `essensgewohnheiten` (`idessensgewohnheiten`, `gewohnheitsbezeichnung`) VALUES
(0, 'vegan'),
(1, 'low-carb'),
(2, 'vegetarisch');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `gericht`
--

CREATE TABLE `gericht` (
  `idgericht` int(11) NOT NULL,
  `titel` varchar(50) NOT NULL,
  `person` varchar(10) NOT NULL,
  `zubereitung` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `gericht`
--

INSERT INTO `gericht` (`idgericht`, `titel`, `person`, `zubereitung`) VALUES
(0, 'Chilli Sin carne', '4', '1.	Bitte schneiden Sie die Chili auf und Entkernen diese. Danach schneiden Sie die Chili in feine Streifen. \r\n2.	Die Zwiebel und den Knoblauch bitte ebenfalls fein würfeln.\r\n3.	Eine Pfanne auf den Herd stellen und etwas Butter hinein legen. \r\nSobald die Pfanne heiß ist können Sie die Chili den Knoblauch und die Zwiebel dazu geben.\r\n4.	Das alles etwas anbraten lassen. \r\n5.	Jetzt lassen sie die Bohnen und den Mais in ein Sieb abtropfen. Danach geben sie die Bohnen und den Mais 	ebenfalls in die Pfanne.\r\n6.	Die passierten Tomaten können sie nun ebenfalls in die Pfanne geben. \r\nDie Pfanne mit einem Deckel verschließen und das ganze bei geringer Hitze kochen lassen.\r\n7.	Parallel etwas Reis in einem Topf bis zum Gar punkt kochen lassen.\r\n8.	Sobald der Reis den Gar punkt erreicht hat können sie ihn zu dem Chili in die Pfanne geben. \r\n9.	Jetzt können Sie das Chili nach belieben würzen (Wir empfehlen hier Cayenne Pfeffer, Siracha Sauce , Salz 	und Pfeffer).\r\n'),
(1, 'Hamburger', '3', '1.	Das Hackfleisch in eine Schüssel geben. Das Ei dazu geben.\r\n2.	Nun würzen wir das Hackfleisch mit etwas Senf, Maggi, Salz, Pfeffer, Chili-Gewürz und Paprika. \r\nDas ganze mit einem Mixer mit Knethaken verführen. \r\n3.	In der Zwischenzeit können Sie 2 Pfannen auf dem Herd mit etwas Öl darin erhitzen.\r\n4.	Sobald die Pfannen heiß sind, nehmen Sie sich eine Handflache voll Hackfleisch und formen daraus eine 	Boulette. Diese legen Sie dann in die heiße Pfanne. Wiederholen Sie diesen Schritt bis das Hackfleisch leer 	ist.\r\n5.	In der Zeit in der die Bouletten in der Pfanne braten schneiden Sie sich die Restlichen Zutaten die Sie auf 	ihrem Burger benötigen zurecht.\r\nHier empfehlen wir Essiggurken, Salat, Zwiebeln, Mozzarella, Tomaten. \r\n6.	Wenn die Boulette fast fertig ist können Sie eine Scheibe Cheddar auf jede Boulette legen und diesen 		zerlaufen lassen. \r\n7.	In der Zwischenzeit können Sie die Brötchen im Toaster einzeln erhitzen. \r\n8.	Sobald der Käse zerlaufen ist können Sie sich ihren Burger anrichten. \r\n'),
(2, 'Tomatensuppe', '4', '1.	Die Tomaten waschen, vom Strunk befreien und in Achtel schneiden.\r\n2.	Bei geringer Hitze mit geschlossenem Deckel eine Stunde köcheln lassen. \r\n3.	Mit einem Pürierstab die Tomaten fein pürieren. Danach die Flüssigkeit noch durch ein feines Sieb drücken um die Kerne herauszufiltern. \r\n4.	Die Tomatensuppe jetzt noch mit einem Brühwürfel verfeinern etwas Sahne dazu geben und nochmals aufkochen lassen \r\n5.	Wir empfehlen zu der Tomatensuppe ein frisches Baguette. \r\n'),
(3, 'Hähnchen in Sahnesoße', '4', '1.	Eine Pfanne erhitzen und die Hähnchenbrust von beiden Seiten scharf anbraten\r\n2.	In der Zeit einen Topf mit Wasser erhitzen, etwas salzen und zum Kochen bringen.\r\n3.	Die Nudeln darin ca. 12 min kochen lassen. \r\n4.	Die Hähnchenbrust-Filets aus der Pfanne nehmen und in Streifen schneiden. Danach wieder in die Pfanne geben und nochmals scharf anbraten lassen \r\n5.	Die Filets mit Salz Pfeffer Chili und Paprika würzen. Die Sahne dazu geben und 15min kochen lassen. ( Wer mag kann ebenfalls einen Schuss Weißwein hinzu geben ) \r\n6.	Die Filets nochmals mit Salz und Pfeffer würzen. \r\n7.	Die Nudeln abkippen und in die Sahne füllen. \r\n8.	Nochmals umrühren und genießen.\r\n'),
(4, 'Milchreis', '3', '1.	Die Milch mit dem Zucker und dem Reis zum Kochen bringen. \r\n2.	Unter ständigem Umrühren die Milch aufkochen lassen.\r\n3.	Bei geringer Hitze und geschlossenem Deckel den Reis ungefähr eine Stunde köcheln lassen. \r\n4.	Nach einer guten Stunde ist der Milchreis essfertig.\r\n5.	Den Milchreis nach belieben mit Zimt und Zucker würzen. \r\n6.	Alternativ kann er auch mit Apfelmus genossen werden. \r\n');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rezept`
--

CREATE TABLE `rezept` (
  `idgericht` int(11) NOT NULL,
  `idzutat` int(11) NOT NULL,
  `menge` text,
  `mengenangabe` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `rezept`
--

INSERT INTO `rezept` (`idgericht`, `idzutat`, `menge`, `mengenangabe`) VALUES
(0, 5, '2', 'große'),
(0, 6, '2', 'große'),
(0, 7, '2', 'Zehen'),
(0, 8, '2', 'große'),
(0, 9, '1', 'Dose (540 ml)'),
(0, 10, '2', 'Dosen (540 ml)'),
(0, 11, '2', 'Dosen'),
(0, 12, '375', 'gramm'),
(1, 13, '1000', 'gramm'),
(1, 14, '9', NULL),
(1, 15, '1', 'kleinen'),
(1, 16, '1', 'Glas'),
(1, 17, '1', 'großen'),
(1, 18, '9', 'Scheiben'),
(1, 1, '4', NULL),
(1, 5, '2', NULL),
(1, 19, '1', NULL),
(1, 20, NULL, NULL),
(2, 1, '2', 'kg'),
(2, 2, '1', 'ganzes'),
(2, 3, '350', 'ml'),
(2, 4, '1', 'ganzer'),
(3, 24, '500', 'gramm'),
(3, 25, '600', 'gramm'),
(3, 3, '400', 'ml'),
(3, 26, NULL, NULL),
(4, 21, '250', 'gramm'),
(4, 22, '1', 'liter'),
(4, 23, '3', 'Esslöffel');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `unvertraeglichkeiten`
--

CREATE TABLE `unvertraeglichkeiten` (
  `idunvertraeglichkeiten` int(11) NOT NULL,
  `unvertraeglichkeitenbezeichnung` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `unvertraeglichkeiten`
--

INSERT INTO `unvertraeglichkeiten` (`idunvertraeglichkeiten`, `unvertraeglichkeitenbezeichnung`) VALUES
(0, 'Laktoseintolerant'),
(1, 'Glutenunverträglich');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `zutat`
--

CREATE TABLE `zutat` (
  `idzutat` int(11) NOT NULL,
  `bezeichnung` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `zutat`
--

INSERT INTO `zutat` (`idzutat`, `bezeichnung`) VALUES
(1, 'Tomaten'),
(2, 'Baguette'),
(3, 'Sahne'),
(4, 'Brühwürfel'),
(5, 'Zwiebel'),
(6, 'Paprika'),
(7, 'Knoblauch'),
(8, 'Chili'),
(9, 'Kidneybohnen'),
(10, 'Goldmais'),
(11, 'Tomaten passiert'),
(12, 'Reis'),
(13, 'Hackfleisch'),
(14, 'Hamburgerbrötchen'),
(15, 'Salatkopf'),
(16, 'Gewürzgurken'),
(17, 'Mozarella'),
(18, 'Cheddar'),
(19, 'Ei'),
(20, 'Maggi'),
(21, 'Milchreis'),
(22, 'Milch'),
(23, 'Zucker'),
(24, 'Hähnchenbrustfilet'),
(25, 'Fettucine (Nudeln)'),
(26, 'Weißwein');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `essensgewohnheiten`
--
ALTER TABLE `essensgewohnheiten`
  ADD PRIMARY KEY (`idessensgewohnheiten`);

--
-- Indizes für die Tabelle `gericht`
--
ALTER TABLE `gericht`
  ADD PRIMARY KEY (`idgericht`);

--
-- Indizes für die Tabelle `unvertraeglichkeiten`
--
ALTER TABLE `unvertraeglichkeiten`
  ADD PRIMARY KEY (`idunvertraeglichkeiten`);

--
-- Indizes für die Tabelle `zutat`
--
ALTER TABLE `zutat`
  ADD PRIMARY KEY (`idzutat`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `essensgewohnheiten`
--
ALTER TABLE `essensgewohnheiten`
  MODIFY `idessensgewohnheiten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `gericht`
--
ALTER TABLE `gericht`
  MODIFY `idgericht` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT für Tabelle `unvertraeglichkeiten`
--
ALTER TABLE `unvertraeglichkeiten`
  MODIFY `idunvertraeglichkeiten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `zutat`
--
ALTER TABLE `zutat`
  MODIFY `idzutat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
