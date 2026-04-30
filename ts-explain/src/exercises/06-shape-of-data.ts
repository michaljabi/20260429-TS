/**
 * Zadanie 6:
 *
 * Podobnie bez ingerencji w szczegóły implementacji,
 * przepraw zapisy z :any w odpowiednie typy - zgodne z założeniami programu.
 * ... tym razem mamy do czynienia z bardziej złożonymi typami
 *
 * po poprawieniu typów, zmień implementację, zastosuj funkcję `joiner`
 * - tam gdzie to możliwe (np - połączenie imie + nazwisko)
 * następnie:
 * - utwórz odpowiednie obiekty i przekaż do `giveFullName` tak aby potwierdzić poprawność działania kodu
 * */

// Wniosek Array to typ tzw. generyczny
// to znaczy, że w takcie użycia wymaga dodefiniowania (doprecyzowania).
// Array<string> === string[]
// Array<string | number> === (string | number)[]
// działa wnioskowanie:
const numbersOrStrings = ["", 0];
const numbersOrStrings2: (string | number)[] = [];
const numbersOrStrings3: Array<string | number> = [];
const strings = [""];

// function joiner(strTuple: [string, string]): string {
//   return strTuple[0] + " " + strTuple[1];
// }
// Nowoczesny JS/TS: tzw. destructuring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
// destrukturyzacje array mogę zrobić od razu w parameter!
function joiner([first, second]: [string, string]): string {
  // const [first, second] = strTuple;
  return `${first} ${second}`;
}

const realTuple: [string] = ["?"];

// tak możemy tylko z type (nie da się z interface - interface jest ZAWSZE obiektowy!)
type Money = number | string;

type Person = {
  name: string;
  lastName: string;
  sex: "female" | "male" | "not-set";
  vipStatus?: boolean;
};
// to w takim wypadku type - czy interface?

// rozszerzenie instiejącego typu Person o dodatkowe opcjonalne pole age - przez
interface Person2 extends Person {
  // name: string;
  // lastName: string;
  // sex: "female" | "male" | "not-set";
  // vipStatus?: boolean;
  age?: number;
}

// rozszerzanie typów o dodatkowe pola... dodajemy wymagane `age`
type AgedPerson = Person & { age: number };

const myPerson: AgedPerson = { name: '', lastName: '', sex: 'female', age: 19 };

function giveFullName(myUser: Person2): string {
  const fullName = `${myUser.name} ${myUser.lastName}`;
  let prefix = "";
  let suffix = "";
  if (myUser.sex === "female") {
    prefix = "Pani";
  } else if (myUser.sex === "male") {
    prefix = "Pan";
  }
  if (myUser.vipStatus) {
    suffix = " - the VIP";
  }
  // return (prefix + " " + fullName + suffix).trim();
  return joiner([prefix, joiner([fullName, suffix])]).trim();
}

// rozwiązane, ale celowa literówka
console.log(
  giveFullName({
    name: "Michał",
    lastName: "Kowalsky",
    sex: "male",
    vipStatus: true,
  }),
);

console.log(joiner(["pani", "Kasia"]));
