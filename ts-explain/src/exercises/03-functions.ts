/**
 * ⚠️⚠️⚠️ Zadanie NA START 3:
 *
 * Napisz logikę do funkcji userOnboarding()
 *
 * Dla wywołania:

 userOnboarding('Jacek', 20, 'Manager', 'Medical pack')
 * Ma pokazywać na konsoli:

     Witaj Jacek,
     mając 20 lat doświadczenia.
     Dostałeś stanowisko: Manager

     Przysługuje Ci: Medical pack

 * Dla wywołania:

 userOnboarding('Marek')
 * Ma pokazywać na konsoli:

     Witaj Marek,
     mając 5 lat doświadczenia.
     Dostałeś stanowisko: Senior Specialist

     Przysługuje Ci: Grand premium Sport Card

 *
 * Dodatkowe punkty:
 * a) brak użycia if
 * b) użycie template stringów (``) - i interpolacji
 *
 *
 * [!] Przed rozpoczęciem zadania, usuń komentarze:
 * // @ts-ignore
 */

const JOB_TITLE = "Senior Specialist";
const SOCIAL_PACKET = "Grand premium Sport Card";


function userOnboarding(name: string, yearOfExperience: null | number, jobTitle = 'Senior Specialist', socialPacket = 'Grand premium Sport Card') {
//   console.log(name);
//   console.log(yearOfExperience);
//   console.log(jobTitle);
//   console.log(socialPacket);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  console.log(`
     Witaj ${ name },
     mając ${ yearOfExperience ?? 5 } lat doświadczenia.
     Dostałeś stanowisko: ${ jobTitle }
     Przysługuje Ci: ${ socialPacket }
`);
}


userOnboarding("Marek", null);
// tak naprawdę dzieje się tak:
//userOnboarding("Marek", undefined, undefined, undefined);


userOnboarding("Jacek", 20, "Manager", "Medical pack");
