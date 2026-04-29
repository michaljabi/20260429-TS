// @ts-check
/**
 * Typescript może istnieć razem z JavaScript'em
 *
 * Co jest dość ciekawym rozwiązaniem, ale zanim do tego dojdziemy — zobacz poniższy przykład
 *
 *
 * Załóżmy, że robimy prostą bibliotekę do obliczeń matematycznych...
 * Wszystko piszemy w czystym JavaScript i tak publikujemy to na npm
 *
 * biblioteka ma swój kształt i jest dołączona np. do przestrzeni globalnej naszego
 *
 * @typedef { import('./c102-the-shape-of-your-data-types').MathInterface } MathInterface
 * */

// Teraz spróbuj użyć metod z: mathOLib, aby sprawdzić działanie TS + Intellisense:
/** @type {MathInterface} */
// - Odkomentuj linie poniżej i sprawdź działanie:
// let mathOLib = {};
// console.log(mathOLib)

/**
 * Docelowo w większych projektach JS, nie piszemy plików .d.ts "ręcznie",
 * Bardzo często — biblioteki, które są napisane w JavaScript na npm,
 * posiadają swoje dedykowane pliki z definicjami typów.
 *
 * Zobaczymy to na przykładzie jQuery — bardzo popularnej biblioteki do obsługi DOM.
 * W przygotowanym dla Was projekcie z jQuery użyto następujących komend:
 *
 * npm i jquery
 * npm i -D @types/jquery
 *
 * Sprawdź projekt z jQuery — aby zobaczyć rezultat
 * */

export {};
