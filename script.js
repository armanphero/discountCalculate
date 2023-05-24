const btn = document.getElementById('equalBtn');
btn.onclick = function(){
    const amount = document.getElementById('amount').value;
    const discount = document.getElementById('discount').value;
    const discountAmount = (amount * discount) / 100;
    const afterDiscount = amount - discountAmount;

    document.getElementById('afterDiscount').value = afterDiscount;
    document.getElementById('theDiscount').value = discountAmount;

    console.log(afterDiscount , discountAmount)
}

