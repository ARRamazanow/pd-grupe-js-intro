function sum(start, finish) {
//let result = 0;
//for (let i = start; i <= finish; i++) {
 //   result += i;
//}
//return result;
//}

const sum = (start, finish) 
    return(finish * (finish + 1) - start * (start - 1)) / 2;
}

//function sum(a, b) {
  //  return (b * (b + 1)) / 2;
//}
//veikia tik nuo 0 iki n

console.log(1,sum(0, 10));
console.log(2,sum(0, 100));
console.log(3,sum(0, 1000));
console.log(4,sum(0, 1000));
console.log(5,sum(0, 10_000));
console.log(6,sum(0, 100_000));
console.log(7,sum(0, 1000_000));
console.log(8,sum(0, 10_000_000));
console.log(9,sum(0, 100_000_000));
console.log(10,sum(0, 1_000_000_000));
console.log(11,sum(0, 10_000_000_000));
console.log(12,sum(0, 1_00_000_000_000));
console.log(13,sum(0, 1_000_000_000_000));
console.log(14,sum(0, 10_000_000_000_000));
console.log(15,sum(0, 100_000_000_000_000));
console.log(16,sum(0, 1000_000_000_000_000));
console.log(17,sum(0, 1000_000_000_000_000_000_000_000_000_000));
console.log(17,sum(0, 1000_000_000_000_000_000_000_000_000_000));



console.log(sum(9, 0));
console.log(sum(0, 4));
console.log(sum(0, 100));
console.log(sum(574, 815));
console.log(sum(-50, 50));
console.log(sum(-70, 30));
console.log(sum(30, 30));
console.log(sum(2025, 2025));
console.log(sum(-30, 30));
console.log(sum(10, 10));
console.log(sum(100000000000000000000, 100000000000000000000));
