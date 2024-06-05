// function rollNumbers(targetNumber) {
//     let currentNumber = 0;
//     const numberElement = document.getElementById('number');
//     const numberElement1 = document.getElementById('number1');
//     const numberElement2 = document.getElementById('number2');
  
//     const interval = setInterval(() => {
//       if (currentNumber < targetNumber) {
//         currentNumber++;
//         numberElement.textContent = currentNumber;
//         numberElement1.textContent = currentNumber;
//         numberElement2.textContent = currentNumber;
//       } else {
//         clearInterval(interval);
//       }
//     }, 10);
// }

// rollNumbers(100);


function rollNumbers(targetNumber) {
    let currentNumber = 0;
    const numberElement = document.getElementById('number');
  
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        numberElement.textContent = currentNumber;
      } else {
        clearInterval(interval);
      }
    }, 1);
}

rollNumbers(250);


function rollNumbers1(targetNumber) {
    let currentNumber = 0;
    const numberElement1 = document.getElementById('number1');
  
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        numberElement1.textContent = currentNumber;
      } else {
        clearInterval(interval);
      }
    }, 0.1);
}

rollNumbers1(300);


function rollNumbers2(targetNumber) {
    let currentNumber = 0;
    const numberElement2 = document.getElementById('number2');
  
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        numberElement2.textContent = currentNumber;
      } else {
        clearInterval(interval);
      }
    }, 10);
}

rollNumbers2(100);