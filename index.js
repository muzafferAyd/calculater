class Calculator{
    constructor(prevOpreand, currentOperand){
        this.prevOpreandElement = prevOpreand;
        this.currentOperandElement = currentOperand;
    }

    clear(){

    }

    delete(){

    }

    appendNumber(){

    }

    chooseOperation(){

    }

    compute(){

    }

    getDisplayNumber(){

    }

    updateDisplay(){

    }
    
}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



numberButtons.forEach((button)=>{
    button.addEventListener("click" , function(){
        console.log(button.innerText);
    })
})