/**
 * Zadanie 2:
 * Napisz implementację funkcji `moveBy2` - która posiadać ma następujące działanie:
 * wyświetlić na konsoli co 2 numery od - do w określonym kierunku
 *
 * przykładowo wywołanie:
 * moveBy2(10, 20, 'up');
 * powinno pokazać:
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 *
 * a wywołanie:
 * moveBy2(10, 20, 'down');
 * 20
 * 18
 * 16
 * .... itd aż do
 * 10
 *
 * funkcja powinna być wywołana poprawnie dla 2 przypadków tak jak poniżej.
 * natomiast jeśli podany zostanie argument który nie jest liczbą lub nie da się go rzutować na liczbę
 * - funkcja zakończy swoje działanie
 * - nie powinno być możliwości podania innych kierunków jak up lub down
 * */

// Przed rozpoczęciem zadania usuń komentarz poniżej (@ts-nocheck)


// Tutaj dopisz implementację moveBy2 na podstawie wywołań poniżej
function moveBy2(start: number, end: number | string, direction: 'up' | 'down' ) {

  const numericEnd = Number(end);

  if(Number.isNaN(numericEnd)) {
    return;
  }

  if(direction === 'up') {
    for(let x = start; x <= numericEnd; x+=2) {
      console.log(x)
    }
  } else {
    // x-=2 
    // x = x - 2
    for(let x = numericEnd; x >= start; x-=2) {
       console.log(x)
    }
    //console.log(x);
  }
  //console.log(x);

  console.log(numericEnd);
  console.log(typeof numericEnd);
}



// to powinny być prawidłowe wywołania:
moveBy2(10, 20, "up");
moveBy2(10, "20", "down");

// nieprawidłowe wywołania (nie powinny się pokazać dane na konsoli):
moveBy2(10, "aqweoiuqwieu", "down");
moveBy2(10, NaN, "down");
// console.log(x);
// powinno podkreślić - [błąd Typescript]* (c101)
//moveBy2(10, NaN, 'diagonal');

function hello() {
  console.log('test')
}

// qwe

//hello();
// hello();

console.log(300 + 20 + 1 + 3);
// typeof 30 === ''