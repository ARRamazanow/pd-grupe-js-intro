/*
STRING - text - raidziu / simboliu grandinele
iniciavimas galimas:
- ' (viengubomis kabutemis)
- " (dvigubomis kabutemis)"
-  backtick
*/

const name = 'Chuk';
console.log(name);   // uzbrauktas vardas bet ne problemam technine...

const firstname = 'Chuk';
console.log(firstname);

const lastname = 'Norris';
console.log(lastname);

const fullname = firstname + '  ' + lastname;
console.log(fullname);

const age = 84;
// hi, my name is chuck and i am 84 years old
// hi, my name is maryte and i am 88 years old
// hi, my name is {NAME} and i am {AGE} years old

const ChuckIntro = 'hi, my name ' + firstname + ' and i am ' +  age + ' years old.';
console.log(ChuckIntro);
console.log('-----------------');

// Kabute: ' (vienguba).
const k1 = "Kabute: '(vienguba).";
console.log(k1);
console.log('-----------------');

// kabute: "(dviguba)."
const k2 = 'Kabute: "(dviguba).';
console.log(k2);
console.log('-----------------');

// kabutes: ' (vienguba) ir " (dviguba)."

// kabutes: ' (vienguba)" + ' ir " (dviguba).'

//const k12 = "Kabutes: ' (vienguba)" + ' ir " (dviguba).';
//console.console.log(k12);
console.log('-----------------');

/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/
console.log('-----------------');

const html = '<div>' + '<h1>Labas rytas, Lietuva!</h1>' + ' <p>Pirmadienis.</p>' + ' <p>Pomidoras.</p> ' + '</div>';
console.log(html);
console.log('-----------------');

const html1 = '<div>';
const html2 = '<h1>Labas rytas, Lietuva!</h1>';
const html3 = ' <p>Pirmadienis.</p>';
const html4 = ' <p>Pomidoras.</p>';
const html5 = '</div>';

console.log(html1);
console.log(html2);
console.log(html3);
console.log(html4);
console.log(html5);
console.log('-----------------');
/* *
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/

const httml = '<div>\r\
    <h1>Labas rytas, Lietuva!</h1>\r\
    <p>Pirmadienis.</p>\r\
    <p>Pomidoras.</p>\r\n\
</div>';
console.log(httml);
// \n\  numemtma nuaja eilute   \r\ 
// \n = new line      \r = return    \r\n = unltimate  new line   ( enter migtukas)
// jeigu palikti \r bus kaip beganti pastraipa.....   \r\n\ nepam9irst kad ne dingtu uzrasai.
/*
<div>
    <h1>Labas rytas, Lietuva!</h1>
    <p>Pirmadienis.</p>
    <p>Pomidoras.</p>
</div>
*/
const hhtml = '<div>\r\n\
\t<h1>Labas rytas, Lietuva!</h1>\r\n\
  \t\t  <p>Pirmadienis.</p>\r\n\
    \t<p>Pomidoras.</p>\r\n\
</div>'
console.log(hhtml);   //  \t tarpai kai ptab
console.log('-----------------');

// kabutes: ' (vienguba)" + ' ir " (dviguba).'
const k3 = 'kabutes: \' (vienguba)' + ' ir " (dviguba).'
console.log(k3);
const k4 = "kabutes: ' (vienguba) + ' ir \" (dviguba)."
console.log(k4);
const k5 = "kabutes: \' (vienguba) + ir \" (dviguba)."
console.log(k5);
const k6 = 'kabutes: \' (vienguba) + ir \" (dviguba).'
console.log(k6);
console.log('-----------------');

///////////////////////////// backtikai

const b = 'labas';
console.log(b);          //  

const bHtml = `
                                                                 <div>
         <h2>Labas rytas, Lietuva!</h2>
         <a>Pirmadienis.</a>
         <p>Pomidoras.</p>
                                                                </div>`;
                                                             
console.log(bHtml);
// problemos buvo sutikti kartu 
// Kabute: ` (backtick).
console.log('-----------------');

const backtickBedute1 = 'Kabute: ` (backtick).';
const backtickBedute2 = "Kabute: ` (backtick).";
const backtickBedute3 = `Kabute: \` (backtick).`;

console.log(backtickBedute1);
console.log(backtickBedute2);
console.log(backtickBedute3);
console.log('-----------------');

const luckyNumber = 13;
// my lucky Number is 13.
const lucky = 'My lucky number is'  + luckyNumber + '.';     // pasidarom kintamaja atskira skaiciu nes keicias
console.log(lucky);  // senas metodas paprastas

const lucky2 = `My lucky number is ${luckyNumber}.`;
console.log(lucky2);   // nauda yra sitos nes nauduoji maziau simboliu (kabuciu tarpu pliusu ir tt).
console.log('-----------------');

const chukBack = `hi, my name is ${firstname} and i am ${age} years old.`;
console.log(chukBack);

//price 45$   // doleris veikia tik backtikai skliaustaiws ${}
const price = 45;
const priceStr = `Price: $${price}.00` ;
const priceStr2 = "Price: $${price}.00" ;
const priceStr3 = `Price: $${price}.00` ;

console.log(priceStr);
console.log(priceStr2);
console.log(priceStr3);
console.log('-----------------');

// C:\Documents\troliai\reikia\namie
const troliai = 'C:\Documents\troliai\reikia\namie';  // fleshai daro savo D T R N
console.log(troliai);
const troliai2 = `C:\\Documents\\troliai\\reikia\\namie`;  // dvigubint reikia jis daro simboli spausdinantai
console.log(troliai2);

// string.raw  // C:\Documents\troliai\reikia\namie
const broliai = `string.raw \` C:\\Documents\\troliai\\reikia\\namie\`;`;   // reikia kreipti demesi i simboliu ne pamesti kur koki dietis.
console.log(broliai);
console.log('-----------------');


console.clear();

11. // Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.

//"HTML CSS JS"

const str = "HTML CSS JS!";
const result = str.replace("HTML", "H").replace("CSS", "C").replace("JS", "J");
console.log(result);


//  5. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".

let s = 'mokytojas';
s= s.replace('as', 'a');
console.log(s);