// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step:get the eposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    // step-3:get the current  deposit total
    // for non-input (element othe than input,textarea) use innerText to get the text 
    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    const currentDepositTotal= newDepositAmount+previousDepositTotal;
    depositTotalElement.innerText=currentDepositTotal;

    // step-7: clear the data from deposit Field
    depositField.value=" ";
})