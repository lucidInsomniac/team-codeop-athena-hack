DROP TABLE IF EXISTS User, Mood, Symptoms, moodform;

CREATE TABLE User ( 
    userid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(200),
    avatar VARCHAR(40),
    createdOn DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Mood ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    mood1 INT NOT NULL,
    mood2 INT NOT NULL,
    mood3 INT NOT NULL,
    mood4 INT NOT NULL,
    mood5 INT NOT NULL,
    addedOn DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userid) REFERENCES User(userid)
);

CREATE TABLE Symptoms ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    sleep_pattern VARCHAR(1),
    substances VARCHAR(1),
    swings VARCHAR(1),
    social VARCHAR(1),
    submittedOn DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userid) REFERENCES User(userid)
);

CREATE TABLE moodform ( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    dateadded DATETIME,
    mood INT NOT NULL,
    sleeping VARCHAR(3),
    substances VARCHAR(3),
    swings VARCHAR(3),
    friends VARCHAR(3),
    FOREIGN KEY(userid) REFERENCES User(userid)
);

INSERT INTO User (username, email, password, avatar)
    VALUES
        ("Penelope", "Penelope@email.com", "$2b$12$eFzMWbS9SogNtxkmo3J7aO8FQMFQSKbtpwLMIOVsF6GGKpTQdgq.W", "1.jpg");

INSERT INTO Mood (userid, mood1, mood2, mood3, mood4, mood5)
    VALUES
        (1, 2, 3, 4, 5, 1);

INSERT INTO Symptoms (userid, sleep_pattern, substances, swings, social)
    VALUES
        (1, "Y", "N", "Y", "N");

INSERT INTO  moodform (userid, dateadded, mood, sleeping, substances, swings, friends)
    VALUES
        (1, "2021-11-07", 3, "Yes", "No", "Yes", "No"),
        (1, "2021-11-08", 1, "No", "No", "Yes", "Yes"),
        (1, "2021-11-09", 4, "No", "Yes", "No", "Yes"),
        (1, "2021-11-10", 2, "No", "No", "Yes", "Yes"),
        (1, "2021-11-11", 3, "Yes", "No", "Yes", "Yes"),
        (1, "2021-11-12", 2, "No", "No", "No", "No"),
        (1, "2021-11-13", 1, "Yes", "No", "No", "No");