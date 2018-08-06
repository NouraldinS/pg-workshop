BEGIN;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

INSERT INTO users (name) VALUES ('noureldean'), ('kanaan'), ('Mohanned'), ('Asala'), ('Ali');

COMMIT;
