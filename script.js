document.getElementById("calculate").addEventListener("click" , function(){
    // input
    const income = document.getElementById("income");
    const food = document.getElementById("food");
    const rent = document.getElementById("rent");
    const clothe = document.getElementById("clothe");
    
    // balanace & expencess
    const expencess = document.getElementById("expence");
    const balance = document.getElementById("balance");
    
     
    // inputs value String
    const incomeValueString = income.value
    const foodValueString = food.value
    const rentValueString = rent.value
    const clotheValueString = clothe.value
    //    integer value
    const incomeValue = parseInt(incomeValueString)
    const foodValue = parseInt(foodValueString)
    const rentValue = parseInt(rentValueString)
    const clotheValue = parseInt(clotheValueString)

    if(incomeValue <0 || foodValue<0 || rentValue<0 || clotheValue<0){
        alert("enter Positive number");
      }else{
//  expence Calculation
        const expenceCalculation  = foodValue + rentValue + clotheValue;

        // remaining balance counte
        const remainingBalance = incomeValue - expenceCalculation ;
        // conditions
        if(remainingBalance<0){
            alert("your Expence is tooo high")
        }else{
            
            expencess.innerText = expenceCalculation;
            balance.innerText = remainingBalance;
        }  
    }
});

document.getElementById("saving-calculte").addEventListener("click",function(){

    // Saving Items
    const saving = document.getElementById("saving");
    const savingAmmount = document.getElementById("saving-ammount");
    const ammount = document.getElementById("Remaining-ammount");

    // balance and income
    const balance = document.getElementById("balance");
    const income = document.getElementById("income");


    const incomeValueString = income.value;
    const incomeValue = parseInt(incomeValueString);
    const savingValueString = saving.value;
   const savingValue = parseInt(savingValueString);

   const balanceValueString = balance.innerText;
   const balanaceValue = parseInt(balanceValueString);

//    calculation sight
   const howPresent = savingValue / 100;
   const savingsAmmountCalc = howPresent * incomeValue;
   const savingsAmmount = Math.round(savingsAmmountCalc)
   const ammountCalc = balanaceValue - savingsAmmount;
    
   if(savingValue < 100 && savingValue > 0){
    if(balanaceValue < savingsAmmount){
        alert("You don't have enough money to save");
        saving.value = '';
    }else{
        savingAmmount.innerText = savingsAmmount;

    ammount.innerText = ammountCalc;
    }

   }else{
    alert("Enter Proper Persent value. that you want to save ")
   }
})


















