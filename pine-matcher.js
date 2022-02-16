

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('got 3 digit and calling aging',pin)
        return getPin();
    }
}

function genaratPin(){
    const pin = getPin();
    
    document.getElementById('random-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const caleInput = document.getElementById('display-number');
    if (isNaN(number)) {

        if (number == 'C') {
            caleInput.value = ''; 
        }
          
      
    }
    else {
        
    const prviuseNumber = caleInput.value;
        const newNumber = prviuseNumber + number;
        caleInput.value = newNumber;
  
    } 
 })

function veryfyPin() {
    const pine = document.getElementById('display-number').value;
    const randomNumber = document.getElementById('random-pin').value;

    const succes = document.getElementById('notify-succes');
    const failError = document.getElementById('notify-fail');
    if (pine == randomNumber) {
       
        succes.style.display = 'block';
        failError.style.display = 'none';
        
    }
    else {
       
        failError.style.display = 'block'
        succes.style.display = 'none';
    }
   
    
}   