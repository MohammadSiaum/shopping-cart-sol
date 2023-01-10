
// Phone price plus Button
document.getElementById('btn-phn-plus').addEventListener('click', function(){

    const newPhnNumber = updateNumber(true, 'phn-number-field');
    const phonePrice = updateTotalPrice(1219, newPhnNumber, 'phn-total-price');
    const subPrice = subTotalPrice(phonePrice, 'case-total-price');
    const taxPrice = taxTotal(subPrice);
    finalTotalPrice(subPrice , taxPrice);

    

})

// Phone price minus Button
document.getElementById('btn-phn-minus').addEventListener('click', function(){

    const newPhnNumber = updateNumber(false, 'phn-number-field');
    const phonePrice = updateTotalPrice(1219, newPhnNumber, 'phn-total-price');
    const subPrice = subTotalPrice(phonePrice, 'case-total-price');
    const taxPrice = taxTotal(subPrice);
    finalTotalPrice(subPrice , taxPrice);


})


