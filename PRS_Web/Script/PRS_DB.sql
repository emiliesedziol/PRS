
DROP TABLE IF EXISTs vendor;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTs status;
DROP TABLE IF EXISTS PurchaseRequestLineitem;
DROP TABLE IF EXISTS purchaserequest;


CREATE TABLE user (
	ID			int 			PRIMARY KEY 	AUTO_INCREMENT,
	UserName 	varchar(20)		not null,
	Password 	varchar(10) 	not null,
	FirstName 	varchar(20) 	not null,
	LastName 	varchar(20) 	not null,
	Phone 		varchar(12) 	not null,
	Email 		varchar(75) 	not null,
	IsReviewer 	tinyint(1)		DEFAULT 1 not null,
	IsAdmin 	tinyint(1)		DEFAULT 1 not null,
	IsActive 	tinyint(1) 		DEFAULT 1 not null,
	DateCreated	 datetime 		DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated	 datetime 		DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser int 			DEFAULT 1 not null,
    constraint uname unique (UserName)
);

CREATE TABLE status (
	ID				int 			PRIMARY KEY 	AUTO_INCREMENT,
	Description 	varchar(20) 	not null,
	IsActive 		tinyint(1)		DEFAULT 1 not null,
	DateCreated 	datetime 		DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated 	datetime 		DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser 	int 			DEFAULT 1 not null,
    CONSTRAINT uDescription unique (Description)
);

CREATE TABLE vendor (
	ID					int(12) 		PRIMARY KEY 	AUTO_INCREMENT,
	Code 				varchar(10) 	not null,
	Name				varchar(255) 	not null,
	Address 			varchar(255) 	not null,
	City 				varchar(255) 	not null,
	State 				varchar(2) 		not null,
	Zip 				varchar(10) 	not null,
	Phone 				varchar(12)		not null,
	Email 				varchar(100) 	not null,
	IsPreApproved 		tinyint 		not null,
	IsActive			tinyint(1)  	DEFAULT 1 not null,
	DateCreated			datetime 		DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated			datetime 		DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser 		int 			DEFAULT 1 not null,
    CONSTRAINT vcode unique (Code)
);

CREATE TABLE purchaserequest (
	ID					int 			PRIMARY KEY	AUTO_INCREMENT,
	UserId 				int 			not null,
	Description 		varchar(100) 	not null,
	Justification 		varchar(225)	not null,
	DateNeeded 			datetime,
	DeliveryMode 		varchar(25)		not null,
	StatusId 			int 			not null,
	Total 				decimal(10,2)  	not null,
	SubmittedDate 		datetime	 	not null,
	ReasonForRejection	varchar(100),
    IsActive 			tinyint(1)  	DEFAULT 1 not null,
	DateCreated 		datetime 		DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated 		datetime 		DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser 		int 			DEFAULT 1 not null,
	FOREIGN KEY (UserId) REFERENCES user (ID),
    FOREIGN KEY (StatusId) REFERENCES status(ID)
);



CREATE TABLE product (
	ID					int(12) 		PRIMARY KEY 	AUTO_INCREMENT,
    VendorId			int				not null,
	PartNumber 			varchar(50) 	not null,
	Name 				varchar(150) 	not null,
	Price 				decimal(10,2) 	not null,
	Unit 				varchar(255),
	Photopath 			varchar(255),
	IsActive 			tinyint(1)  	DEFAULT 1 not null,
	DateCreated 		datetime 		DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated 		datetime 		DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser 		int 			DEFAULT 1 not null,
	FOREIGN KEY (VendorId) REFERENCES vendor(ID),
    CONSTRAINT vendor_part unique (VendorId,PartNumber)
);

CREATE TABLE PurchaseRequestLineItem (
	ID					int 				PRIMARY KEY	AUTO_INCREMENT,
	PurchaseRequestId 	int 				not null,
	ProductId 			int 				not null,
	Quantity 			int 				not null,
	IsActive 			tinyint(1)  		DEFAULT 1,
	DateCreated 		datetime 			DEFAULT CURRENT_TIMESTAMP NOT NULL,
	DateUpdated 		datetime 			DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL,
	UpdatedByUser 		int 				DEFAULT 1 not null,
	FOREIGN KEY (ProductId ) REFERENCES product(ID),
	FOREIGN KEY (PurchaseRequestId) REFERENCES purchaserequest(ID),
    CONSTRAINT req_pdt UNIQUE (PurchaseRequestId, ProductId)
);

-- provided by Sean
-- insert some rows into the Status table
INSERT into status (description) VALUES
('New'),
('Approved'),
('Rejected');

