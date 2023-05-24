function hotelCost (day){
    if(day > 0 && day <= 10){
        const totalCost = day * 500;
        return totalCost;
    }
    else if(day > 10 && day <= 20){
        const extraDays = day - 10;
        const firstTenDaysCost = 10 * 500;
        const extraDaysCost = extraDays * 300;
        const totalCost = firstTenDaysCost + extraDaysCost;
        return totalCost;
    }
    else if(day > 20){
        const extraDays = day - 20;
        const firstTenDaysCost = 10 * 500;
        const secondTenDaysCost = 10 * 300;
        const extraDaysCost = extraDays * 100;
        const totalCost = firstTenDaysCost + secondTenDaysCost + extraDaysCost;
        return totalCost;
    }
    else{
        return 'Please ! Give a valid day number';
    }

}

const result1 = hotelCost(9);
console.log(result1);

const result2 = hotelCost(18);
console.log(result2);

const result3 = hotelCost(24);
console.log(result3);

const result4 = hotelCost(-3);
console.log(result4);