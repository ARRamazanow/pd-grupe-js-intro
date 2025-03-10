function didziausiasSkaiciusSarase(list) {
    if (!Array.isArray(list)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if (list.length === 0) {
        return 'Pateiktas sąrašas negali būti tuščias.', 'Tuscias masyvas';
    }

    let biggestNumber = -Infinity;

    for     (const number of list){
        if (typeof number !== 'number' || !isFinite(number)){
            continue;
        }
        if (number > biggestNumber){
            biggestNumber = number;
    }
}
if (biggestNumber === -Infinity){
   return 'Sąraše nerasta nei viena tinkama reikšmė.';
}
return biggestNumber;
}
// Tikriname netinkamus duomenu tipus
{
    console.assert(
        didziausiasSkaiciusSarase('pomidoras') === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: string'
    );
    console.assert(
        didziausiasSkaiciusSarase(215462) === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: number'
    );
    console.assert(
        didziausiasSkaiciusSarase(true) === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: boolean'
    );
    console.assert(
        didziausiasSkaiciusSarase(null) === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: null'
    );
    console.assert(
        didziausiasSkaiciusSarase(undefined) === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: undefined'
    );
    console.assert(
        didziausiasSkaiciusSarase() === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: undefined (nes nepateiktas parametras)'
    );
    console.assert(
        didziausiasSkaiciusSarase({}) === 'Pateikta netinkamo tipo reikšmė.',
        'Netinkamo tipas: object'
    );
}

// Masyvas, kuriame nera didziausio skaiciaus
{
    console.assert(didziausiasSkaiciusSarase([]) === 'Pateiktas sąrašas negali būti tuščias.', 'Tuscias masyvas');

    console.assert(
         didziausiasSkaiciusSarase([true]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (boolean)'
     );
     console.assert(
        didziausiasSkaiciusSarase(['string']) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (string)'
     );
     console.assert(
         didziausiasSkaiciusSarase([[]]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (array)'
     );
     console.assert(
         didziausiasSkaiciusSarase([{}]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (object)'
     );
     console.assert(
         didziausiasSkaiciusSarase([Infinity]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (Infinity)'
     );
     console.assert(
         didziausiasSkaiciusSarase([-Infinity]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (-Infinity)'
     );
     console.assert(
         didziausiasSkaiciusSarase([NaN]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (NaN)'
     );
     console.assert(
         didziausiasSkaiciusSarase([undefined]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (undefined)'
     );
     console.assert(
         didziausiasSkaiciusSarase([null]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (null)'
     );
     console.assert(
         didziausiasSkaiciusSarase([didziausiasSkaiciusSarase]) === 'Sąraše nerasta nei viena tinkama reikšmė.',
         'Netinkama reikšmė (function)'
     );
}

// Masyvas, kuriame apart didziausio skaiciaus yra ir kitu netinkamu reiksmiu
{
    console.assert(didziausiasSkaiciusSarase([true, 5]) === 5, 'Didziausia reiksme: 5 (boolean)');
    console.assert(didziausiasSkaiciusSarase(['string', 5]) === 5, 'Didziausia reiksme: 5 (string)');
    console.assert(didziausiasSkaiciusSarase([[], 5]) === 5, 'Didziausia reiksme: 5 (array)');
    console.assert(didziausiasSkaiciusSarase([{}, 5]) === 5, 'Didziausia reiksme: 5 (object)');
    console.assert(didziausiasSkaiciusSarase([Infinity, 5]) === 5, 'Didziausia reiksme: 5 (Infinity)');
    console.assert(didziausiasSkaiciusSarase([-Infinity, 5]) === 5, 'Didziausia reiksme: 5 (-Infinity)');
    console.assert(didziausiasSkaiciusSarase([NaN, 5]) === 5, 'Didziausia reiksme: 5 (NaN)');
    console.assert(didziausiasSkaiciusSarase([undefined, 5]) === 5, 'Didziausia reiksme: 5 (undefined)');
    console.assert(didziausiasSkaiciusSarase([null, 5]) === 5, 'Didziausia reiksme: 5 (null)');
    console.assert(didziausiasSkaiciusSarase([didziausiasSkaiciusSarase, 5]) === 5, 'Didziausia reiksme: 5 (function)');
}

// Sarasai su teigiamais (ne neigiami) skaiciais
{
    console.assert(didziausiasSkaiciusSarase([1]) === 1, 'Grazinamas vienintelis masyve esantis skaicius: 1');
    console.assert(didziausiasSkaiciusSarase([5]) === 5, 'Grazinamas vienintelis masyve esantis skaicius: 5');
    console.assert(didziausiasSkaiciusSarase([3, 2, 1]) === 3, 'Masyvo pirmutinis skaicius: 3');
    console.assert(didziausiasSkaiciusSarase([1, 3, 2]) === 3, 'Masyvo "vidurinis" skaicius: 3');
    console.assert(didziausiasSkaiciusSarase([1, 2, 3]) === 3, 'Masyvo paskutinis skaicius: 3');
    console.assert(didziausiasSkaiciusSarase([78, -5, 14, 0, 18]) === 78, 'Masyvo pirmutinis skaicius: 78');
    console.assert(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]) === 78, 'Masyvo "vidurinis" skaicius: 78');
    console.assert(didziausiasSkaiciusSarase([-5, 14, 0, 18, 78]) === 78, 'Masyvo paskutinis skaicius: 78');
    console.assert(didziausiasSkaiciusSarase([69, 69, 69, 69]) === 69, 'Masyvas tik su vienodomis reiksmemis');
    console.assert(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]) === 69, 'Pasikartojanti didziausia reiksme');
    console.assert(didziausiasSkaiciusSarase([69, 69, 69, 69, 66, 66]) === 69, 'Pasikartojanti didziausia reiksme');
    console.assert(didziausiasSkaiciusSarase([0, 3.14, 2.72, 4]) === 4, 'Didziausia reiksme: 4');
    console.assert(didziausiasSkaiciusSarase([0, 3.14, 2.72]) === 3.14, 'Didziausia reiksme: 3.14');
}

// Sarasai su neigiamais (ne teigiami) skaiciais
{
    console.assert(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]) === -1, 'Didziausia reiksme: -1');
    console.assert(didziausiasSkaiciusSarase([-4, -5, -6, -7, -1, -2, -3, -8]) === -1, 'Didziausia reiksme: -1');
    console.assert(didziausiasSkaiciusSarase([-2, -3, -4, -5, -6, -7, -8]) === -2, 'Didziausia reiksme: -2');
    console.assert(didziausiasSkaiciusSarase([-3, -4, -5, -2, -6, -7, -8]) === -2, 'Didziausia reiksme: -2');
    console.assert(didziausiasSkaiciusSarase([-3.25, -4.25, -5.25, -2, -6.77, -7.77, -8]) === -2, 'Didziausia reiksme: -2');
    console.assert(didziausiasSkaiciusSarase([-3.25, -4.25, -5.25, -6.77, -7.77, -8]) === -3.25, 'Didziausia reiksme: -3.25');
}













// console.log(didziausiasSkaiciusSarase([1]), '-->', 1);
// console.log(didziausiasSkaiciusSarase([1, 2, 3]), '-->', 3);
// console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]), '-->', 78);
// console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]), '-->', 69);
// console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);
// console.log(didziausiasSkaiciusSarase('pomidoras'), '-->', 'Pateikta netinkamo tipo reikšmė.');
// console.log(didziausiasSkaiciusSarase([]), '-->', 'Pateiktas sąrašas negali būti tuščias.');