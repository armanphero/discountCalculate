// let multification = 1;
// for(let i = 1; i <= 10; i++){
//     multification = multification * i;
// }
// console.log(multification);

function multification (numbers){
    let multy = 1;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        multy = multy * element;
    }
    return multy;
}
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const result1 = multification(myNum);
console.log(result1);

