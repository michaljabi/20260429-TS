const person = {
  name: "Michał",
  lastName: "Kowalsky",
  sex: "male",
  vipStatus: true,
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
const { lastName, name } = person;

console.log(name, lastName)


// stare podejście:
const name2 = person.name;
const lastName2 = person.lastName;
console.log(name2, lastName2)