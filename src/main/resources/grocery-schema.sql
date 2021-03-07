CREATE TABLE IF NOT EXISTS `grocery` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `grocery_name` VARCHAR(255) NOT NULL,
    `grocery_price` float NOT NULL
);