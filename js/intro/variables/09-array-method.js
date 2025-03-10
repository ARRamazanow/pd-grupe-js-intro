/*
ARRAY - Arejus,, sarasas, listas, masyvas, matrica
*/

const number = [10, 2, 8, 4, 6];
console.log(number);
console.log(number.length);

const students = ['Jonas', 'Maryte', 'Petras', "ona",'Kazys','Aldona'];
console.log(students);

console.log(number.length);
const mix = [145, 'adsfd', true];
console.log(mix);

console.log(students.length);
console.log(students);
console.log(students.length);

// Studentas: Jonas pradejo mokoytis.
// Studentas: Maryte pradejo mokoytis.
// Studentas: Petras pradejo mokoytis.
// Studentas: Ona pradejo mokoytis.
console.log(`Studentas: ${students[0]} pradejo mokoytis.`);
console.log(`Studentas: ${students[1]} pradejo mokoytis.`);
console.log(`Studentas: ${students[2]} pradejo mokoytis.`);
console.log(`Studentas: ${students[3]} pradejo mokoytis.`);
// cikla metodu 
for (let i=0; i<students.length; i++) {
console.log(i, `Studentas: ${students[i]} pradejo mokoytis.`);          // students irasai simbol i  ir pagal i jis ziuri nuo 0 iki 4.
}

console.clear();
// suzinoti ar cia yra arrejus.
const x = [true];  // arejaus tipas yra [] .

if (Array.isArray(x)) {
    console.log('Taip');
}   else    {
    console.log('Ne');
}

console.log(Array.isArray(14562));
console.log(Array.isArray(true));
console.log(Array.isArray('afasaf'));
console.log(Array.isArray('asd'));
console.log(Array.isArray(['safd']));

console.clear();


const studentsAt = ['Jonas', 'Maryte', 'Petras', "ona"]
console.log(studentsAt[0]);
console.log(studentsAt[1]);
console.log(studentsAt[2]);
console.log(studentsAt[3]);
console.log('---------------');

console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);
console.log('---------------');
console.log(studentsAt[studentsAt.length - 1]);
console.log(studentsAt[studentsAt.length - 2]);
console.log(studentsAt[studentsAt.length - 3]);
console.log(studentsAt[studentsAt.length - 4]);
console.log('---------------');
console.log(studentsAt.at ( 1));

console.clear();

const studentsConcat1 = ['Jonas', 'Maryte'];
const studentsConcat2 = ['Petras', 'Ona'];
const studentsConcat11 = studentsConcat1.concat(studentsConcat2);
console.log(studentsConcat11);

const students222 = studentsConcat2.concat(studentsConcat1);
console.log(students222) // pasidare con masiva
console.log(studentsConcat1 + studentsConcat2); // pagamino stringa.

console.log(studentsConcat1 + studentsConcat2); // pagamino stringa.

console.log('---------------');

console.log([1].concat(1));
console.log([2].concat([2]).concat([2]));
console.log([3].concat([3]).concat([3]).concat([3]));
console.log([1].concat([2], [3], [3]));
console.clear();

const studentsInc = ['Jonas', 'Maryte', 'Petras', "ona"]
console.log(studentsInc.includes('Chuck'));
console.log(studentsInc.includes('a'));
console.log(studentsInc.includes('Jonas'));
console.log(studentsInc.includes('ona'));
console.log(studentsInc.includes('Ona'));

console.clear();

const studentsIndex = ['Jonas', 'Ona', 'Maryte', 'Petras', 'Ona'];
console.log(studentsIndex.indexOf('Chuck'));
console.log(studentsIndex.indexOf('a'));
console.log(studentsIndex.indexOf('Jonas'));
console.log(studentsIndex.indexOf('ona'));
console.log(studentsIndex.indexOf('Ona'));
console.log(studentsIndex.indexOf('Ona', 2));
console.log(studentsIndex.indexOf('Ona', 5));

console.clear();

const seachStudent = 'Ona';
let studentCount = 0;

for (let i = 0; i < studentsIndex.length; i++) {
    if (studentsIndex[i] === seachStudent) {
        studentCount++;
    }
}

if (studentCount === 0) {
    console.log('Norimo studento nerasta');
} else {
    console.log(`Sarase yra "${seachStudent}": ${studentCount}`);
}

console.clear();


const medziai = []; //kazka itraukti
console.log(medziai);

medziai.push('azuolas');
console.log(medziai);

medziai.push('egle');
console.log(medziai);

medziai.push('berzas');
console.log(medziai);

medziai.pop(); //salinimas
console.log(medziai);

medziai.unshift('pusis'); // atsiranda priekije.
console.log(medziai);

medziai.shift('pusis'); // pasalina priekije.
console.log(medziai);

console.log([1, 2, 3].concat([4, 5]));

console.log([9, 99, 999, 9999].slice(4)); // slice koki skaiciu uzduosi tiek nuims,, jei znklu minus pvz -1 tai pradeda nuo galo. ;]

console.log([1, 2, 3, 4, 5, 6, 7].splice(0)); // uzduoda nuo kuo pradieti.

const sp1 = [1, 2, 3, 4, 5, 6, 7];
console.log(sp1);
const sp2 = sp1.splice(2, 3);
console.log(sp2);// splaisini ir lieka sp2 viskas po 2

console.log(sp1);// o cia parodo paskui kas liko sp1

console.clear();
const text = 'Labas rytas Lietuva';
const words = text.split(' ');
console.log(words);

const textWithDashes = words.join();
console.log(textWithDashes);

const textToStr = '' + words;
console.log(textToStr);

const textWithDashes1 = words.join('-');
console.log(textWithDashes1);

const textWithDashes2 = words.join('        0.o==o.0        ');
console.log(textWithDashes2);

const textWithDashes22 = words.join('   (oo==oo)   ');
console.log(textWithDashes22);

console.clear();

const rev = [1, 2, 3];   // reverse
console.log(rev);

rev.reverse(rev);
console.log(rev);
rev.reverse();
console.log(rev);

// Labas rytas lietuvva > lietuva rytraas labas 

const lr1 = 'Labas rytas Lietuva'
    .split(' ')   
    .reverse()    
    .join(' ');   
console.log(lr1);

const alus = 'alus'
    .split('')
    .reverse()
    .join('')
    console.log(alus);
    

