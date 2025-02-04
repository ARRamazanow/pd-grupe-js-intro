/*
NUMBERS

- sveikieji, desimtainiai
- teigiami, neteigiami
- infinity, NaN (skaiciaus tipo klaida) https://www.w3schools.com/jsref/jsref_infinity.asp#:~:text=A%20number%20reaches%20Infinity%20when,%2D1.797693134862316E%2B308.

*/

const n1 = 1;
console.log(n1);

const n2 = -5
console.log(n2);

const n3 = 3.14;
console.log(n3);

const n4 = -2.727
console.log(n4);

const n5 = Infinity;
console.log(n5);

const n6 = -Infinity;
console.log(n6);

const n7 = -9999;
console.log(n7);

const n8 = NaN;
console.log(n8);
// 8 / 2 = 4;   labas rytas / 2 = NaN 

console.log('Labas rytas' / 2); //pvz  
console.log('zdarova pacany' + 2); //pvz kuris veikia kaip pridietis.
console.log(5-2);
// + - % / * **  

/////////////////////

// dviguba ** kelia laipsniais.

console.log(7 * 5);
console.log(7**5);
console.log(2 ** 1);
console.log(2**4); 

console.log(2**4 / 243);
console.clear();

// Math - matematiniu funkciju 'biblioteka"   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// matematines konstantos
console.log('matematini');
console.log(Math);
console.log(Math.SQRT2);
console.log(Math.E);
console.log(Math.PI);
// abs
console.log(Math.abs(5));
console.log(Math.abs(-5));
// Trigonometrija - nauduoja radianus /sin /cos /tan
console.log('trigonometrija');
console.log(Math.sin(5));
console.log(Math.cos(-5));
console.log(Math.cbrt(64)); // kubine saknys 
// apvalinimas
console.log();
console.log('Apvalinimas');
console.log(Math.ceil(10.1)); // apvalinimas iki lubu max
console.log(Math.floor(9.6)); // apvalinimas maziau
console.log(Math.round(9.3)); // standart apvalinimas
console.log('trunc');
console.log(Math.trunc(9.6)); // ""apvalinimams" trunc dirba kaip cell
console.log(Math.trunc(-9.9)); // bet jis ne apvalina ar palei zenkla numemta link nulio.

// JS Math

