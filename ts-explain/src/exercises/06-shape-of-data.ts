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
const numbersOrStrings = ['', 0];
const numbersOrStrings2: (string | number)[] = [];
const numbersOrStrings3: Array<string | number> = [];
const strings = [''];

function joiner(strTuple: string[]): string {
  return strTuple[0] + " " + strTuple[1];
}

function giveFullName(myUser: {name: string, lastName: string, sex: string, vipStatus?: boolean}): string {
  const fullName = myUser.name + " " + myUser.lastName;
  let prefix = '';
  let suffix = '';
  if (myUser.sex === "female") {
    prefix = "Pani";
  } else if (myUser.sex === "male") {
    prefix = "Pan";
  }
  if (myUser.vipStatus) {
    suffix = " - the VIP";
  }
  // return (prefix + " " + fullName + suffix).trim();
  return joiner([prefix, joiner([fullName, suffix])]);
}

// rozwiązane, ale celowa literówka
console.log(giveFullName({name: 'Michał', lastName: 'Kowalsky', sex: 'malez', vipStatus: true}));

console.log(joiner(['pani', 'Kasia']))