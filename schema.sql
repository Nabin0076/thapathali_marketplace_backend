create TABLE Users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE,
password VARCHAR(255),
email VARCHAR(255) UNIQUE not null,
gender INT
);


create TABLE Category(
category_id INT PRIMARY KEY,
category_name VARCHAR(255) UNIQUE
);

create TABLE Orders(
order_id INT PRIMARY KEY,
order_type VARCHAR(255) NOT NULL,
date DATE NOT NULL,
user_id INT,
product_name VARCHAR(255) NOT NULL,
category INT,
price INT,
product_status VARCHAR(255),
description text,
location VARCHAR(255) NOT NULL,
contact INT,
FOREIGN KEY (user_id) REFERENCES Users(user_id),
FOREIGN KEY (category) REFERENCES Category(category_id)
);

create TABLE Reservation(
seller_id INT,
order_id INT PRIMARY KEY,
reservation_date DATE NOT NULL,
buyer_id INT,
FOREIGN KEY (seller_id) REFERENCES Users(user_id),
FOREIGN KEY (buyer_id) REFERENCES Users(user_id)
);