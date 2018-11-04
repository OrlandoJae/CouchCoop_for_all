-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 04. Nov 2018 um 20:02
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
  `person` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `gericht`
--

INSERT INTO `gericht` (`idgericht`, `titel`, `person`) VALUES
(0, 'Chilli Sin carne', '4'),
(1, 'Hamburger', '3'),
(2, 'Tomatensuppe', '4');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `rezept`
--

CREATE TABLE `rezept` (
  `idgericht` int(2) NOT NULL,
  `idzutat` int(3) NOT NULL,
  `menge` varchar(5) NOT NULL,
  `mengenangabe` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `rezept`
--

INSERT INTO `rezept` (`idgericht`, `idzutat`, `menge`, `mengenangabe`) VALUES
(0, 2, '	1', '	ganzes'),
(0, 3, '	350', '	ml'),
(0, 4, '	1', '	ganzer'),
(1, 2, '	kg', ''),
(1, 5, '	2', '	groáe'),
(1, 6, '	2', '	groáe'),
(1, 7, '	2', '	2 zehen'),
(1, 8, '	2', '	groáe'),
(1, 9, '	1', '	 Dosen (540ml)'),
(1, 10, '	2', '	Dosen (540ml)'),
(1, 11, '	2', '	2 Dosen'),
(1, 12, '	375', '	gramm'),
(2, 1, '	4', '.'),
(2, 5, '	2', '.'),
(2, 13, '	1000', '	gramm'),
(2, 14, '	9', '.'),
(2, 15, '	1', '	kleinen'),
(2, 16, '	1', '	Glas'),
(2, 17, '	1', '	groáen'),
(2, 18, '	9', '	Scheiben'),
(2, 19, '	1', '.');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `unvertraeglichkeiten`
--

CREATE TABLE `unvertraeglichkeiten` (
  `idunvertraeglichkeiten` int(11) NOT NULL,
  `bezeichnung` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `unvertraeglichkeiten`
--

INSERT INTO `unvertraeglichkeiten` (`idunvertraeglichkeiten`, `bezeichnung`) VALUES
(1, 'Laktoseintolerant'),
(2, 'Glutenunverträglich');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `zutat`
--

CREATE TABLE `zutat` (
  `idzutat` int(11) NOT NULL,
  `bezeichnung` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `zutat`
--

INSERT INTO `zutat` (`idzutat`, `bezeichnung`) VALUES
(0, 'Baguette'),
(1, 'Sahne'),
(2, 'Brühwürfel'),
(3, 'Zwiebel'),
(4, 'Paprika'),
(5, 'Knoblauch'),
(6, 'Chili'),
(7, 'Kidneybohnen'),
(8, 'Goldmais'),
(9, 'Tomaten passiert'),
(10, 'Reis'),
(11, 'Hackfleisch'),
(12, 'Hamburgerbrötchen'),
(13, 'Salatkopf'),
(14, 'Gewürzgurken'),
(15, 'Mozarella'),
(16, 'Cheddar'),
(17, 'Ei'),
(18, 'Maggi'),
(19, 'Tomaten');

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
-- Indizes für die Tabelle `rezept`
--
ALTER TABLE `rezept`
  ADD KEY `idgericht` (`idgericht`),
  ADD KEY `idzutat` (`idzutat`);

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
  MODIFY `idgericht` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `unvertraeglichkeiten`
--
ALTER TABLE `unvertraeglichkeiten`
  MODIFY `idunvertraeglichkeiten` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `zutat`
--
ALTER TABLE `zutat`
  MODIFY `idzutat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `rezept`
--
ALTER TABLE `rezept`
  ADD CONSTRAINT `rezept_ibfk_1` FOREIGN KEY (`idgericht`) REFERENCES `gericht` (`idgericht`),
  ADD CONSTRAINT `rezept_ibfk_2` FOREIGN KEY (`idzutat`) REFERENCES `zutat` (`idzutat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
