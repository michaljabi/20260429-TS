/**
 * Zadanie 8:
 *
 * Przygotuj klasę Joiner.
 * Powinna ona:
 *  - w momencie konstruowania przyjmować znak, którym będzie łączyć wyrazy.
 *  - posiadać metodę która po przyjęciu N wyrazów typu :string zwróci łańcuch wyrazów połączony znakiem użytym w konstruktorze
 *  - użyty znak - łącznik nie może być dostępny jako pole w instancji
 *  - posiadać metodę pozwalającą zmienić znak łącznika
 *
 * przykład użycia instancji:
     const joiner = new Joiner('-');

     console.log(joiner.joinWords('this', 'is')  === 'this-is');
     joiner.changeSign(' ');
     console.log(joiner.joinWords('what', 'is', 'it')  === 'what is it');
 * */

class Joiner {

    /* zamiast całego tego:
    
    private sign: string;

    constructor(sign: string) {
        this.sign = sign
    }
    
    można "lukier składniowy z TS"
    */
    constructor(private sign: string) {}

    changeSign(newSign: string): void {
        this.sign = newSign
    }

    joinWords(...strings: string[]): string {
        return strings.join(this.sign)
    }
}
    

const joinerInstance = new Joiner('-');

console.log(joinerInstance.joinWords('this', 'is'))
console.log(joinerInstance.joinWords('this', 'is')  === 'this-is');
joinerInstance.changeSign(' ');
console.log(joinerInstance.joinWords('this', 'is'))
console.log(joinerInstance.joinWords('what', 'is', 'it')  === 'what is it');