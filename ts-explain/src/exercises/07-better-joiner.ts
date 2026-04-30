/**
 * Zadanie 7:
 *
 * Cała implementacja tego kodu i jego działanie - są poprawne.
 * Jednak nie mam podpowiadania typów - znów poprzez zastosowanie :any
 *
 * Napisz odpowiednie typy:
 * - dla argumentów funkcji
 * - dla zwracanej funkcji i określ oddzielnie jej typ i nazwij
 *
 * */

const array: string[] = [''];

array.push('2', '3', '4', '5')
array.unshift()

type JoinerFn = (...strsToJoin: string[]) => string;

function joiner(joinString: string): JoinerFn {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  return (...strings: string[]): string => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    return strings.join(joinString);
  };
}

const hyphenJoiner = joiner("-");
const spaceJoiner = joiner(" ");
const snakeJoiner = joiner("_");

console.log(hyphenJoiner("this", "is", "sample"));
console.log(spaceJoiner("this", "is", "other", "sample"));
console.log(snakeJoiner("how", "does", "snake", "case", "looks", "like"));

const elements = ['a', 'b', 'c', 'd', 'e'];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.log(hyphenJoiner(...elements))


// Kiedy w JS potrzebujemy żeby funkcja zwracała funkcje:

const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(e => e * 2);

console.log(numbers)
console.log(doubleNumbers)
console.log(numbers)

// Wykorzystanie funkcji, która zraca funkcję do mapowania
function multiplyBy(multiplier: number) {
   return (value:number ) => value * multiplier
}

// refactoring (one liner):
const multiplyBy2 = (multiplier: number) => (value:number ) => value * multiplier

const multiplyNumbersBy = numbers.map(multiplyBy(4));
console.log(multiplyNumbersBy)