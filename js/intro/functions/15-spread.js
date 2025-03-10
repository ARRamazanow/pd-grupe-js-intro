// spread uzrasymas sukuria atskira nauja kopija, veikia kitaip negu reference.....
console.log('=============Spread metodas===================');

const a = [1, 2, 3, 4];
const b = [...a];                   // svarbu ...a
console.log('a', a, 'b', b);

a[0] = 99;
console.log('a', a, 'b', b);

b[3] = 88;
console.log('a', a, 'b', b);

const c = [1, 11];
const d = [2, 22];
const e = [3, 33];

const f1 = [...c,...d, 'skaiciai', 44, ...c, 4];   // galima iterpti simboliu ir prieki ir gale bet ka ir koki ir string....
console.log(f1);

const f2 = [1,...c, ...d, ...e,];
console.log(f2);

const f3 = [...c, ...d, ...e,1];
console.log(f3);

const c2= [...f1,...f2,...f3];
console.log(c2);

console.log('=============SU MASYVAUS==================');


const g = [[1, 11], [2, 22], [3, 33]];  // kintamieji g ir g2 jiems yra praskirtas adresas c prie [1,11]..
const g2 = [c, d, e];
console.log(g);
console.log(g2);

const h = [...g];
console.log(h);

g[0][0] = 9;
console.log(g);
console.log(h);

const j = [[...g[0]], [...g[1]], [...g[2]]];
console.log(j);

g[0][1] = 7777;
console.log(g);
console.log(h);
console.log(j);

console.log('=================SU OBJECT================');

const objA = { name: 'Jonas' };
const objA2 = { name: 'Maryte' };
const objA3 = { name: 'Petras' };
const objB = { age: 99 };
const objC = { isMarried: true };

const student = { ...objA, ...objB, ...objC };
console.log(student);

const objAA = { ...objA, ...objA3 };
console.log(objAA);

const objD1 = { title: 'Labas', desc: 'rytas' };
const objD2 = { country: 'Lietuva' };
const objD3 = { desc: 'vakaras' };

const objD = {
    ...objD3,
    ...objD2,
    ...objD1,
};
console.log(objD);

console.log('=================Mas case================');

const k = [[4], [5, 55], [6, 66, 666]];
const l1 = [];
for (let i = 0; i < k.length; i++) {
        const innerArray = k[i];
        l1.push(...innerArray);
}
console.log(l1);

