DROP DATABASE IF EXISTS Human_Resource;
CREATE DATABASE Human_Resource;
USE Human_Resource

/****************DEPARTMENT TABLE****************************/

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) 
   
);

/****************ROLE TABLE**********************************/

CREATE TABLE roles (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(30) NOT NULL,
     salary DECIMAL(10, 2) NOT NULL,
     department_id INT
     
);

/****************EMPLOYEE TABLE******************************/

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30), 
    role_id INT,
    manager_id INT,
    Remaining_PTO INT,
    Remaining_Sick_Days INT,
    Hire_Date DATE,
    New_Period DATE
    
);

