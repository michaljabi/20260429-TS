const $myHeading = document.querySelector(".my-heading");
 
// if($myHeading !== null) {
if($myHeading) {
   $myHeading.textContent = "My number is ";
   console.log('?')
}


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