console.log('====================SORT=================');
console.log('====================Numbers=================');
console.log('                                                       ');

const numbers = [10, 2, 8, 4, 6, 2002];
console.log(numbers);

numbers.sort();
console.log(numbers);
console.log('                                                       ');

console.log('====================word=================');
console.log('                                                       ');

const words = ['A','B', 'Y', 'C', 'K', 'A'];
console.log(words);
words.sort();
console.log(words);
console.log('                                                       ');

console.log('====================masyvas=================');
console.log('                                                       ');

const list = [[2, 2], [], [3, 3, 3], [1], [3]];
console.log(list);
list.sort();
console.log(list);
console.log('                                                       ');

console.log('====================sort palei didejima=================');
console.log('                                                       ');

const numbers2 = [10, 2, 8, 4, 6, 2002];

///////////////////////////////////////////////////////////////////////////////////mazesni  -1
///////////////////////////////////////////////////////////////////////////////////lygus     0
/////////////////////////////////////////////////////////////////////////////////// didesni +1

numbers2.sort((a, b) => a - b);   //      //(a, b) => a - b)   //       a minus b sukeicia vietomis ir palygina.  b - a bus atvirksciai.
console.log(numbers2);

const list2 = [[2, 2], [2, 11], [3, 3, 3], [1], [3]];
list2.sort((a, b) => a.length - b.length);                  //masyvams taikoma su length
console.log(list2);

const words1 = ['A','B', 'Y', 'C', 'K', 'A'];
console.log(words1);
words1.sort().reverse();   // nauduoti reverse raidem 
console.log('                                                       ');

console.log('====================Pavizdis su objectais=================');
console.log('                                                       ');

const students = [
    {name: 'Jonas', age: 99, isMarried: true},
    {name: 'Maryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: false},
    {name: 'Ona', age: 66, isMarried: true},
];
console.log(students);
students.sort((a, b) => a.age - b.age);                  //masyvams taikoma su length
console.log(students);
students.sort((a, b) => a.name.length - b.name.length);
console.log("Pagal vardo ilgį:");
console.log(students);

students.sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0:1);   // vardus pagal abecele.

/* for ciklu 
function sortStudentsByName() {
    if (a.name < b.name) {
    return -1;
    } else if (a.name === b.name) {
     return 0;
     } else {
      return 1;
    }
   students.sort(sortStudentsByName);
   console.log();
   */