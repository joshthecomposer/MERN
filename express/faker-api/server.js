const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department()
  }
  return newFake;
}

const createUser = () => {
  const newUser = {
    _id : faker.random.numeric(10),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(8)
  }
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    _id: faker.random.numeric(10),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
  return newCompany;
}

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
})
app.get("/api/user/company", (req, res) => {
  const result = {
    company: createCompany(),
    user: createUser()
  }
  res.json(result);
})
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );