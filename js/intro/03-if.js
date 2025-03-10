/*
IF - Salygos sakiniai

Pagrindiniai kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {} .... else if () {}
if () {} else if () {} .... else if () {} else 
if () {} else if () {} .... else if () {} else {}


Palyginimo operatoriai:
- viso >, <, <=, >=, != , !==, == , ===
- nauduotini: >, <, <=, >=, !== , ===
- nenauduotini: !=, ==

Loginiai operatoriai
&& ir   and
!! arba  or 
typeof yra JavaScript operatorius, kuris naudojamas nustatyti kintamojo arba vertės tipą (tipą, kuris nurodo, kokio tipo duomenys yra saugomi kintamajame).
// type of yra tas kuris viska grazina savo verte 
console.log(typeof 42);       // "number" (skaičius)
console.log(typeof "hello");  // "string" (eilutė)
console.log(typeof true);     // "boolean" (loginė reikšmė)
console.log(typeof undefined); // "undefined" (nepriskirta reikšmė)
console.log(typeof {a: 1});   // "object" (objektas)
console.log(typeof null);     // "object" (tai klaida JavaScript kalboje, nes null turi būti laikomas atskiru tipu)
console.log(typeof NaN);      // "number" (nes NaN yra skaitinis tipas)
*/
console.log('aaaa');

if (4 === 4) {
    console.log('bbbb');
} else {
console.log('cccc');
}
console.log('dddd');

if (4 === 4) {
    console.log('taip');
} else {
console.log('ne');
}

const a = 11;  // cia vyksta atpazinimams if'uose.
if (a === 1) {
    console.log('vienas');
}   else  if  (a === 2) {
    console.log('du');
   }   else  if  (a === 3) {
        console.log('trys');
    }   else  if  (a === 4) {
    console.log('keturi');
   }   else  if  (a === 5) {
        console.log('penki');
    } else {
        console.log('ne atpazintas'); // jei nera sarase kuo ieskoma rasys ka 'uzloginsi' ,uzduosi console.log
    }
 console.log('---------------');
    //pvz lyinimas skaiciu 2 variantai if ir switch.  renki kas patynka abu geri.
    const n = 11;
    if (n % 2 === 0 ) {
        console.log('lyginis');
    } else {
        console.log('nelyginis');
    }

    switch (n % 2) {
        case 0:
            console.log('lyginis');
            break;
            case 1:
        console.log('nelyginis');
            break;
    }

    console.log('---------------');

const d = 22;
if (d === 1) {
    console.log('pirmadienis');
} else if (d === 2) {
    console.log('antradienis');
} else if (d === 3) {
    console.log('treciadienis');
} else if (d === 4) {
    console.log('ketvirtadienis');
} else if (d === 5) {
    console.log('penktadienis');
} else if (d === 6) {
    console.log('sestadienis');
} else if (d === 7) {
    console.log('sekmadienis');
} else  {
    console.log('nera tokio');
}
console.log('---------------');

const d2 = 32;  // nestintas variantas if  (kai viduje).
if (d2 === 1) {
    console.log('pirmadienis');
} else 
    if (d2 === 2) {
        console.log('antradienis');
        } else 
             if (d2 === 3) {
                    console.log('treciadienis');
                } else 
                if (d2 === 4) {
                    console.log('ketvirtadienis');
                    } else 
                         if (d2 === 5) {
                                console.log('penktadienis');
                            } else 
                            if (d2 === 6) {
                                console.log('sestadienis');
                                } else 
                                     if (d2 === 7) {
                                            console.log('sekmadienis');
                                        } else  {
                                            console.log('nera tokio');
                                        }

                                        console.log('---------------');

const d3 = 8;
switch (d3) {
    case 1:
        console.log('pirmadienis');
        break;
     case 2:
        console.log('antradienis');
        break;
        case 3:
        console.log('treciadenis');
        break;
     case 4:
        console.log('ketvirtadienis');
        break;
        case 5:
        console.log('penktadienis');
        break;
     case 6:
        console.log('sestadienis');
        break;
        case 7:
        console.log('sekmadienis');
        break;
default: //kad ne mestu klaida daryt salyga kad veiksim su reiksmem sia.
    console.log('N/A');

     }
console.log('---------------');

// 1 - 5dd. - darbo diena
// 6 - 7 - savaitgalis
// sutrumpinta
const d4 = 3.5;

if (d4 < 6) {
    console.log('darbo diena');
} else if (d4 < 8) {
    console.log('savaitgalis');
} else  {
    console.log('nera tokio');
}
console.log('---------------');

