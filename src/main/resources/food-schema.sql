drop table if exists food CASCADE;

create table food (id bigint generated by default as identity, food_price float not null, food_title varchar(255), primary key (id));