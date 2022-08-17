document.getElementById('btn-withdraw').addEventListener('click',function(){
        const withdrawFieldElement=document.getElementById('withdraw-field');
        const withdrawFieldString=withdrawFieldElement.value;
        const withdrawField=parseFloat(withdrawFieldString);
        
        // step-3:get the current withdraw

        const withdrawTotalElement=document.getElementById('withdraw-total');
        const withdrawTotalString=withdrawTotalElement.innerText;
        const previouswithdrawtotal=parseFloat(withdrawTotalString);
        // console.log(previouswithdrawtotal);

         const currentWithdrawTotal=withdrawField+previouswithdrawtotal;
         withdrawTotalElement.innerText=currentWithdrawTotal;
// step-5:get the value of balance
        const balanceTotalElement=document.getElementById('balance-total');
        const previousBalanceTotalString=balanceTotalElement.innerText;
        const previousBalanceTotal=parseFloat(previousBalanceTotalString);
        // console.log(previousBalanceTotal);
        // step-6: calculat the total balance
        const newBalanceTotal=previousBalanceTotal-withdrawField;
        balanceTotalElement.innerText=newBalanceTotal;


         withdrawFieldElement.value=" ";

})