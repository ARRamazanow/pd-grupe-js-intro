const students = [
    {name: 'Jonas', age: 99, isMarried: true},
    {name: 'Maryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},
];

const jonas= {
    name: 'Jonas', 
    age: 99, 
    isMarried: true,
    marks: [10, 2, 8, 4, 6, 2],
};
console.log(jonas);

const luckyNumbers = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};
console.log(luckyNumbers); // rodo su raktais 0 ir 10 pvz
console.log(luckyNumbers[0]); // cia jau pazymi rakto numeri pvz [0] ir duos skaiciu uzduota pvz cia 10.
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);
console.log(luckyNumbers[5]); //=============

const crazy = {
    title: 'pavadinimams....',
    '7': 'spetyni',
    isMarried: true,
    'atskiri zodziai': 'daug atskiru zodziu kuriu galima uzduoti bet nera uzduota nes nera vat todel',  // raktai i kabutes 'raktas': rezultatas.  Jeigu reikia tarpu.
    new: 'kazkas naujo',
    
};                                          // kablelius dieti!!!!!
console.log(crazy);
console.log(crazy.title);
console.log(crazy['title']);
console.log(crazy['7']);
console.log(crazy[7]);
console.log(crazy['isMarried']);
console.log(crazy.isMarried);
console.log(crazy['atskiri zodziai']);
console.log(crazy.new);

console.clear();


const maryte= {
    name: 'Maryte', 
    age: 99, 
    isMarried: true,
    marks: [10, 2, 8, 4, 6, 2],
    parents: [
        {name: 'Juozapas',
            age: 112,
            isMarried: true,
            phone: 9666666,
            marks: [10, 9, 8, 7, 6, 5, 4],
        },
        {name: 'Marija',
            age: 110,
            isMarried: true,
            phone: 84444444,
            marks: [10, 9, 8, 3, 4, 5],
        },
    ],
};
console.log(maryte);

const marksCount = maryte.marks.length;
let marksTotal =0;
for (let i = 0; i < maryte.length; i++) {
    console.log(i, '->', mamryte.marks[i]);
// apskaiciot pazymiu vidurki.
const marksTotal = 0; //suma
const marksCount = 0; //kiekis
const maryteMarksAverage = marksTotal / marksCount; // vidurkis

console.log('mamrytes pazymiu vidurkis', maryteMarksAverage);
    
}


console.log(maryte.parents.length);
console.log(maryte.parents[0].name);
console.log(maryte.parents[1].name);
/*
for (let i = 0; i < maryte.parents.length; i++) {
console.log(maryte.parents[i].name);
console.log(maryte.parents[i].age);
console.log(maryte.parents[i].marks);
console.log(maryte.parents[i].phone);
    
}
*/

for (let i = 0; i < maryte.parents.length; i++) {
    const parents = maryte.parents[i];
    
    console.log(maryte.parents[i].name);
    console.log(maryte.parents[i].age);
    console.log(maryte.parents[i].marks);
    console.log(maryte.parents[i].phone);
        
    }

    //sugibekit function kuris gauna 1 is tevu object arba siaip asmens object info.list  paduodant asmens objecta funkcija apskaicioja pazymiu vidurki.

    