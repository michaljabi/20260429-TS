console.log("Hello world");

// to jest prosty komentarz liniowy.

/*

To
jest
komentarz
blokowy.

*/

// Dowolny poprawny ("niedynamiczny") JavaScript — to z założenia poprawny kod w TypeScript:
let hello = "World number " + 2;
console.log(hello);

// To na co jednak TS nie pozwala — to dynamiczna zmiana typów:
let iMustBeAString = "Hello";

// Usuń komentarz pod spodem, aby zobaczyć błąd.
// iMustBeAString = 102;

// Zauważ jednak, że kod dalej "wykonuje się". I mimo że mamy błąd z TS nie jest to przecież błąd w JavaScript!
// IDE informuje nas o błędzie
console.log(iMustBeAString);

// Podobne "pilnowanie" nas zauważymy przy używaniu metod i funkcji:
function iGotExactly3Params(param1: string, param2: boolean, param3: number) {}

// Odkomentuj żeby zobaczyć błąd.
// iGotExactly3Params('Hello!')

// Tutaj w standardowym JS - nie dostalibyśmy błędu - ponieważ pomimo zadeklarowania dokładnie 3 parametrów,
// możemy podać dowolną ilość argumentów. W TypeScript - to nie przejdzie. Musimy podać dokładnie 3 argumenty !
