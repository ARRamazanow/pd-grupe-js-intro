/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
/// 01234567891011
const chuck = 'chuck';  // rasai ir finale rodo betkokio vardo koki parasisi zodi varda nsvrb
const nameSize = chuck.length;

console.log(chuck, chuck.length);  // parodo kiek simboliu chuck = 5
console.log(chuck, nameSize);
// Chuck name is 5 letters long.
const chuckName = `${chuck} name is ${chuck.length} letter long.`
console.log(chuckName);

for (let i = 0; i < chuck.length; i++) {
    console.log('--->', i, chuck[i]);
}

console.log('----');


for (let i = chuck.length - 1; i >= 0; i--) {
    console.log('#', i, chuck[i]);
}

const word = 'vasara';  // Žodis turi būti eilutė
let countA = 0;
let countV = 0;
let countS = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] === 'v') {
        countV++;   // Skaičiuojame "v" raides
    }
    if (word[i] === 'a') {
        countA++;    // Skaičiuojame "a" raides
    }
}
console.log(`zodyje "${word}" yra ${countV} "v" raides.`);
console.log(`zodyje "${word}" yra ${countA} "a" raides.`);

console.clear();

function letterCount(text, searchSymbol) {
    let count = 0;
    // Patikrinti kiekvieną simbolį
    for (let i = 0; i < text.length; i++) {
        if (text[i] === searchSymbol) {  // Patikrinti, ar simbolis atitinka paieškos raidę
            count++;    
        }
    }
    return `zodyje "${text}" yra ${count} "${searchSymbol}" raides`;
}
const word1 = 'vasara';
const word2 = 'terminator x';
console.log(letterCount(word1, 'a'));  // Pateikiame kintamąjį, o ne eilutę
console.log(letterCount(word1, 'v'));
console.log(letterCount(word1, 'r'));
console.log(letterCount(word1, 'x'));
console.log(letterCount(word2, 'x'));  // Pateikiame kintamąjį, o ne eilutę
console.log(letterCount(word2, 't'));
console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'x'));


function letterCount(text, searchSymbol) {
    let count = 0;
    // Patikrinti kiekvieną simbolį
    for (let i = 0; i < text.length; i++) {
        if (text[i] === searchSymbol) {  // Patikrinti, ar simbolis atitinka paieškos raidę
            count++;    
        }
    }


return `zodyje "${text}" yra ${count} "${searchSymbol}" raides`
}
console.log(letterCount('tel numm yra',8));


function doesTextIncludesSymbol(text, symbol) {
    for (let i=0; i<text.length; i++) {
        if(text[1] === symbol) {  // klausia pvz ar a raide yra cikle 
            return true;    // atsaji a yra 
        }
    }
    return false;
   
}
console.log(doesTextIncludesSymbol('vasara', 'a'));
console.log(doesTextIncludesSymbol('vasara', 's'));
console.log(doesTextIncludesSymbol('vasara', 'v'));
console.log(doesTextIncludesSymbol('word2', 'x', "x"));
console.log(doesTextIncludesSymbol('word2', 'x', "t"));
console.log(doesTextIncludesSymbol('word2', 'x', "a"));
console.log(doesTextIncludesSymbol('word2', 'x', "x"));

console.log('---');

console.log('vasara'.includes('a'));
console.log('vasara'.includes('v'));
console.log('vasara'.includes('w'));
console.log('terminator'.includes('a')); // patikra raides zodije.....

console.clear();

const p = 'pomidoras';
console.log(p.at(0), p[0]);
console.log(p.at(1), p[1]);
console.log(p.at(0), p[0]);

function doesTextIncludesSymbol(text, position) {
    const index = position >= 0 ? position : (text.length + position);  // Taisytas kintamasis ir `.length`
    return text[index];}
const ps = 'pomidoras'; 
console.log(ps.at(0), ps[0], doesTextIncludesSymbol(ps, 0));
console.log(ps.at(1), ps[1], doesTextIncludesSymbol(ps, 1));
console.log(ps.at(2), ps[2], doesTextIncludesSymbol(ps, 2));
console.log(ps.at(-1), ps[ps.length - 1], doesTextIncludesSymbol(ps, -1));
console.log(ps.at(-2), ps[ps.length - 2], doesTextIncludesSymbol(ps, -2));

console.clear();
console.log('pomidoras'.charAt(0));
console.log('pomidoras'.charAt(1));
console.log('pomidoras'.charAt(2));
console.log('pomidoras'.charAt(3));
console.log('pomidoras'.charAt(-1));
console.log('pomidoras'.charAt(-2));
console.log('pomidoras'.charAt(-3), 'pomidoras'[-3]);

console.clear();
console.log('abcde'.charCodeAt(0));
console.log('abcde'.charCodeAt(1));
console.log('abcde'.charCodeAt(2));
console.log('Z'.charCodeAt(0));
console.log('ABCDE'.charCodeAt(2));
console.log('ABCDE'.charCodeAt(1));
console.log('ABCDE'.charCodeAt(0));

console.log(String.fromCharCode(91, 92, 93, 95, 96));
console.log(String.fromCharCode(222));
console.log(String.fromCharCode(333));
console.log(String.fromCharCode(222222));
console.log(String.fromCharCode(3333333));


console.clear();

