let inputField = document.getElementById('input');
let buttons = document.querySelectorAll('.btn');
let inputString = ""; 

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML; 

        if (buttonText === "AC") {
            
            inputString = "";
        } else if (buttonText === "=") {
            try {
            
                let expression = inputString
                    .replace(/÷/g, "/")
                    .replace(/X/g, "*");
                inputString = eval(expression);  
            } catch (err) {
                inputString = "Error"; 
            }
        } else {
            inputString += buttonText;
        }

        inputField.value = inputString;
    });
});
