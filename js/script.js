let height = document.querySelector('.height');
let weight = document.querySelector('.weight');

let button = document.querySelector('.bmi button');
let result = document.querySelector('.bmi .result');
let message = document.querySelector('.bmi .message');
let error = document.querySelector('.bmi .error');


button.addEventListener('click',function(){
    if(height.value == "" && weight.value == ""){
       error.innerHTML = "Enter your height & weight"
    }
    else{
       
        // = weight (lb) ÷ height2 (inches) * 703.

        let bmi =( weight.value * 2.20462) / (height.value * height.value) * 703;

        result.innerHTML = `Result:${bmi.toFixed(2)}`

    

    if (bmi < 18.5) {
        message.innerHTML = 'Underweight';
      }
     else if (bmi >= 18.5 && bmi < 24.9) {
        message.innerHTML = 'Normal weight';
      } 
    else if (bmi >= 25 && bmi < 29.9) {
        message.innerHTML = 'Overweight';
      }
    else {
        message.innerHTML = 'Obesity';
      }

    }
})
