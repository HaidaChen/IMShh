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

CREATE TABLE T_MATERIAL(
    id varchar(20) not null,
    name varchar(20) not null,
    specification varchar(64),
    unit varchar(20),    
    category varchar(20), 
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);

CREATE TABLE T_ORDER(
    id varchar(20) not null,
    identify varchar(20) not null unique,
    custID varchar(20),
    custName varchar(20),    
    orderDate date,
    amount numeric(10,2),
    state char(1),
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);

CREATE TABLE T_ORDERDETAIL(
    id varchar(20) not null,
    orderId varchar(20) not null,
    pdtNo varchar(20) not null unique,
    pdtID varchar(20),
    pdtName varchar(20),    
    quantity int,
    priceRMB numeric(10,2),
    priceDollar numeric(10,2),
    totlemnt numeric(10,2),
    progress int,
    
    modifyDate datetime,
    remark varchar(1024),
    status char(1)
);