var { faker } = require("@faker-js/faker");

/*
interface Course {
  code: string;
  name: string;
  attendance: string;
  attendanceType: string;
  courseStatus: string;
  courseLevel: string;
  locations: string[];
}

interface Database {
  courses: Course[];
}
*/
var db = { courses: [] };

for (var i = 1; i <= 300; i++) {
  db.courses.push({
    code:
      faker.datatype.number(9) +
      faker.lorem.word().substring(0, 2).toUpperCase() +
      faker.datatype.number(999),
    name:
      faker.helpers.randomize(["Master", "Bachelor"]) +
      " of " +
      faker.helpers.randomize([
        "Computer Science",
        "Computer Engineering",
        "Nursing",
        "Business Admistration",
        "Finance",
        "Accounting",
      ]),
    attendance: faker.helpers.randomize([
      "Online",
      "Uni Adelaide - North Tce",
      "Uni Adelaide - Helen Mayo",
      "Uni Adelaide - Frome Rd",
    ]),
    attendanceType: faker.helpers.randomize([
      "Full Time",
      "Part Time",
      "Full Time or Part Time",
    ]),
    courseStatus: faker.helpers.randomize(["A", "B", "C"]),
    // courseLevel: faker.lorem.word(),
    // locations: Array.from({ length: 1 }, {return faker.address.city()}),
  });
}

console.log(JSON.stringify(db));
