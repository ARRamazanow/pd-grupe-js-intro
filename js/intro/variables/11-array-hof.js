/*
HOF - highere order func
*/

const numbers = [1, 2, 3, 4];
console.log('-----------');

const numbers2x = [];
for (let i = 0; i < numbers.length; i++) {
    numbers2x.push(numbers[i] * 2)}
console.log(numbers2x);
console.log('-----------');

function triple(n) {
    return n * 3;
}
const numbers3x = numbers.map(triple);
console.log(numbers3x);
console.log('-----------');

const numbers5x = numbers.map(n => n * 5);
console.log(numbers5x);
///////////////////////////////////////////////console.log('-----------');
///////////////////////////////////////////////

const dic = ['Labas', 'rytas', 'Lietuva'];
const letters = dic.map(s => s[0]);
console.log(letters);

console.log('-----------');

const gg = 'Gera  gira geroj girioj gera gerti';
const ggInit = gg
    .split(' ')
    .map(s => s[0])   //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.   pvz cia nuline. map iteruoja i masyva,
    .join('.') + '!';
console.log(ggInit);

console.log('====================');
const  eba = 'Klausti ir eiti ten kur patars';
const ebaNt = eba
.trim('')
.split('')
.slice(28);
    console.log(ebaNt);
    /////////////////////////////////////////

    const numa = [2, 5, 55, 112];
    const numa20x = numa.map(n => n * 20);
    console.log(numa20x);

    console.log('====================');
   
const gg1 = ['Gera', 'hh'];
const ggres = gg1.map(s => s[3]);
console.log(ggres);
console.log('====================');

const pp = [];
console.log(pp);
pp.push(8);
console.log(pp);

pp[0] = 9;   // push metodas, ka uzduosi i kokia pozicija ta bus. ka parinks ta ir bus.(privalo but sveiki skaicai.)
pp[1] = 3;   // rankiniu budu uzduoti atnaujinia.
pp[2] = 66;
console.log(pp);

pp[2] = 92;
console.log(pp);  // naujam rezultatui jis keicia ka uzduosi...
console.log('====================');

const pp1 = [];
console.log(pp);
pp1[1] = 9;
console.log(pp1); //'pyksta kai praleidi eile :D    
pp1[0] = 6;       // uzduodi nauyja atstato viska
console.log(pp1);
pp1[2] = undefined;  // pazymi reiksmia kad nera 
console.log(pp1);
delete pp1[2];
console.log(pp1);
console.log(pp1.length);
console.log('====================');


const oo = [];
oo[3] = 10;             // parodo kad 3 pozicijos yra tuscios
console.log(oo);
console.log(oo.length); // rodo 4 pozicijas nes 3 yra ne pildytos , save jis to laiko.

delete oo[3];
console.log(oo);
console.log(oo.length); // viduje savije turi vietos keturiem pozicijom.

console.log('====================');

const gg2 = ['abc+', 'sdg-', 'prt'];

const gg2res = gg2.map(s => s[3]);
console.log(gg2res);
console.log('====================');

const luckyNumbers = [0, 1, 5, 7, 13, 28, 66, 69];
console.log(luckyNumbers);

const bigerLucky = luckyNumbers.map(n => n*10);
console.log(bigerLucky);  // padaugint 10 visi numeriai.

//[0, 1, 5, 7, 13, 28, 66, 69]; reik kad liktu 28 66 69

const bigLucky1 = luckyNumbers.filter(n => n > 20); // per .filter like tik skaiciai kurie yra uzduoti pvz didesnis uz 20..
console.log(bigLucky1);
const bigLucky2 = luckyNumbers.filter(n => n >= 28);  // didesni arba lygus 28
const bigLucky3 = luckyNumbers.filter(n => n < 50);   // mamzesni visi uz 50.. ir t.t,
console.log(bigLucky3);

const sislast = luckyNumbers.filter(n => n % 10 === 6);
console.log(sislast);

const sisfirst = luckyNumbers.filter(n => ('' + n)[0] === '6');
console.log(sisfirst);

console.log('====================');

const students = ['Jonas', 'Maryte', 'Petras', 'Ona']
console.log(students);

const nameSize = students.map(s => s.length); // parodo kiek v. simboliu
console.log(nameSize);

const longNames = students.filter(s => s.length > 5); // vardai kurie ilgesni uz 5 siimboliu
console.log(longNames);

