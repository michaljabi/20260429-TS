let numbersIntance: Array<number> = new Array<number>();
let numbersIntance2: number[] = [];

numbersIntance2.push(1,2,3) 
numbersIntance2.push(67) 
//
// numbersIntance2.push(true) 

let numbers = [0];
// let numbers = new Array<number>();

// [] === new Array(); 
// [] - literał tablicowy (lukier składniowy), robię instancję tablicy (dynamicznej w JS i TS niestety też.)


// {} === new Object();
// {} - literał obiektowy (lukier składniowy), robię instację obiektu (dynamicznego w JS)


const reg = new RegExp('\\d');
// literał regExpowy:
const regLit = /\d/