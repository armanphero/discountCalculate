// let num = 1;
// let multiply = 1;
// while(num < 11){
//     multiply = multiply * num;
//     num++;
// }
// console.log(multiply);

function mymultiply (mynum){
    let num = 1;
    let multiply = 1;
    while(num <= mynum){
        multiply = multiply * num;
        num++;
    }
    return multiply;
}
const result1 = mymultiply(10);
console.log(result1);

const result2 = mymultiply(8);
console.log(result2);

const result3 = mymultiply(3);
console.log(result3);

let multiply2 = 1;
for(let i = 1; i<6; i++){
    multiply2 = multiply2 * i;
}
console.log(multiply2);