const longNamess = students.map(s => s.length > 5); // filtras eina per kiek viena varda ir palieka kas > 5  , o map parodo kas yra true arba false... nes uzduota ar lygus jis 5. atsirado boolien
console.log(longNamess);

const studentsInitials = students.map(name => name[0] + '.');
console.log(studentsInitials);
console.log('=========MAP===========');

const womanNames = students.filter(name => name.at(-1)!== 's');   // surast vardus kurie nebaigiasi su -as  , paprastai butu per at(-1) !== tai yra ne lygu!!! nepamirsti
console.log(womanNames);

// kiti du budai 
console.log('==========AT==========');

const womanNames2 = students.filter(name => name.at(-1) === 'e' || name.at(-1) === 'a'); // sitas salygas rodo kurie turi e ir a galunes. ir ju parodo console.
console.log(womanNames2);
console.log('===========AT=========');

// dar yra budai endswith ir includes

const womanNames3 = students.filter(name => name.endsWith('e') ||name.endsWith('a') ); 
console.log(womanNames3);
console.log('===========endswith=========');

//endswith
const womanNames4 = students.filter(name => !name.endsWith('s'));  // labai trumpas ir konkretus ar yra pvz cia ar yra pabaiga su s
console.log(womanNames4);
console.log('=========endswith===========');

//include
const womanNames5 = students.filter(name => ['e', 'a'].includes(name.at(-1)));  // sitas patogus nes gali pildyti savo 
console.log(womanNames5);
console.log('=========include===========');

const womanNames6 = students.filter(name => 'ea'.includes(name.at(-1)));  // include veikia ir ant string tesiog.
console.log(womanNames6);
console.log('===========include string=========');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);
const evenAc = abc.filter((s, i) => i % 2 === 0 ); // s erikalinga kad pereitu prie 2 pozicijos. palei uzduoti galimas vairiantas s ir panauduoti.   -i- tesiog yra antras param
console.log(evenAc);
console.log('============kas antra raide traukimas========');

//atrinkti zodzius kuriuose yra papildoma raide tokia kokia ji ir prasideda

const words = ['labas', 'ananasas', 'tuktukas', 'vasara'];
const doubleWords = words.filter(w => w.slice(1).includes(w[0]));
console.log(doubleWords);
const doubleWords2 = words.filter(w => w.indexOf(w[0], 1) > 0) // [0], 1 tas vienas uzduoda nuo kur pradeti ziuretii, tai rasom visad 1
console.log(doubleWords2);
console.log('============metodai includes ir indexoff, surasti vienodu simboliu========');


console.log('===========================================================================================================');

const colors = ['red', 'green', 'blue', 'yellow', 'red', 'orange']; //list sarasas ir jame viduje item
console.log(colors);

const colors2 = colors.map((item, index, list) => item);
console.log(colors2);

const colors3 = colors.map((item, index, list) => list[index]);
console.log(colors3);
//rasti visas spalvas, kurios kartuojasi.
//rasti unikalias. //indexof parodo tik unikalias           const colorsrep = colors.filter((c, i, list) => list.indexOf(c)); isbrauke kartuojancius zodzius.

console.log('========---------------===');

const colorsrep = colors.filter((c, i, list) => list.indexOf(c)); // unikalus
console.log(colorsrep);

console.log('============items unikalus========');

//const duplicateColors = colors.filter((c, i, list)) => 
   // list.indexOf(c) !== list.lastIndexOf(c) && list.indexOf(c) === i   // red vienas kuris
//);
//console.log(duplicateColors);
console.log('============sprendimas ne teisingas bet atsakymams yra geras========');

const colors1 = ['red', 'green', 'blue', 'yellow', 'red', 'orange'];
const colors22 = ['red', 'blue', 'yellow', 'red', 'orange'];
const colors33 = ['red', 'green', 'yellow', 'red', 'orange'];
const colors44 = ['red', 'green', 'blue', 'red', 'orange'];
const colorsCopy2 = colors.map((item, index, list) => item);
const colorsCopy3 = colors.map((item, index, list) => list[index]);

function repeatingValues(c, i ,list) {
    return list.indexOf(c) !== list.lastIndexOf(c);
    const colorReps = colors.filter(repaetingValues);
}
console.log(colors.filter(repeatingValues));
console.log(colors22.filter(repeatingValues));
console.log(colors33.filter(repeatingValues));
console.log('============..........................Pabaiga ir einam toliau............................========');


