/** 
 * Każdy przykład z "exercises" uruchamiany jest w następujący sposób.
 *
 * Kompilator Typescript musi działać w tzw. Watch mode — dzięki czemu,
 * jeśli zmienimy cokolwiek w tym pliku — zmieni się to w wynikowym pliku .js
 *
 * 1. Uruchom kompiler poleceniem:
 * npm run watch
 *
 * Potrzebujemy plik .js, żeby uruchomić go przez Node.js produkcyjnie
 * jednak żeby nie trzeba było uruchamiać go co chwila poleceniem
 *
 * node nazwa-pliku.js
 *
 * lub od node v22+
 *
 * node nazwa-pliku.ts
 *
 * (to też by zadziałało, ponieważ powyżej v22 mamy wsparcie dla TypeScript)
 *
 * używamy narzędzia "nodemon" - które będzie uruchamiało plik .js za każdym razem,
 * jeśli cokolwiek się w nim zmieni. Podobnie jak tsc --watch (tzw. watch-mode)
 * jednak tym razem
 *
 * 2. Uruchom konkretny przykład poleceniem (w zależności od przykładu e0 - e8):
 * npm run e0
 *
 *  np. ten przykład uruchamia się jako:
 npm run explain
 * */
function runMeAtStart(): string {
  return "Witaj w świecie TypeScript";
}

console.log(runMeAtStart());
