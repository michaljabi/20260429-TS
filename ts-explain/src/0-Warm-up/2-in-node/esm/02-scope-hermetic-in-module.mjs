import { OK } from "./script1.mjs";
import fromScript2 from "./script2.mjs";

console.log("| Ecma Script Modules |");
console.log("Wartość Lucky Number to ", fromScript2.LUCKY_NUMBER);
console.log("Wartość OK to ", OK);

/**
 * Node.js od 2020 roku (próby nawet wcześniej) obsługuje syntax tzw. ESM ( w przeglądarkach od 2015r )
 *
 * jest to używanie zapisów:
 *  import 'sample.mjs'
 *  import { named } from './scriptX.mjs';
 *  import default from './scriptY.mjs';
 *
 * jako IMPORTÓW — dla bibliotek JS oraz innych plików (tzw. modułów).
 *
 * oraz zapisów:
 *  export default { sampleDef: 20 };
 *  export const named = 'value';
 *
 * jako EKSPORTÓW — tego, co dany plik chce udostępnić innym plikom (modułom).
 *
 * wpierane będzie to "z pudełka" w plikach .mjs (kompatybilność wsteczna z CommonJS musi być zachowana*)
 * oraz można włączyć w `package.json` zapisem:
 *
 * "type": "module"
 *
 * */
