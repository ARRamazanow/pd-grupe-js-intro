//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą (ne visuose uždaviniuose)):

// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
// reiketu padalintu i du zodzius mokymoo centras, ir tada kiek vienas zodis gaus po didele raide prieki. ir finale ju sujungti.
const text = "mokymo centras";
const words = text.split(" ");
let formattedText = "";
for (let i = 0; i < words.length; i++) {
    formattedText += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    if (i < words.length - 1) {
        formattedText += " ";   }}
console.log(formattedText);
////////////////
const text = "mokymo centras";
const formattedText = text
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log(formattedText); // "Mokymo Centras"

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.
const str = "JavaScript programavimas";
console.log(str.slice(0, 10));
// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
const str = "JavaScript programavimas";
const str1 = str.slice(0, 10) + "...";
console.log(str1);
// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
const te = "obuolys, bananas, kivis";
console.log(te.replaceAll("," , ";"));
// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
const str = 'Šiandien gera diena:';
console.log(`${str} ${str.length}`);
// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.
const sentence = 'test@gmail.com';
const word = '@';
console.log(sentence.includes(word) ? 'true' : 'false');
console.log(sentence.endsWith('.com'));
// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
const srt = '    JavaScript!   ';
console.log(srt.trimStart());
// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
console.log("JavaScript" === "javascript");
///////////////////////////////
const str1 = "JavaScript";
const str2 = "javascript";

const isEqual = str1.toLowerCase() === str2.toLowerCase();
console.log(isEqual); // true

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".

// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.

// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.

// 12. Raskite pirmą žodį string'e "Hello World!".

// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.

// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.

// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".

 