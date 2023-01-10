// Phone price plus Casing
document.getElementById('btn-case-plus').addEventListener('click', function(){
    // Button case plus
    const newCaseNumber = updateNumber(true, 'case-number-field');
    const casingTotalPrice = updateTotalPrice(59, newCaseNumber, 'case-total-price');
    const subTotal = subTotalPrice(casingTotalPrice, 'phn-total-price');
    const taxPrice = taxTotal(subTotal);
    finalTotalPrice(subTotal , taxPrice);


})

// Phone price minus Casing
document.getElementById('btn-case-minus').addEventListener('click', function(){

    // Button case minus
    const newCaseNumber = updateNumber(false, 'case-number-field');
    const casingTotalPrice = updateTotalPrice(59, newCaseNumber, 'case-total-price');
    const subTotal = subTotalPrice(casingTotalPrice, 'phn-total-price');
    const taxPrice = taxTotal(subTotal);
    finalTotalPrice(subTotal , taxPrice);


})


