DROP TABLE IF EXISTS SIM_CARDS;

CREATE TABLE SIM_CARDS(
    sim_card_no INT PRIMARY KEY;
    mobile_no INT NOT NULL;
    curr_status VARCHAR(10) NOT NULL;
    expiry_date VARCHAR(10) NOT NULL;
    registration_state VARCHAR(20)NOT NULL;
    telecom_provider VARCHAR(10) NOT NULL;
    full_name VARCHAR(30) NOT NULL;
    kyc boolean;
);