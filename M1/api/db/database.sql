Drop schema if exists `digimon`;
Create schema digimon;
use digimon;



-- Tabela para armazenar informações sobre tipos de Digimon
DROP TABLE IF EXISTS `Tipo`;
CREATE TABLE `Tipo` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informações sobre Digimon
DROP TABLE IF EXISTS `Digimon`;
CREATE TABLE `Digimon` (
  `id_digimon` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `tipo1` int(11) NOT NULL,
  `tipo2` int(11) NOT NULL,
  PRIMARY KEY (`id_digimon`),
  FOREIGN KEY (`tipo1`) REFERENCES `Tipo`(`id_tipo`),
  FOREIGN KEY (`tipo2`) REFERENCES `Tipo`(`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informações sobre treinadores
DROP TABLE IF EXISTS `Trainer`;
CREATE TABLE `Trainer` (
  `id_trainer` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id_trainer`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Tabela para armazenar informações sobre times
DROP TABLE IF EXISTS `Team`;
CREATE TABLE `Team` (
  `id_team` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `id_trainer` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_team`),
  FOREIGN KEY (`id_trainer`) REFERENCES `Trainer`(`id_trainer`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- Tabela para armazenar informações sobre batalhas
DROP TABLE IF EXISTS `Battles`;
CREATE TABLE `Battles` (
  `id_battle` int(11) NOT NULL AUTO_INCREMENT,
  `team1` int(11) NOT NULL,
  `team2` int(11) NOT NULL,
  `winner` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id_battle`),
  FOREIGN KEY (`team1`) REFERENCES `Team`(`id_team`),
  FOREIGN KEY (`team2`) REFERENCES `Team`(`id_team`),
  FOREIGN KEY (`winner`) REFERENCES `Team`(`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



insert into `Tipo` (nome) values ("vaccine");
insert into `Tipo` (nome) values ("data");
insert into `Tipo` (nome) values ("virus");
insert into `Tipo` (nome) values ("reptile");
insert into `Tipo` (nome) values ("android");
insert into `Tipo` (nome) values ("fire");
insert into `Tipo` (nome) values ("vegetation");
insert into `Tipo` (nome) values ("larva");
insert into `Tipo` (nome) values ("machine");
insert into `Tipo` (nome) values ("ghost");
insert into `Tipo` (nome) values("bird dragon");



insert into `Digimon` (nome, tipo1, tipo2) values ("Agumon", 1, 4);
insert into `Digimon` (nome, tipo1, tipo2) values ("Andromon", 1, 5);
insert into `Digimon` (nome, tipo1, tipo2) values ("Candlemon", 2, 6);
insert into `Digimon` (nome, tipo1, tipo2) values ("Pteromon", 2, 11);
insert into `Digimon` (nome, tipo1, tipo2) values ("Aruraumon", 2, 7);
insert into `Digimon` (nome, tipo1, tipo2) values ("DoKunemon", 3, 8);
insert into `Digimon` (nome, tipo1, tipo2) values ("Datamon", 3, 9);
insert into `Digimon` (nome, tipo1, tipo2) values ("Cherrymon", 3, 7);
insert into `Digimon` (nome, tipo1, tipo2) values ("Bakemon", 3, 10);



insert into `Trainer`(nome) values ("Trainer 1");
insert into `Trainer`(nome) values ("Trainer 2");
insert into `Trainer`(nome) values ("Trainer 3");



insert into `Team` (nome, id_trainer) values ("Equipa 1", 1);
insert into `Team` (nome, id_trainer) values ("Equipa 2", 2);
insert into `Team` (nome, id_trainer) values ("Equipa 3", 3);



INSERT INTO `Battles` (team1, team2, winner, date) VALUES(1, 2, 1, '2024-05-01 14:30:00');
INSERT INTO `Battles` (team1, team2, winner, date) VALUES(3, 1, 1, '2024-05-02 15:00:00');
INSERT INTO `Battles` (team1, team2, winner, date) VALUES(2, 3, 3, '2024-05-03 16:00:00');
INSERT INTO `Battles` (team1, team2, winner, date) VALUES(1, 2, 1, '2024-05-01 14:30:00');
INSERT INTO `Battles` (team1, team2, winner, date) VALUES(1, 3, 3, '2024-05-04 17:00:00');


GRANT ALL PRIVILEGES ON digimon.* TO 'Digimon'@'%' IDENTIFIED BY 'Digimon' WITH GRANT OPTION;
FLUSH PRIVILEGES;

