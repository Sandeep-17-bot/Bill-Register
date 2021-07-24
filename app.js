const billAmt = document.querySelector("#billAmount")
// nextbtn reads the billamt given
const nextBtn = document.querySelector("#nextBtn")

// cashgiven in activated when you given valid billAmount (diplays)
const cashGivenDiv = document.querySelector(".cashGivenInput")
const checkBtn = document.querySelector("#checkBtn")

// this reads the cash value you entered
const cashGiven = document.querySelector("#cashGiven")
// This shows when error get activated
const errorDiv = document.querySelector(".errorMsg")


// It display noOfNotes section only after you given valid bill and cash
const changeReturnDiv = document.querySelector(".changeReturn")
const output = document.querySelector("#output")


const noOfNotes = document.querySelectorAll(".noOfNotes")

const arrayNoteAmt = [2000, 500, 100, 20, 10, 5, 1]

// Here after entering valid amount then cash section showsup
nextBtn.addEventListener('click', function(){
    hideError();
    if(Number(billAmt.value)>0){
        nextBtn.style.display = "none";
        cashGivenDiv.style.display = "block";
    }
    else{
        showError("Enter valid bill amount");
    }

})

// Here it checks, compare and validates the amount
checkBtn.addEventListener('click',function() {
    clearNoOfNotes();
    hideError();
    
    let billAmtValue = Number(billAmt.value);
    let cashGivenValue = Number(cashGiven.value);

    if(billAmtValue>0 && cashGivenValue>0){
        if(!Number.isInteger(cashGivenValue)){
            showError("Enter valid amount in cash given field");
            return;
        }
        if(billAmtValue>cashGivenValue){
            showError("Cash is less than bill, please enter right amount");
            return;
        }
        calculateNotes(billAmtValue, cashGivenValue);
    }else{
        showError("Enter valid Bill amount and Cash  to continue")
    }
})

// here is the calulation part above we mentioned as calculateNotes Function
// It distributes the Notes
function calculateNotes(bill, cash){
let returnAmt = cash-bill;

    if(returnAmt<1){
        showError("No amount should be returned");
        return;
    }
    changeReturnDiv.style.display = "block";
    for(let i = 0 ; i< arrayNoteAmt.length; i++){
        returnAmt = compare(returnAmt, arrayNoteAmt[i],i)
    }
}


function compare(remainder, noteAmt, index){
    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt)
        remainder = remainder - notes*noteAmt;
        noOfNotes[index].innerText = `${notes}`;
    }
    return remainder
}

function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}

// This is the error part-If error occurs display error, else diplsy next part 
function showError(text){
    errorDiv.style.display="block";
    errorDiv.innerText = text;
    changeReturnDiv.style.display = "none";
}
function hideError(){
    errorDiv.style.display="none"
}

// (on that day i learned lot  of things )