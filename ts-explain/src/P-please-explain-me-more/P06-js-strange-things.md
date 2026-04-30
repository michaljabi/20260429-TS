# Dziwadła JS:

1. brak wartości - to niestety wartość -> `undefined`  
2. `NaN` nie jest stałą i ma typ `number`
3. `typeof null`  daje niestety  `"object"`  - BUG 🙁  
4. używamy `===` a nie `==` bo jest "mechanizm niejawnego rzutowania" i dla JS `1 == '1'`  to wynik `true`
5. _mechanizm niejawnego dodawania średników_ - sprawia że możesz na końcu lini stosować `;` ale nie musisz 
6. można wrzucić dowolną wartość lub wyrażenie w `if()` ponieważ zawartość `if` zostanie rzutowana na `boolean`
7. Nie da się rzutować na inne wartości niż: `number`, `boolean`, `string`, `bigint` (szczególnie ważne w kontekście TS)
8. W JS w `throw` można rzucić DOWOLNĄ wartość :( wartość dowolnego typu. (nie chcemy tego robić zawsze używajmy `new Error` i pochodnych)



## Inne ważne rzeczy:

1. `TypeScript` nie ma nic do runtime JS!
2. Potrzebujemy platformy (ekosystemu JS) żeby korzystać z `typescript`, np. _NodeJs_ (inne to: _Deno_, _Bun_)
3. `JavaScript` to język Obiektowy i Funkcyjny (2 paradygmaty - podobnie jak w _Python_) [Functions First Class Citizens]. Funkcja to tak naprawdę Obiekt specjalnego przeznaczenia (można go wywołać). 
4. Słowa kluczowe `async` / `await` służą do tworzenia i odbierania `Promise` natywnych. To jest tzw. lukier składniowy.
