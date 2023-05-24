//find lear year from an array

const years = [2023, 2024, 2025, 2028, 2030];
function myLearYear (myYears){
    let leapYear = [];
    for(let i = 0; i< myYears.length; i++){
        const element = myYears[i];
        if(element % 4 === 0){
            leapYear.push(element);
        }
    }
    return leapYear;
}
const result1 = myLearYear(years);
console.log(result1);