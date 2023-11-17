USE project;

DROP TABLE IF EXISTS Owner, ESP_DATA, User, Entreprise, ESP;

CREATE TABLE IF NOT EXISTS Entreprise (
    id int primary key auto_increment,
    nom varchar(100) not null unique
);

CREATE TABLE IF NOT EXISTS User (
    id int primary key auto_increment,
    lastname varchar(50) not null,
    firstname varchar(50) not null,
    email varchar(250) not null,
    password varchar(300),
    id_entreprise int not null REFERENCES Entreprise(id)
);

CREATE TABLE IF NOT EXISTS ESP (
    id int primary key auto_increment
);

CREATE TABLE IF NOT EXISTS ESP_DATA (
    id int primary key auto_increment,
    data json,
    ts datetime not null,
    id_esp int REFERENCES ESP(id)
);

CREATE TABLE IF NOT EXISTS Owner (
    id_user int not null REFERENCES User(id),
    id_esp int not null REFERENCES ESP(id)
);