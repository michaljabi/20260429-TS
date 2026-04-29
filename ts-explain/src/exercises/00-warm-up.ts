// Komentarz powyżej wskazuje kompilerowi typescript — że ma nie analizować tego pliku...
/**
 * Zadanie 0:
 * Warm up.
 *
 * Usuń z góry // @ts-nocheck
 *
 * Popraw zapisy tak, aby doprowadzić do prawidłowego wyświetlenia:
 *
 * 'You reached the end! - BRAVO'
 * na konsoli...
 *
 * oraz: pozbądź się wszystkich błędów z kompilatora TS
 *
 * // @ts-nocheck
 * // @ts-ignore
 * */

// Coding standards:

// PascalCase - nazwy class
// camelCase - nazwy zmiennych, stałych, parametrów, property
// kebab-case - nazwy wartości w css etc. (nielegalne w JS)
// SNAKE_CASE - jakaś Globalna stała (podkreślenie że używana w całym projekcie np.)

let myHello = "Hello";
console.log(myHello, "World");

myHello = "Serious";
const help = "HelpMe out!";

let doneFlag = true;
const LARGE_NUMBER = 2048;

// tutaj miał być komentarz, że addNumbers musi zwracać number !
function addNumbers(a: number, b: number): number {
  return a + b;
}

// let result: number;
const result = addNumbers(10, 20);

console.log("Result is:", result + 90);

const helloStranger = (): string => "Hello Stranger !";

console.log(helloStranger());

function randomNumber(): number {
  return Math.random() * 100;
}

console.log("You reached the end! - BRAVO");
