/**
 * Zadanie 4:
 *
 * Nie modyfikując funkcji getVatTaxRateFromServer, wywołaj ją i przekaż odpowiedni callback
 * tak aby odebrać wartość podatku i przeliczyć ceny po uwzględnieniu VAT
 * wymyśl te cenę - np. wartość koszyka = 300 zł
 * Przykładowo pokazanie wyniku:
 * console.log(300 + 300 * vatRate) // gdzie vatRate to odebrany argument z callback
 *
 * Napisz odpowiedni typ dla funkcji calculations i użyj go
 *
 *
 * 4.1 dodatkowe punkty:
 * - symuluj zwrot wartości podatku dopiero po 3 sekundach
 *
 * 4.2 dodatkowe punkty +:
 * - rzuć wyjątek jeśli calculations nie jest funkcją
 * - napisz taki właśnie przypadek i obsłuż go w try - catch
 * */

// jeśli zapiszesz Arrow function jako one-liner to nie musisz nawet pisac return
const arrowNumber = () => 800;
console.log(arrowNumber());

const arrowMultiline = () => {
  const a = 10;
  return a * 5;
};
console.log(arrowMultiline());

// Typescript types
type CallbackTaxFn = (tax: number) => void;

// function getVatTaxRateFromServer(calculations: CallbackTaxFn) {
// PROVIDER:
function getVatTaxRateFromServer(calculations?: (tax: number) => void) {
  console.log(calculations);
  console.log(!calculations);
  if (!calculations) {
    throw new Error("Calculations must be a function");
  }
  calculations(0.23);
  setTimeout(() => {
    if (!calculations) {
      // Jeśli zrobimy tak to try - catch nie zadziała dla tego kodu asynchronicznego.
      // rozwiązaniem będą Promise!
      // problemem jest tutaj asynchroniczność.
      throw new Error("Calculations must be a function");
    }
    calculations(0.24);
  }, 3000);
}

try {
  getVatTaxRateFromServer();
  console.log("Wykonam się jeśli wszystko ok...");
} catch (e: unknown) {
  // instanceof guard
  // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
  if (e instanceof ReferenceError) {
    console.log("Coś jest źle w kodzie...");
    console.log(e.name);
    console.log(e.message);
  } else if (e instanceof Error) {
    console.log(e.name);
    console.log(e.message);
  } else if (typeof e === "string") {
    console.log(e);
  } else {
    console.log("Aaaa... coś poszło nie tak...");
  }
}

// przykład Callback:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// CALLBACK CONSUMER
getVatTaxRateFromServer((vatRate: number) => {
  console.log(300 + 300 * vatRate);
});

// CALLBACK CONSUMER #2
// getVatTaxRateFromServer((vatRate: number) => {
//   console.log(300 + 300 * vatRate);
// })

// CALLBACK CONSUMER #3
// getVatTaxRateFromServer((vatRate: number) => {
//   console.log(300 + 300 * vatRate);
// })
