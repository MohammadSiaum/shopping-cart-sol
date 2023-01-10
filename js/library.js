// common funtion here..

// Final Total price
function finalTotalPrice(subPrice , tax)
{
    const totalPrice = subPrice + tax;
    const totalPriceField = document.getElementById('final-total-price');
    totalPriceField.innerText = totalPrice;

}
function taxTotal(subPrice)
{
    const taxAmount = subPrice * 0.02;
    const taxAmountByInt = parseInt(taxAmount);
    const taxField = document.getElementById('tax-price');
    taxField.innerText = taxAmountByInt;
    return taxAmountByInt;

}

// Sub total price
function subTotalPrice(price, id)
{
    const priceField = document.getElementById(id);
    const priceString = priceField.innerText;
    const priceId = parseInt(priceString);
    
    const subTotalPrice = price + priceId;

    const subPriceField = document.getElementById('sub-total-price');
    subPriceField.innerText = subTotalPrice;
    return subTotalPrice;


}

// personal total price
function updateTotalPrice(phonePrice, numOfphone ,id)
{
    const totalPrice = phonePrice * numOfphone;
    const totalPricePhone = document.getElementById(id);
    //const totalPriceString = '$' + totalPrice;
    totalPricePhone.innerText = totalPrice;

    return totalPrice;
}

// personal increase or decrease number
function updateNumber(isIncrease, id)
{
    const numberField = document.getElementById(id);
    const numberString = numberField.value;
    const previousNumber = parseInt(numberString);

    let newNumber;
    if(isIncrease)
    {
        newNumber = previousNumber + 1;
    }
    else
    {
        newNumber = previousNumber - 1;
    }

    numberField.value = newNumber;

    return newNumber;


}