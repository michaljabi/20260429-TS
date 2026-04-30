/**
 * Zadanie 5:
 *
 * Nie modyfikując funkcji getVatTaxRateFromServerAsync, wywołaj ją i odbierz wartość tax - pokaż na ekranie,
 * przemnóż przez przykładową wartość {price} produktu
 *
 * */

const myProduct = {
  price: 2000,
};

async function getVatTaxRateFromServerAsync() {
  return 0.23;
}

// pod spodem:
function getVatTaxRateFromServerAsyncUnderTheHood() {
  return Promise.resolve(0.23);
}

console.log(getVatTaxRateFromServerAsync());

// to jest top level await i dlatego nie zadziała w pewnych konfiguracjach TS (CommonJS)
// console.log(2000 * (await getVatTaxRateFromServerAsync()) + 2000);

console.log(2000 * 0.23 + 2000);

getVatTaxRateFromServerAsyncUnderTheHood().then((value: number) => {
  console.log(value);
  console.log(myProduct.price * value + myProduct.price);
});

async function collect() {
  // standardowo bez problemu od 2017 możemy uzywać słowa kluczowego await w środku funkcji ansync
  try {
    const vatRate = await getVatTaxRateFromServerAsync();
    console.log(myProduct.price * vatRate + myProduct.price);
  } catch (e: unknown) {
    console.log("Błąd podczas odbioru");
  }
}
collect();

function accessToBankPromise(password: string) {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      // dopiero teraz możemy sprawdzić password (takie założenie)
      if (password === "p4ssw0rD") {
        resolve(100);
      } else {
        reject(new Error(`password ${password} is invalid!`));
      }
    }, 3000);
  });
}

/// Collector 1:
accessToBankPromise("823479782364987")
  .then((money) => {
    console.log(money);
  })
  .catch((e) => {
    console.log(e.message);
  });

/// Collector 2:
accessToBankPromise("p4ssw0rD")
  .then((money) => {
    console.log(money);
  })
  .catch((e) => {
    console.log(e.message);
  });

/// Collector 3 async/await:
async function collect3() {
  try {
    const value = await accessToBankPromise("p4ssw0rDa");
    console.log(value);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
collect3();
