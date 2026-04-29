# Konfiguracja TypeScript w projekcie Node.js

Ten dokument przedstawia krok po kroku proces konfiguracji nowego projektu Node.js z `TypeScript`.

## Wymagania Wstępne

Zanim zaczniesz, musisz mieć zainstalowane na swoim systemie **Node.js** oraz **npm** (Node Package Manager).
- Node.js to środowisko uruchomieniowe dla JavaScript.
- npm to menedżer pakietów dla Node.js, używany do instalowania i zarządzania zależnościami projektu.

Możesz pobrać i zainstalować Node.js (który zawiera npm) z oficjalnej strony: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

---

## Krok 1: Inicjalizacja nowego projektu Node.js

Najpierw utwórz katalog dla swojego nowego projektu i przejdź do niego.

```bash
mkdir my-ts-project
cd my-ts-project
```

Następnie zainicjuj nowy projekt Node.js. To polecenie tworzy plik `package.json`, który będzie zarządzał zależnościami i skryptami Twojego projektu. Flaga `-y` akceptuje wszystkie domyślne ustawienia.

```bash
npm init -y
```

---

## Krok 2: Instalacja TypeScript

Node.js natywnie uruchamia JavaScript, a nie TypeScript. Dlatego Twój kod TypeScript musi zostać "transpilowany" (przekonwertowany) na JavaScript, zanim będzie mógł zostać wykonany.

Zainstaluj bibliotekę `typescript` jako zależność deweloperską (dev dependency). Jest ona potrzebna tylko na etapie pracy nad projektem. Innymi słowy TypeScript nie bedzie używany "na produkcji".

```bash
npm install -D typescript
```

---

## Krok 3: Konfiguracja TypeScript

Do zarządzania procesem transpilacji potrzebujesz pliku `tsconfig.json`. Plik ten zawiera wszystkie opcje konfiguracyjne dla kompilatora TypeScript (`tsc`).

Możesz wygenerować ten plik automatycznie, uruchamiając kompilator TypeScript z flagą `--init`. Następnie dodaj skrypt do swojego pliku `package.json`, aby łatwo uruchomić lokalnie zainstalowany `tsc`.

W swoim pliku `package.json` dodaj następujący blok `scripts`:

```json
"scripts": {
  "init:ts": "tsc --init"
}
```

Teraz uruchom skrypt z terminala:

```bash
npm run init:ts
```

> 💡UWAGA!  
> Możesz kojarzyć narzędzie `npx` i próbować bez zapisywania skryptu uruchomić polecenie `npx tsc --init`, to zadziała - ale TYLKO wtedy jeśli masz już zainstalownego `typescript` jako `devDependency` - jeśli pominiesz ten krok, dostaniesz informację że `tsc` który próbujesz uruchomić to nie to czego szukasz! (inna biblioteka się uruchomi).

Spowoduje to (`--init`) utworzenie pliku `tsconfig.json` z wieloma opcjami. W podstawowej konfiguracji dobrą praktyką jest zdefiniowanie, gdzie znajdują się pliki źródłowe i gdzie powinien trafiać skompilowany wynik JavaScript.

1.  Utwórz katalog `src` na swój kod źródłowy TypeScript.
2.  W pliku `tsconfig.json` znajdź i odkomentuj następujące właściwości, ustawiając je jak pokazano:

    ```json
    {
      "compilerOptions": {
        // ... inne opcje
        "outDir": "./dist",
        "rootDir": "./src"
        // ... inne opcje
      }
    }
    ```
    - `"rootDir": "./src"`: Informuje kompilator, że Twoje pliki źródłowe `.ts` znajdują się w katalogu `src`.
    - `"outDir": "./dist"`: Określa, że skompilowany wynik JavaScript powinien być umieszczony w katalogu `dist`.

---

## Krok 4: Dodanie skryptów budowania

Aby skompilować swój kod, dodaj skrypty `build` i `watch` do swojego pliku `package.json`.

```json
"scripts": {
  "init:ts": "tsc --init",
  "build": "tsc",
  "watch": "tsc --watch"
}
```

- `npm run build`: Wykona jednorazową kompilację wszystkich plików w katalogu `src`.
- `npm run watch`: Uruchomi kompilator w trybie "watch", który automatycznie rekompiluje plik po wykryciu zmiany.

## Krok 5: Lepszy watch mode

Do tzw. `watch mode` najlepiej nadaje się biblioteka `tsx` z opcją `tsx watch src/main.ts` na przykład.

Zainstaluj ją w projekcie i sprawdź jak działa.

```bash
npm install -D tsx
```

- podstawowa różnica to jednoczesne `uruchomienie` i `watch` w momencie wychwycenia zmiany w pliku
- zachowuje się to podobnie do biblioteki `nodemon` dla plików `.js` w Node.js
- BTW. `nodemon` też zadziała z plikami `.ts` ale wymaga doinstalowania jeszcze jednej zależności `ts-node`.
