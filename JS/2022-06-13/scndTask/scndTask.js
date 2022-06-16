const calculator = {
    display: '0',
    start: null,
    process: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { display, process } = calculator;
    if (process === true) {
      calculator.display = digit;
      calculator.process = false;
    } else {
      calculator.display = display === '0' ? digit : display + digit;
    }
  }
  
  function inputDecimal(zero) {
    if (!calculator.display.includes(zero)) {
      calculator.display += zero;
    }
  }
  
  function handleOperator(nextOperator) {
    const { start, display, operator } = calculator
    const inputValue = parseFloat(display);
  
    if (operator && calculator.process)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (start == null) {
      calculator.start = inputValue;
    } else if (operator) {
      const currentValue = start || 0;
      const result = opertation[operator](currentValue, inputValue);
  
      calculator.display = Number(result);
      calculator.start = result;
    }
  
    calculator.process = true;
    calculator.operator = nextOperator;
  }
  
  const opertation = {
    '/': (start, secondOperand) => start / secondOperand,
    '*': (start, secondOperand) => start * secondOperand,
    '+': (start, secondOperand) => start + secondOperand,
    '-': (start, secondOperand) => start - secondOperand,
    '=': (start, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.display = '0';
    calculator.start = null;
    calculator.process = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display;
  }
  
  updateDisplay();
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });