// let num = 1;
// let sum = 0;
// while(num < 11){
//     sum = sum + num;
//     num++;
// }
// console.log(sum);

function mysum (mynum){
    let num = 1;
    let sum = 0;
    while(num <= mynum){
        sum = sum + num;
        num++;
    }
    return sum;
}
const result1 = mysum(10);
console.log(result1);

const result2 = mysum(20);
console.log(result2);

const result3 = mysum(33);
console.log(result3);