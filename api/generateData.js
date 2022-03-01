const { faker } = require("@faker-js/faker");

var db = { courses: [] };

for (var i = 1; i <= 300; i++) {
  db.courses.push({
    id: i,
    //   name: faker.address.city(),
    description: faker.lorem.words(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number(),
  });
}

console.log(JSON.stringify(db));
