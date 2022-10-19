let prompt = require('prompt-sync')()

var level = 1

function guess(level) {
    let score = 0
    let username = prompt('What is your username? ')
    let guess = prompt(`Enter your guess (1 - ${level + 1}) [-1 to quit]: `)

    while (guess != -1) {
        let gen_num = ((Math.random() * (level)) + 1).toFixed(1)
        if (parseFloat(guess).toFixed(1) === gen_num) {
            score++
            level++
            console.log('You nailed it!')
            console.log(`You are now in level ${level}`)
        } else {
            console.log('OOPS! You missed, please try again')
            console.log(`The correct number was ${gen_num}`);
        }
        guess = prompt(`Enter your guess (1 - ${level + 1}) [-1 to quit]: `)
    }
    console.log(`\nBYE BYE ${username}`)
    console.log(`Your score is ${score}`);
}

guess(level)