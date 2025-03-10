const n1 = 7;
const n2 = 5;

function sudetis(a,b) {
    return a+b;
}
console.log(`${n1} + ${n2} = ${sudetis(n1, n2)}`);
/////////////////////////////////////////////////////
function skirtumas(a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);
//////////////////////////////////////////////////////
//anoniumine funkcijos logika, priskirta kintamajam....const = function ;]
const skirtumas1 = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas1(n1, n2)}`);
//////////////////////////////////////////////////////

// 
function sandauga(a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);
// mutacija 
const sandauga1 = function (a, b) {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga1(n1, n2)}`);

//arrow func rodykline funkc    liambda functi

const sandauga2 = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga2(n1, n2)}`);

//jeigu bloke yra lik 1 procedura
// galima nerasyti {} ir return 
const dalyba = (a, b) => a / b; // bet cia tik 1 procedurai ..................  yra nulis saugumas........
console.log(`${n1} * ${n2} = ${dalyba(n1, n2)}`);

//

const kvadratu = (a) => a * a; 
console.log(`${n1} * ${n1} = ${kvadratu(n1)}`);
console.log(`${n2} * ${n2} = ${kvadratu(n2)}`);

// Vardas -> V.

function name(v) {
    return v.slice(0, 1) + '.'; // patobulinimas vietoje slice() irasyt [0]
}
console.log(name('vardas.'));
////////join metoda ne imam nes taip paprasciau sitam bude.
function name(v) {
    return v[0] + '.';}
console.log(name('vardas.'));
////////////////////////////////////////////////////////////////////////////

const nameInit = s => s[0] + '.' //// sutrumpintas iki tiek ' rodikline'. trumpink geriau pvz slice = s rasom ,   o numbmer = n.
console.log(name('vardas.'));
console.log(name('Chuk.'));
console.log(name('Mack.'));

////////////// pvz

// 'Vardenis Pavardenis'  padaryt masyvus ir splitinti

function inicialai(fullName) {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + '.';
    const lastname = nameParts[1][0] + '.';
        return firstname + lastname;
}
console.log(inicialai('Vardienis Pavardienis'));
console.log(inicialai('Saulius Mangrudas'));
console.log(inicialai('Piter Vaitkinas'));
////////////////
const inicialaiArrow = fullName => {
    const nameParts = fullName.split(' ');
    const firstname = nameParts[0][0] + '.';
    const lastname = nameParts[1][0] + '.';
        return firstname + lastname;
}
console.log(inicialai('Vardienis Pavardienis'));
console.log(inicialai('Saulius Mangrudas'));
console.log(inicialai('Piter Vaitkinas'));
/////////////
const inicialai2 = fullName => {
    const parts = fullName.split(' ');
            return nameInit(parts[0]) + nameInit(parts[1]);
}
console.log(inicialai('Vardienis Pavardienis'));
console.log(inicialai('Saulius Mangrudas'));
console.log(inicialai('Piter Vaitkinas'));

/////////////////////////////////////////////////////////////////////////////////
// dalikliai ant 2 kurie true o kurie false.
// 5 --> false
// 4 --> true
// 3 --> false 
// 2 --> true
// 1 --> false
// 0 --> true

function isEven(n) {
    return n % 2 === 0;
    //return !(n % 2);
}
console.log(isEven(5));

//mod
function isEven(n) {
    return !(n % 2);
}
console.log('//', 0, '->', isEven(0));

/////////
//Labas rytas, Lietuva! ->3
// Ka tu? Ka vakare? ->4

function sakynis(text) {    
return text.split(' ').length;
}console.log(sakynis('Labas rytas, Lietuva!'));

// keiciam i rodykline 

const sakynis2 = text =>  text.split(' ').length;
console.log(sakynis('Labas rytas, Lietuva!'));
