DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    grade TEXT NOT NULL,
    status TEXT NOT NULL,
    last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO students (name, grade, status) VALUES 
('Alice Johnson', '10th', 'active'),
('Bob Smith', '11th', 'active'),
('Charlie Brown', '9th', 'inactive'),
('Diana Prince', '12th', 'active'),
('Evan Wright', '10th', 'active');
