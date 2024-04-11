create table Purchases
(
    customerId INTEGER auto_increment not null,
    movie varchar(255),
    numberOfTickets varchar(255),
    fName varchar(255),
    lName varchar(255),
    phoneNr varchar(255),
    email varchar(255),
    primary key (customerId)
);