console.log('pomidoras'. concat('aaa'));
console.log('pomidoras'. concat('aaa', 'bbb'));
console.log('pomidoras' + 'aaa' + 'bbb');
console.log('pomidoras' + 'aaa' + 'bbb');  // sujungia kelis string i viena.



console.clear();

console.log('pomidoras'. endsWith('aaa'));
console.log('pomidoras'. endsWith('a'));
console.log('pomidoras'. endsWith('s'));
console.log('pomidoras'. endsWith('as'));
console.log('pomidoras'. endsWith('Ras')); // atpazina vienodus simbolius

console.clear();

console.log('pomidoras'. startsWith('a'));
console.log('pomidoras'. startsWith('p'));
console.log('pomidoras'. startsWith('pr'));
console.log('pomidoras'. startsWith('po'));
console.log('pomidoras'. startsWith('pom'));  /// atpazina su kuo pradeda

console.log('selfy.jpg'. endsWith('.jpg'));// praktinis pvz.

console.clear();

console.log('pomidoras'. includes('a'));
console.log('pomidoras'. includes('p'));
console.log('pomidoras'. includes('x'));
console.log('pomidoras'. includes('pom'));
console.log('pomidoras'. includes('ido')); 

console.clear();
console.log('pomidoras'. indexOf('a'));
console.log('pomidoras'. indexOf('p'));
console.log('pomidoras'. indexOf('x'));
console.log('pomidoras'. indexOf('pom'));
console.log('pomidoras'. indexOf('gg')); 
// 012345
console.log('ffgghh'.indexOf('gg'));
console.log('pomidoras'. indexOf('o', 0)); 
console.log('pomidoras'. indexOf('o', 1)); 
console.log('pomidoras'. indexOf('o', 2)); // nuo baigtos pozicijos iesko 5 poziija nuo 2
console.log('pomidoras storas'. indexOf('o', 7)); 
console.log('pomidoras storas'. indexOf('o', 12)); 
console.log('pomidoras storas'. indexOf('o', 13)); 

console.clear();

console.log(20,'aaaaaaaaaaaaaa');
console.log(200, 'a'.repeat(200));
console.log(200, 'labaaaaa'.repeat(200));

console.clear();

console.log('vasara');
console.log('vasara'.replace('a', '-------------'));
console.log('vasara'.replace('a', '-------------').replace('v', '6'));

let summer = 'vasara';
console.log(summer);

summer.replace('a', '---');
console.log(summer);

let bird = 'kikilis';
console.log(bird);
bird=bird.replaceAll('k', '-=K=-');
console.log(bird);

bird=bird.replaceAll('=-','').replaceAll('-=','')
console.log(bird);

console.clear();
console.log('pomidoras'.slice());
console.log('pomidoras'.slice(3));
console.log('pomidoras'.slice(-3));
console.log('pomidoras'.slice(5));
console.log('pomidoras'.slice(-2));
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(-6));
console.log('pomidoras'.slice(0, -4));
console.log('pomidoras'.slice(1, -1));  // slice atsipjauna daly texto 

console.clear();
// splitas be reiksmis dideliui tex kombinuotam:      asfagdasfdaghtha454543325234rgagagfa
// asafga,  1251241, ergsghsgds, 325135153.
console.log('pomidoras'.split());

console.clear();
// to UP and Lower    CASE;
console.log('pomidoras'.toUpperCase());
console.log('POMIDORAS'.toLocaleLowerCase());

console.log('pomidoras'.toUpperCase());
console.log('3 POMIDORAS IR 4 AGURKAI'.toLowerCase()); //pvz 

console.clear();
const randomNumer= 562156;
console.log(randomNumer);
console.log(randomNumer);
console.log(randomNumer.toString());
console.log(''+ randomNumer);
console.log(`${randomNumer}`);

console.log(true);
console.log(true.toString);

console.clear();

const hi = '   Labas    rytas,    Lietuva!';
console.log(// darom stulpeliu nes per ilgas bus
    hi
    .trim() // Pasalina tarpus pradzioje ir pabaigoje
    .replaceAll('    ', ' ') // Pakeicia keturis tarpus i viena
    .replaceAll('  ', ' ') // Pakeicia du tarpus i viena
);
console.log(hi.includes('    '));// ar yra 4 probelai
// Labas rytas,    Lietuva!
console.clear();

console.log('pirmas antras trecias');
console.log('pirmas antras trecias'.length);//ne tinkamas
console.log('pirmas antras trecias'.split(' '));
console.log(3);
console.log('pirmas antras trecias'.split(' ').length);

const text123 = 'pirmas antras trecias';
const dictionary = text123.split(' ');
const wordsCount = dictionary.length;
console.log(text123);
console.log(text123.split(' '));
console.log('pirmas antras trecias');
console.log(dictionary);
console.log(wordsCount);
console.log(text123[0]);
console.log(text123[1]);
console.log(text123[2]);
console.log(text123[3]);
console.log(text123[4]);
console.log(text123[5]);
console.log(dictionary[0]);
console.log(dictionary[1]);
console.log(dictionary[2]);
console.log(wordsCount[1]);

const js = 'ich bid habe waren und'
const sentence = js.split('.');
console.log(sentence);

console.clear();

console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('g'));
console.log('duona'.split('a'));
console.log('duona'.split('du'));
console.log('vasara'.split('a'));
console.log('vasara'.split(''));
console.log('vasara'.split('a'));
