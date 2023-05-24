
function leap_year(year){
    if(year % 4 === 0){
        return 'leap year';
    }
    return 'not leap year';
}
console.log(2022 % 4)
const result1 = leap_year(2024);
console.log(result1);
const result2 = leap_year(2022);
console.log(result2);