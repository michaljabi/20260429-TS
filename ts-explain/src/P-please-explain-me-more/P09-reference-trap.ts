
const user = {name: 'Michał'}


const user2 = user;


console.log(user)
console.log(user2)


user2.name = 'Kasia';

console.log(user2);
// efekt uboczny:
console.log(user);

function userCreator(name: string) {
    return { name: name, hello() {} }
    // object property shorthand:
    // return { name }
}


console.log(userCreator('Michał'))
console.log(userCreator('Kasia'))

const user3 = userCreator('Włodek');
const user4 = userCreator('Marysia');

console.log(user3)
console.log(user4)