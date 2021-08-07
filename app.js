const billAmt = document.querySelector("#billAmount")
const nextBtn = document.querySelector("#nextBtn")
const cashGivenDiv = document.querySelector(".cashGivenInput")
const checkBtn = document.querySelector("#checkBtn")
const cashGiven = document.querySelector("#cashGiven")
const errorDiv = document.querySelector(".errorMsg")

const changeReturnDiv = document.querySelector(".changeReturn")
const output = document.querySelector("#output")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll('.noOfNotes')


nextBtn.addEventListener('click', function () {
    hideError();
    if (Number(billAmt.value) > 0) {
        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    } else {
        showError("Enter valid bill amount");
    }

})

checkBtn.addEventListener('click', function () {
    
    hideError();

    let billAmtValue = Number(billAmt.value);
    let cashGivenValue = Number(cashGiven.value);

    if (billAmtValue > 0 && cashGivenValue > 0) {
        if (!Number.isInteger(cashGivenValue)) {
            showError("Enter valid amount in cash given field");
            return;
        }
        if (billAmtValue > cashGivenValue) {
            showError("Cash is less than bill, please enter right amount");
            return;
        }
        returnAmt = cashGivenValue- billAmtValue  
        calculateNotes(returnAmt);
    } else {
        showError("Enter valid Bill amount and Cash  to continue")
    }
})


function calculateNotes(returnAmt) {
    
    if (returnAmt < 1) {
        showError("No amount should be returned");
        return;
    }
    changeReturnDiv.style.display = "block";
    for( let i=0; i<availableNotes.length;i++){
        
        const numberOfNotes = Math.trunc(returnAmt/availableNotes[i]);
        returnAmt %= availableNotes[i]
        noOfNotes[i].innerText = numberOfNotes;
    }
}

 
function showError(text) {
    errorDiv.style.display = "block";
    errorDiv.innerText = text;
    changeReturnDiv.style.display = "none";
}

function hideError() {
    errorDiv.style.display = "none"
}

