//                                                                      JavaScript mini užduotys
// https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit?tab=t.0
/*

1. Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
*/
console.log('==========1 uzduotis =============');

function intervaloSuma(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || !isFinite(n1) || !isFinite(n2)) {
        return 'Neteisingai nurodytos intervalo ribos.';
    }
    let suma = 0;
    for (let i = n1; i <= n2; i++) {
        suma += i;
    }
    return suma;
}
console.log(intervaloSuma(0, 0));   
console.log(intervaloSuma(0, 4));   
console.log(intervaloSuma(0, 100));  
console.log(intervaloSuma(574, 815));  
console.log(intervaloSuma(-50, 50)); 
console.log(intervaloSuma(-70, 30));  

console.log('==========2 uzduotis =============');

/*
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/
function reverseString(txt) {
    if (typeof txt !== 'string') {
        return 'Pateiktas tekstas nėra string tipas!';}
    let reversed = '';
    for (let i = txt.length - 1; i >= 0; i--) {
        reversed += txt[i];
    }
    return reversed;
}
console.log('Hello -->', reverseString('Hello'));
console.log('abc -->', reverseString('abc'));
console.log('123 -->', reverseString('123'));
console.log('123 -->', reverseString('123'));
console.log('123 -->', reverseString(123));

console.log('==========truputi kitaip=============');

function stringReverse(string) {
    if (typeof string !== 'string') {
        return 'Pateiktas tekstas nėra string tipo!';
    }
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(`'Hello' --> ${stringReverse('Hello')}`); 
console.log(`'gaga' --> ${stringReverse('gaga')}`);     
console.log(`'12345' --> ${stringReverse('12345')}`); 
console.log(`'A' --> ${stringReverse('A')}`);         
console.log(`12345 --> ${stringReverse(12345)}`);    

console.log('==========3 uzduotis =============');


// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:


function dalijasiBeLiekanos(n1, n2, d) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || !isFinite(n1) || !isFinite(n2)) {
        return `patikra ar skaiciai nera skaiciaus tipas.`;   }

        if (d === 0){
            return `Dalyba is nulio negalima`;     }
    let counter = 0;
    for (let i = n1 - (n1 % 1); i <= n2; i++) {
        if(i % d === 0) 
        counter ++;
    }
    return counter;
}

console.log('0 - 11');
console.log('8 - 31');
console.log('-18 - 18');
console.log('');//rezultatą pateikti tokiu formatu:
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${dalijasiBeLiekanos(0, 11, 3)} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${dalijasiBeLiekanos(0, 11, 5)} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${dalijasiBeLiekanos(0, 11, 7)} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 0, besidalijančių be liekanos iš 0 yra ${dalijasiBeLiekanos(0, 0, 0)} vienetai.`);



