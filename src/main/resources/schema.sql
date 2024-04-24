create table Purchases
(
    id int auto_increment ,
    movie varchar(255),
    numberOfTickets varchar(255),
    fName varchar(255),
    lName varchar(255),
    phoneNumber varchar(255),
    email varchar(255),
    primary key (fName, lName)
);