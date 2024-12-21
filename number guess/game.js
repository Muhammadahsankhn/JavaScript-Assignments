let randomNumber = Math.floor(Math.random() * 10 + 1);
let userGuess = document.getElementById("input")
let output = document.getElementById("output")
let submit = document.getElementById("submitBtn")
let lifes = document.getElementById("lifes")
let again = document.getElementById("tryAgain")


let lives = 3;
lifes.textContent = `lives❤️❤️❤️`
again.disabled = true;


submit.addEventListener('click', () => {

    let userinput = Number(userGuess.value);


    if (randomNumber === userinput) {
        output.textContent = `🎉Guess correctly!, Congratulations`
        again.disabled = false;
        submit.disabled = true;
        return;
    } else {
        lives--

        if (lives == 3) {
            lifes.textContent = `lives❤️❤️❤️`
            output.textContent = `❌ incorrect guess, try again`
            again.disabled = true;


        } else if (lives == 2) {
            lifes.textContent = `lives❤️❤️`
            output.textContent = `❌ incorrect guess, try again`
            again.disabled = true
        } else if (lives == 1) {
            lifes.textContent = `lives❤️`
            output.textContent = `❌ incorrect guess, try again`
            again.disabled = true;

        } else {
            lifes.textContent = `live: 0`
            output.textContent = `😞Game over! the correct number is ${randomNumber} better luck next time.`
            again.disabled = false;
            submit.disabled = true;

        }
    }

    userGuess.value = "";
})



again.addEventListener('click', () => {
    lives = 3;
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber); 

    lifes.textContent = `Lives: ❤️❤️❤️`;
    output.textContent = "";
    userGuess.value = "";
    submit.disabled = false;

});