-- insert some rows into the Vendor table
INSERT into vendor (ID, code, name, address, city, state, zip, phone, email, ispreapproved) VALUES
(1, 'BB-1001   ', 'Best Buy', '100 Best Buy Street', 'Louisville', 'KY', '40207', '502-111-9099', 'geeksquad@bestbuy.com', 0),
(2, 'AP-1001   ', 'Apple Inc', '1 Infinite Loop', 'Cupertino', 'CA', '95014', '800-123-4567', 'genius@apple.com', 0),
(3, 'AM-1001   ', 'Amazon', '410 Terry Ave. North', 'Seattle', 'WA', '98109','206-266-1000', 'amazon@amazon.com', 1),
(4, 'ST-1001   ', 'Staples', '9550 Mason Montgomery Rd', 'Mason', 'OH', '45040', '513-754-0235', 'support@orders.staples.com', 1),
(5, 'MC-1001   ', 'Micro Center', '11755 Mosteller Rd', 'Sharonville', 'OH', '45241', '513-782-8500', 'support@microcenter.com', 1);

-- insert some rows into the Product table
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (1,1,'ME280LL','iPad Mini 2',296.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (2,2,'ME280LL','iPad Mini 2',299.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (3,3,'105810','Hammermill Paper, Premium Multi-Purpose Paper Poly Wrap',8.99,'1 Ream / 500 Sheets',NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (4,4,'122374','HammerMill® Copy Plus Copy Paper, 8 1/2\" x 11\", Case',29.99,'1 Case, 10 Reams, 500 Sheets per ream',NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (5,4,'784551','Logitech M325 Wireless Optical Mouse, Ambidextrous, Black ',14.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (6,4,'382955','Staples Mouse Pad, Black',2.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (7,4,'2122178','AOC 24-Inch Class LED Monitor',99.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (8,4,'2460649','Laptop HP Notebook 15-AY163NR',529.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (9,4,'2256788','Laptop Dell i3552-3240BLK 15.6\"',239.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (10,4,'IM12M9520','Laptop Acer Acer™ Aspire One Cloudbook 14\"',224.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (11,4,'940600','Canon imageCLASS Copier (D530)',99.99,NULL,NULL);
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (12,5,'228148','Acer Aspire ATC-780A-UR12 Desktop Computer',399.99,'','/images/AcerAspireDesktop.jpg');
INSERT INTO `product` (`ID`,`VendorID`,`PartNumber`,`Name`,`Price`,`Unit`,`PhotoPath`) VALUES (13,5,'279364','Lenovo IdeaCentre All-In-One Desktop',349.99,'','/images/LenovoIdeaCenter.jpg');

INSERT INTO `USER` (`ID`, `UserName`, `Password`, `FirstName`, `LastName`, `phone`, `Email`, `IsReviewer`,`IsAdmin`,`IsActive`)
  VALUES(1, "ems", "ems123", "Emilie", "SedzioL", "5134817135","sedziole@gmail.com",true, true, true);
INSERT INTO `USER` (`ID`, `UserName`, `Password`, `FirstName`, `LastName`, `phone`, `Email`, `IsReviewer`,`IsAdmin`,`IsActive`)
  VALUES(2, "ems2", "ems1223", "E", "Sedzio", "51348135","sedziole@gmail.com", false, false, true);

INSERT INTO `purchaseRequest` (`ID`, `UserId`, `Description`, `Justification`, `DateNeeded`, `DeliveryMode`, `StatusId`,
	`Total`, `SubmittedDate`, `ReasonForRejection`, `IsActive`)
    VALUES (1, 1, 'test PR 1', 'no justification', '2017-12-14 20:06:43', 'mule', 1, 9.99, '2017-12-14 20:06:43', '', true);
 
 INSERT INTO `purchaseRequest` (`ID`, `UserId`, `Description`, `Justification`, `DateNeeded`, `DeliveryMode`, `StatusId`,
	`Total`, `SubmittedDate`, `ReasonForRejection`, `IsActive`)
    VALUES (2, 2, 'test PR 2', 'no justification', '2017-12-14 20:06:43', 'train', 1, 3.99, '2017-12-14 20:06:43', '', true);
    
INSERT INTO `purchaserequestlineitem` (`ID`, `PurchaseRequestId`, `ProductId`, `Quantity`, `IsActive`)
	VALUES ( 1, 1, 1, 2, true);
INSERT INTO `purchaserequestlineitem` (`ID`, `PurchaseRequestId`, `ProductId`, `Quantity`, `IsActive`)
	VALUES ( 2, 1, 2, 1, true);

INSERT INTO `purchaserequestlineitem` (`ID`, `PurchaseRequestId`, `ProductId`, `Quantity`, `IsActive`)
	VALUES ( 3, 2, 5, 1, true);
INSERT INTO `purchaserequestlineitem` (`ID`, `PurchaseRequestId`, `ProductId`, `Quantity`, `IsActive`)
	VALUES ( 4, 2, 6, 1, true);

-- create a user and grant privileges to that user
GRANT SELECT, INSERT, DELETE, UPDATE
ON prs_db.*
TO prs_user@localhost
IDENTIFIED BY 'sesame';