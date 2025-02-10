/*
NUMBERS

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, NaN (skaiciau tipo klaida)
- infinity, NaN (skaiciaus tipo klaida) https://www.w3schools.com/jsref/jsref_infinity.asp#:~:text=A%20number%20reaches%20Infinity%20when,%2D1.797693134862316E%2B308.

*/

const n1 = 1;
console.log(n1);

const n2 = -5;
console.log(n2);

const n3 = 3.14;
console.log(n3);

const n4 = -2.727;
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = -999999999999;
console.log(n7);

const n8 = NaN;
console.log(n8);

console.log('labas rytas' / 2);
console.log('labas rytas' * 2);
console.log('labas rytas' - 2);
console.log('labas rytas' % 2);
console.log('labas rytas' + 2);

console.log(7 / 5);
console.log(7 - 5);
console.log(7 % 5);
console.log(7 + 5);
console.log(7 * 5);
console.log(7 ** 5);

console.log(2 ** 0);
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(2 ** 5);

console.clear();


// Math - matematiniu funkciju 'biblioteka"   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log('Matematines konstantos');
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log();
console.log('Math.abs()');
console.log(Math.abs(5));
console.log(Math.abs(-5));
// Trigonometrija - nauduoja radianus /sin /cos /tan

console.log();
console.log('Trigonometrija - naudoja radianus');
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));

console.log();
console.log('Kubine saknis');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

console.log();
console.log('Apvalinimas: ceil');
console.log(Math.ceil(10));
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.9));
console.log(Math.ceil(9.1));
console.log(Math.ceil(9.0000001));

console.log();
console.log('Apvalinimas: floor');
console.log(Math.floor(10));
console.log(Math.floor(9.5));
console.log(Math.floor(9.999999));
console.log(Math.floor(9.000001));
console.log(Math.floor(9));

console.log();
console.log('Apvalinimas: round');
console.log(Math.round(10));
console.log(Math.round(9.5));
console.log(Math.round(9.99999));
console.log(Math.round(9.1));
console.log(Math.round(9.4));
console.log(Math.round(9.4999999999));

console.log();
console.log('"Apvalinimas": trunc');
console.log(Math.trunc(10));
console.log(Math.trunc(9.5));
console.log(Math.trunc(9.99999));
console.log(Math.trunc(9.000001));
console.log(Math.trunc(-10));
console.log(Math.trunc(-9.5));
console.log(Math.trunc(-9.99999));
console.log(Math.trunc(-9.00001));


console.log();
console.log('"Apvalinimas": exp');
console.log(Math.exp(2), Math.E ** 2);

console.log();
console.log('"Apvalinimas" pow');
console.log(Math.pow(2, 2), 2**2);

console.log();
console.log('"Apvalinimas": hypot');
console.log(Math.hypot(3, 4), Math.sqrt(3 ** 2 + 4 ** 2));
console.log(Math.hypot(9, 6), Math.sqrt(9 ** 2 + 6 ** 2));
console.log(Math.hypot(1, 1, 1), Math.sqrt(1 ** 2 + 1 ** 2 + 1 ** 2));
console.log(Math.hypot(4, 4, 4), Math.sqrt(4 ** 2 + 4 ** 4 + 2 ** 4));

console.log();
console.log('"Apvalinimas": hypot');
console.log(Math.min(1, 2, 4, 8, -1, 3.5, -2.75, 99)); // rodykle mazesnes puses

console.log();
console.log('"Apvalinimas" hipot');
console.log(Math.max(1, 2, 4, 8, -1, -Infinity, Infinity, -1.75, 99)); 

console.clear();
// generuojamas atsitiktinis skaiicus intervale imtinai  min nuo    max iki  
function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
}
    for (let i=0; i < 10; i++) {
        console.log(i, randomNumber(10, 20));    //numeruoja su i 
    }

// pasidaryti savo func, kuri grazina skaiciu su ribotu kiekiu skaitmenu po kablelio.
// kas yra i++   
// i++ – post-increment operatorius: pirmiausia grąžina esamą i reikšmę, o tik tada padidina i reikšmę vienetu.
// ++i – pre-increment operatorius: pirmiausia padidina i reikšmę vienetu, o tik tada grąžina naują reikšmę
// codewars

console.clear();

console.log((3.1415).toFixed());
console.log((3.1415).toFixed(1));
console.log((3.1415).toFixed(2));
console.log((3.1415).toFixed(3));
console.log((3.1415).toFixed(4));
console.log((3.1415).toFixed(5));
console.log((3.1415).toFixed(6)); // gaunasi kaip piramide


console.log((3.1).toFixed(2) / 2); // nera taisiklinga mamtematikai negalima toFixed nebent pasiseks!!!!!! net pazenklina terminale geltonai...
console.log((3.145).toFixed(2));

function apvalinimas(n, amount) {
    return Math.round(n * (10 ** amount)) / (10 ** amount);  // mintinai zinoti :D 
}

console.log(apvalinimas(10, 2));
console.log(apvalinimas(9.50,2));
console.log(apvalinimas(3.1415, 2));
console.log(apvalinimas(3.145, 2));
console.log(apvalinimas(3.1499, 2));
console.log(apvalinimas(3.1456, 2));
/////////////////////////////////////////////////////////////////////////////////////////////////
console.clear();//

let k = 20;
console.log(++k);//

k = k + 1;
console.log(k);//

k ++ ;
console.log(k); //// pvz sprendimas 

k = k -= 1;
console.log(k); // += -= /= *= **= %=

++k ;

console.log(k++);  //// ++k pliusas eina is galo  k++ pliusoja ka prieki ;] pliusai stumia skaiciu, arba skaicius stumia pliusa. ;]]]


