/****************DEP. SEEDS******************************/

INSERT INTO department(id, name)
VALUE (1, 'Sales');
INSERT INTO department(id, name)
VALUE (2, 'Finance');
INSERT INTO department(id, name)
VALUE (3, 'Legal');
INSERT INTO department(id, name)
VALUE (4, 'Engineers');

/****************ROLES SEEDS******************************/

INSERT INTO roles (title,salary,department_id)
VALUE ('Sales Manager', 120000, 1);
INSERT INTO roles (title,salary,department_id)
VALUE ('Sales Associate', 80000, 2);
INSERT INTO roles (title,salary,department_id)
VALUE ('Finance Manager', 140000, 3);
INSERT INTO roles (title,salary,department_id)
VALUE ('Finance Associate', 120000, 4);
INSERT INTO roles (title,salary,department_id)
VALUE ('Lawyer Partner', 200000, 5);
INSERT INTO roles (title,salary,department_id)
VALUE ('Lawyer', 160000, 6);
INSERT INTO roles (title,salary,department_id)
VALUE ('Engineer Manager', 160000, 7);
INSERT INTO roles (title,salary,department_id)
VALUE ('Engineer', 140000, 8);

/****************EMP. SEEDS******************************/

INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE ('Jim', 'Doe', null, 1, 14, 3, '2002-12-31', '2022-12-31');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE ('Jake', 'Llorrac', 3, 6, 7, 5, '2007-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Edna', 'Frank', 8, 8, 21, 0, '2015-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Tom', 'Ripley', 7, 2, 14, 7, '2017-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Liz', 'Cruz', 5, 3, 14, 7, '2019-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Ashley', 'James', 4, 6, 14, 7, '2021-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Barbara', 'Levy', 3, 7, 14, 7, '2012-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Josh', 'Davis', 7, 3, 10, 2, '2016-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Stella', 'Pavlova', 4, 2, 0, 7, '2018-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Arthur', 'Song', 1, 3, 9, 2, '2014-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Lauren', 'Boyle', null, 1, 14, 3, '2002-12-31', '2022-12-31');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Avi', 'Green', 3, 6, 7, 5, '2007-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Tim', 'Bar', 8, 8, 21, 0, '2015-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('John', 'James', 7, 2, 14, 7, '2017-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Andy', 'Young', 5, 3, 14, 7, '2019-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Pat', 'Stumuller', 4, 6, 14, 7, '2021-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Jack', 'Rogers', 3, 7, 14, 7, '2012-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Rose', 'Gonzalez', 7, 3, 10, 2, '2016-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Sean', 'Forbes', 4, 2, 0, 7, '2018-05-05', '2023-05-05');
INSERT INTO employee (first_name, last_name, manager_id, role_id, Remaining_PTO, Remaining_Sick_Days, Hire_Date, New_Period )
VALUE('Dennis', 'Hickox', 1, 3, 9, 2, '2014-05-05', '2023-05-05');

/****************SELECT * FROM ****************************/

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;