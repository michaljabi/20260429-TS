const $myHeading = document.querySelector(".my-heading");

// if($myHeading !== null) {
// tutaj poprawnie "odfiltowujemy null" - bezpieczny kod
if($myHeading) {

   // if niepotrzebny gdy: "strictNullChecks": false, 
   // ale jest to kontrproduktywne! Bo nadaje się tylko przy migracji.
   // strictNullChecks wymusza na nas lepszy kod.
   $myHeading.textContent = "My number is ";
   console.log('?')
}


// ALE, możemy inaczej - mniej bezpiecznie - Type ASSERTION:
// to jest powiedzenie: "Trust me, TS I know what I', doing"
const $myHeading2 = document.querySelector(".my-heading2") as Element;
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
$myHeading2.textContent = '!'


// każdy typ w TS może mieć definicję, np:
type User = { name: string; age?: number }


let myObj: User = { name: '', age: 20 }

// Pokazanie podpowiadania składni dzięki `dom.d.ts` - plikom.

const myAElement = document.createElement('a');

myAElement.innerHTML = 'hello';
// ctrl + click na "setAttribute" żeby zobaczyć plik .d.ts
myAElement.setAttribute("href", "https://wp.pl");


document.body.append(myAElement);

const myArray = [10, 20]


console.log(myArray.at(-1))