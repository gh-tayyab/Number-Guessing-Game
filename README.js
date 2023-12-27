# Number-Guessing-Game

for(let i=0; i<3; i++){
let number = Math.floor(Math.random()*10)+1
let game = await inquirer.prompt([
    {
        type: "input",
        name: "userguess",
        message: "guess your number"
    }
])
if(game.userguess === number){
    console.log("True guess");
}
else{
    console.log("Wrong guess");
}
}
