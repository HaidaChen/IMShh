CREATE TABLE T_CUSTOMER(
    id varchar(20) not null,
    name varchar(20) not null,
    address varchar(256),
    phone varchar(20),
    eMail varchar(20),
    fax varchar(20),
    contacts varchar(20),
    createDate date,  
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);

CREATE TABLE T_SUPPLIER(
    id varchar(20) not null,
    name varchar(20) not null,
    address varchar(256),
    phone varchar(20),
    eMail varchar(20),
    fax varchar(20),
    contacts varchar(20),
    createDate date,  
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);

CREATE TABLE T_Product(
    id varchar(20) not null,
    code varchar(20) not null,
    name varchar(20) not null,
    specification varchar(64),
    model varchar(64),    
    lineDate date, 
    downlineDate date,
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);