const d5 = 2;

if (d5 ===1 || d5 ===2 || d5 === 3 || d5 === 4 || d5 === 5 ) {
    console.log('darbo diena');
} else if (d5 ===6 || d5 === 7) {
    console.log('savaitgalis');
} else  {
    console.log('nera tokio');
}
console.log('---------------');

if (d5 >= 1 && d5 <= 5 && d5 % 1 === 0) { //dalinti is vieno mes gauname liekana.
    console.log('darbo diena');
} else if (d5 ===6 || d5 === 7) {
    console.log('savaitgalis');
} else  {
    console.log('nera tokio');
}
console.log('---------------');

// switch

const d6 = 6;
switch (d6) {
    case 1: // case dirba iki kol sutinka break.... bet taip ne privalo buti momentos toks:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
default:
    console.log('N/A');
    break;
     }
console.log('------------------------------------------------------');

/*
1. passimamme puodeli
2. arbatinuka ipilame vandens
3. kaitinam
4. i puodeli dedam arbatos
5. uzpilamem karstu vandeniu
*/

const teaStep = 0;  // kaip kazka pasidaryti plaei zingsnius.
switch (teaStep) {
    case 1:
        console.log('reikia pasiimti puodeli');
    case 2:
        console.log('arbatinuka ipilame vandens');
    case 3:
        console.log('kaitinam');
    case 4:
        console.log('i puodeli dedam arbatos');   
    case 5:
        console.log('uzpilamem karstu vandeniu');
        break;
        default: console.log('END');
            console.log('Paruosta');
            break;
}
console.log('------------------------------------------------------');

const stop= 'Geniu'; 
switch (stop) {
    case 'Geniu':
        console.log('Geniu');
    case 'Berzu':
        console.log('Berzu');
    case 'Algio':
        console.log('Algio');
    case 'Rajono':
        console.log('Rajono');
               case 'Berzu':
            console.log('Ahmedo');
        case 'Algio':
            console.log('Bombos');
        case 'Rajono':
            console.log('kKryziaus');
            break;
            default: console.log('END');
                console.log('Paruosta');
                break;
    }
    
    console.log('------------------------------------------------------');

    const temp = -2;
    const isDay = true;
    
    if (temp > 18) { // nustatyti tempa i
        switch (isDay) {
            case true:
                console.log('diena');
                break;
            case false:
                console.log('naktis');
                break;
        }
    } else 
    if (temp > 18) {}
        switch (isDay) {
            case true:
                console.log('silta');
                break;
            case false:
                console.log('salta');
        break;
        
        }
        console.log('------------------------------------------------------');


// UNARY (1) const x = 5
// BINARY (2) const y = 2 + 2
// TERNARY (3) const let text = '' ;
const x = 5;
const y = 2 + 2

let text = '';
if (4 > 2) {
    text = 'Taip';
} else {
    text = 'Ne';
}
console.log(text); 

const text2 = 4 > 2 ? 'Taip' : 'Ne';
console.log(text2); 

const amziausRiba = 18;
const jonoAmzius = 99;
const Jonas = jonoAmzius >= amziausRiba ? 'pilnamietis' : 'nepilnamietis';
console.log(Jonas);
console.log(jonoAmzius >= amziausRiba ? 'pilnamietis' : 'nepilnamietis');



console.clear();


console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4 : 5 ? 6 : 7);
console.log(2 < 3 ? 4 : 5 ? 6 : 7);
console.log(1 < 2 ? 3 ? 4 : 5 : 6 ? 7 : 8);

// visi skaiciai yra poozityvus (truthy)
// 0 yra negative (falsy)
if (2) {
    console.log('ok');
} else {
    console.log('not so ok');
    }

console.log(1 ? 2 : 3);
console.log(0 ? 2 : 3);

// visi strinbg yra pozitive
// isskyrus tuscia
if ('labas') {
    console.log('ok');
} else {
    console.log('not so ok');
    }

const username = 'd';
if (username) {
    console.log('Labas', username, '!');
} else {
    console.log('Nenurodytas slapyvardis');
 
}

if (!username) {
    console.log('Nenurodytas slapyvardis');
} else {
    console.log('Labas', username, '!');
 
}

console.clear();

console.log(1 ? 2 ? 3 : 4 : 5 ? 6 : 7);
console.log(0 ? 1 ? 2 : 3 : 4 ? 5 : 6);

/*

1   tai if 
    ? 2  positive
        : 3  negative


0
    ? 1
        ? 2
        : 3
    : 4 
        ? 5
        : 6
*/

