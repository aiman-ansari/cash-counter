const billAmount = document.querySelector('#bill-amount');
const cashAmount = document.querySelector('#cash-amount');
const nextButton = document.querySelector('#next-button');
const error = document.querySelector('#error-message');
const cashError = document.querySelector('#cash-error');
const showTable = document.querySelector('#table-hide');
const showCashField = document.querySelector('#hide-cash');
const checkButton = document.querySelector('#check');
const notes = document.querySelector('.notes');
const noOfNotes = document.querySelectorAll(".notes");


const givenNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", () =>{
    if(billAmount.value == '' || billAmount.value == 0){
        error.style.display = "block";
        error.innerHTML = "Enter Bill Amount"
    }
    else{
        error.style.display = "none"
        nextButton.style.display = "none"
        showCashField.style.display = "block";
    }
});

checkButton.addEventListener("click", function cashCheck(){
    const cash = Number(cashAmount.value);
    const bill = Number(billAmount.value)
    if(cash == ''){
            error.style.display = "block";
            error.innerHTML = "Enter Cash Amount"
    }
    else if(cash<bill){
            error.style.display = "block";
            error.innerHTML = "Cash Amount should be greater than bill amount"
    } 
    else if(bill==cash){
            error.style.display = "block";
            error.style.backgroundColor = "#d1ecf1";
            error.style.color = "black";
            error.innerHTML = "no need to return cash";
    }
    else if( cash>bill){
            showTable.style.display = "block";
            error.style.display = "none";   
            let difference = cashAmount.value - billAmount.value; 
            calculateChange(difference) ;
    }
    else{
        showTable.style.display = "block";
        error.style.display = "none";
    }
});

function calculateChange(difference) {
    for (let i = 0; i < givenNotes.length; i++) 
        {
            const numberOfNotes = Math.trunc(difference / givenNotes[i]);
            difference = difference % givenNotes[i];
           noOfNotes[i].style.cellSpacing = "30px"
           noOfNotes[i].style.cellPadding = "20px"
            noOfNotes[i].style.cellSpacing = "2rem"
            noOfNotes[i].innerText = numberOfNotes;
        }      
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
