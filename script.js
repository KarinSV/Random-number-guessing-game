const randomNumber = Math.floor(Math.random() * 10) + 1
    console.log('Random Number', randomNumber)
   
    while(true){
    let guessNumber = Number(prompt('Guess the Number between 1 and 10'));

    if (guessNumber === randomNumber){
        alert("You got it right!");
        break
    }

    else if (guessNumber > randomNumber) {
       alert ("Your guess was " + guessNumber + ". That's too high. Try Again!");
       while (guessNumber > randomNumber) {
        let guessNumber = Number(prompt('Guess the Number between 1 and 10'));
    }
    }

    else if (guessNumber < randomNumber) {
        alert("Your guess was " + guessNumber + ". That's too low. Try Again!")
    }
    }  