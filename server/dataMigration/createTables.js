const DB = require("../config/dbConn");

const createBatchTable = `CREATE TABLE IF NOT EXISTS batch(
 "batchId" SERIAL PRIMARY KEY,
 cost int NOT NULL,
 course varchar(255) NOT NULL,
 "startDate" DATE NOT NULL,
 "endDate" DATE NOT NULL,
 enabled BOOLEAN DEFAULT true
);
`;
const createStudentTable = `CREATE TABLE IF NOT EXISTS student(
 "studentId" SERIAL PRIMARY KEY,
 balance decimal NOT NULL,
 "firstName" varchar(255) NOT NULL,
 "lastName" varchar(255) NOT NULL,
 email varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 "batchId" int NOT NULL,
 "phoneNumber" varchar(255) NOT NULL,
 role varchar(255) DEFAULT 'student',
 enabled BOOLEAN DEFAULT true,
 CONSTRAINT fk_batch FOREIGN KEY("batchId") REFERENCES batch("batchId")	
);
`;
const createHomeworkTable = `CREATE TABLE IF NOT EXISTS homework(
 "homeworkId" SERIAL PRIMARY KEY,
 "studentId" int NOT NULL,
 "batchId" int NOT NULL,
 day int NOT NULL,
 link varchar(255) NULL,
 course varchar(255) NOT NULL,
 comment varchar(255) NULL,
 title varchar(255) NOT NULL,
 rating decimal DEFAULT 0,
 graded BOOLEAN DEFAULT false,
CONSTRAINT fk_batch FOREIGN KEY("batchId") REFERENCES batch("batchId"),
CONSTRAINT fk_student FOREIGN KEY("studentId") REFERENCES student("studentId")
)
`;
// new item has to be the last item in the array
[createBatchTable, createStudentTable, createHomeworkTable].forEach((item) => {
  DB.query(item, [], (err, result) => {
    if (err) {
      console.log("err: ", { err, query: item });
    }
    console.log(result);
  });
});
