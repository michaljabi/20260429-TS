/**
 * Zadanie 1:
 *
 * Migrując zapisy z JavaScript na TypeScript typ :any okazał nam się bardzo pomocny, jednak teraz
 * - czas zapisać poniższe typy poprawnie - zgodnie z zastosowaniem tych zmiennych i funkcji.
 *
 * Popraw zapisy programisty - tak by były używane właściwe typy danych i abyśmy mieli poprawne podpowiadanie składni
 * nie ingeruj w detale implementacji (kod powinien działać tak samo)
 * */

import { type StringOrNumber, x } from "./util-types";

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const result = addTwoNumbers(10, 20);

console.log("Wynik to", result);

// zobacz: c101 żeby do tego podejść:

// info will accept only a string or number!
function info(something: StringOrNumber): string {
  console.log("Wartość", something, "to", typeof something);

  // tak nie możemy - i o to chodzi, bo nie mamy pewności czy something to nie np. number !!!
  //something.charAt(0);
  if (typeof something === "string") {
    something.charAt(0);
  } else {
    something.toFixed();
  }

  return typeof something;
}

// NIEMOŻLIWE W JS (nie ma "przeładowywania", funkcji a w klasach: metod, konstuktorów)
// function info(something: string): string {
//   console.log("Wartość", something, "to", typeof something);
//   return typeof something;
// }
// union type - pomaga nam rozwiązać ten problem

let myFigure: StringOrNumber = 1000;
info(myFigure);

myFigure = "100.8";
info(myFigure);
