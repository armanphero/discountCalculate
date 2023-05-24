function oddSum (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % 2 !== 0){
            sum = sum + element;
        }
    }
    return sum;
}
const num = [11, 30, 35, 54, 23, 49];
const result1 = oddSum(num);
console.log(result1);

const num2 = [40, 23, 49, 80, 17, 89, 38, 21];
const result2 = oddSum(num2);
console.log(result2);

