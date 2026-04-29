/**
 *
 * Promise możemy również przygotowywać oraz "odpakowywać" za pomocą składni `async/await`
 *
 * Jedno z tych słów kluczowych pozwala nam utworzyć Promise - async
 * Drugie "await" - pozwala ją odebrać (zebrać wynik z "resolved").
 * 
 * */

// Konstrukcja Promise, za pomocą "async":
async function makeMyPromise(): Promise<string> {
  return "Hello";
}

// Odebranie Promise za pomocą "await"
async function runLogic() {
  const value = await makeMyPromise();
  console.log("Otrzymałem wartość:", value);
}
runLogic();

// Całość realizacji logiki dla promise wyglądać może na przykład następująco:
function makeMeAPromise(shouldBeBroken: boolean): Promise<string> {
  // PROVIDER:
  return new Promise((resolve, reject) => {
    if (shouldBeBroken) {
      reject(new Error("I am broken by design :("));
    } else {
      resolve("some string value");
    }
  });
}

// CONSUMER:
async function consumeBroken() {
  try {
    // Zaobserwuj co się stanie jeśli zmienisz true na false:
    const val: string = await makeMeAPromise(true);
    console.log("Never happened", val);
  } catch (err) {
    // catch w try/catch nie pozwala na inny typ niż unknown - inaczej niż callback w .catch()
    console.log(err);
  }
}
consumeBroken();
