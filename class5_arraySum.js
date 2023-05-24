// const num = [10, 20, 30, 40, 50];
// console.log(num);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     let element = num[i];
//     sum = sum + element;
// }
// console.log(sum);

function arraySum (numbers){ 
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const num = [10, 20, 30, 40, 50];
const result1 = arraySum(num);
console.log(result1);

const num2 = [11, 22, 33, 44, 55];
const result2 = arraySum(num2);
console.log(result2);