//  https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit?pli=1&tab=t.0

// 1.
console.log('           1 uzduotis');

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

// 2.
console.log('           2 uzduotis');

function daugyba(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number'){
        let result = 0;
        result = n1 * n2;
        return result;
    }
    return false;
}
console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(6, 5));
console.log(daugyba('s', 5));
console.log(daugyba());

function daugyba2(n3, n4){
    //validavimas
    if (typeof n3 !== 'number'){
        return 'Error: pirmasis paramentras turi buti skaicius';
            }    if (typeof n4 !== 'number')
        return 'Error: antrasis paramentras turi buti skaicius';{
    if (n3 === Infinity || n3 === -Infinity || '' + n3 === 'NaN'){
        return 'Error: pirmasis paramentras turi buti skaicius';
                }
    if (n4 === Infinity || n4 === -Infinity || isNaN(n4)){
        return 'Error: antrasis paramentras turi buti skaicius';
    }}
      //logika  
        const result = n3 * n4;
        // rezultato grazinimas
        return result;
    }
console.log(daugyba2(2, 3));
console.log(daugyba2(-3, 4));
console.log(daugyba2(-3, -4));
console.log(daugyba2(3, 4));
console.log(daugyba2('s', 4));
console.log(daugyba2('s', 'f'));
console.log(daugyba2(3, Infinity));
console.log(daugyba2(Infinity, 4));
console.log(daugyba2(Infinity, Infinity));

console.log('                  3 uzduotis');
// 3.
function skaitmenuKiekisSkaiciuje(m)
{
if (typeof m !== 'number' || m === Infinity || m === -Infinity || isNaN(m));
{
    return 'Pateikta netinkamo tipo reikšmė.';
//return Math.abs(m).toString().length;}
}}

//const result = skaitmenuKiekisSkaiciuje.length;
let skaitmenuKiekis = 0;
const kintSplit = ('' + kint).split('');
for (let i = 0; i < kint.length; i++) {
    skaitmenuKiekis += 1;
}
return skaitmenuKiekis;

console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log('                  4 uzduotis');

// 4. 

  function didziausiasSkaiciusSarase(skaiciai){
    if (!Array.isArray(skaiciai)) 
        return "Pateikta netinkamo tipo reikšmė.";
    if (skaiciai.length === 0) 
        return "Pateiktas sąrašas negali būti tuščias.";
       let didziausias = skaiciai[0];
    for (let index = 0; index < skaiciai.length; index++) {
                if (didziausias < skaiciai[index]) {
                    didziausias = skaiciai[index]; }
                   
                    return didziausias }
  }
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”


console.log('                  5 uzduotis');

// 5.

function isrinktiRaides(word, number){
    
    if (typeof word !== 'string') { return "Pirmasis kintamasis yra netinkamo tipo."; }
  //  if (String.length !== 0 || String.length >= 100) { return "Pirmojo kintamojo reiksme yra neteisinga."; }
    if (typeof number !== 'number' || isNaN(number)) return 'Antrasis kintamasis yra netinkamo tipo.';
    if (number === Infinity || number === -Infinity) return 'Antrasis kintamasis yra netinkamo tipo.';
    if (number <= 0) return 'Antrasis kintamasis turi buti didesnis uz null';
    if (number > word.length){ return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį';}

    let kasKelintaRaide = []; 
    for (let i = 2; i < word.length; i += 3) {
        kasKelintaRaide.push(word[i]);} return kasKelintaRaide;

}

console.log( isrinktiRaides( 'abcdefg', 2 ) );
//rezultatas: “bdf”
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
//rezultatas: “cfil”
console.log( isrinktiRaides( 'abc', 0 ) );
//rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( 'abc', 4 ) );
//rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
//rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”


console.log('                  6 uzduotis');
// 6.
/*
+ Funkcija pavadinimu “dalyba”:
+ turi priimti du kintamuosius
 reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
 esant blogoms sąlygoms, išvesti atitinkamą pranešimą
 esant geroms - tęsti darbą
 į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
 daliname pirmąjį skaičių iš antrojo
 grąžinti suskaičiuotą reikšmę
TESTAI:
 sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/

function dalyba(num1, num2){
    if (typeof num1 !== 'number' || isNaN(num1) || num1 === infinity || num1 === -infinity)

    return 'Neteisinga nurodyta pirmojo kintamojo reikšme';

    if (typeof num2 !== 'number' || isNaN(num2) || num2 === infinity || num2 === -infinity || num2 === 0)
     
    return 'Neteisinga nurodyta antrojo kintamojo reikšme';
    
    const padalinta = num1 / num2;
    return padalinta;
}
console.log(dalyba(15, 5));
console.log(dalyba(2, 0));
console.log(dalyba(200, 10));
console.log(dalyba(20, 10));
console.log(dalyba('S', 10));
