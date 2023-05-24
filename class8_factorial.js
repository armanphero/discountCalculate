// function factorial (number){
//     let multiply = 1;
//     for(let i = 1; i <= number; i++){
//         const element = i;
//         multiply = multiply * element;
//     }
//     return multiply;
// }
// const result1 = factorial(10);
// console.log(result1);

//factorial reverse
function factorial (number){
    let multiply = 1;
    for(let i = number; i > 0; i--){
        const element = i;
        multiply = multiply * element;
    }
    return multiply;
}
const result1 = factorial(10);
console.log(result1);