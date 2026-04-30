
// ✅ srtictNullChecks : true 
let name: string = '';
// ❌ srtictNullChecks : true 
let nameWithoutValue: string;
// nie da się użyć bo nie zadeklarowaliśmy faktycznej wartości typu string:
// console.log(nameWithoutValue)

// ✅ srtictNullChecks: false
let name2: string; // wtedy tak naprawdę name2 to `undefined` ⚠️ ale TS pozwoli nam to użyć, bo wyłączamy flagę strictNullChecks

<<<<<<< HEAD
// console.log(name2);


// Morał: Używaj [srtictNullChecks: false] TYLKO dla projektów które migrujesz z JS do TS
=======
// console.log(name2);
>>>>>>> 18efb245ecab52beb9432b2492ec61f7061d0cec
