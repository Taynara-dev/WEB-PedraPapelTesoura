let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const options_p = document.querySelector(".options > p");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById ("r");
const paper_div = document.getElementById ("p");
const scissors_div = document.getElementById ("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWorld(letter){
    if (letter === "r") return "Pedra".fontsize(6).fontcolor('lightgray');
    if (letter === "p") return "Papel".fontsize(6).fontcolor('lightgray');
    return "Tesoura".fontsize(6).fontcolor('lightgray');
}

function ganhar(userChoice, computerChoice){
    const smallUserWord = "Usuario: ";
    const smallCompWord = "Computador: ";
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    options_p.innerHTML = `${smallUserWord}${convertToWorld(userChoice)} ${" ganha de ".fontcolor('gray').italics()} ${smallCompWord}${convertToWorld(computerChoice)} `.fontsize(6);
    result_p.innerHTML = "Você Venceu! ".fontcolor('greenyellow');
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}


function perder(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "Usuario: ";
    const smallCompWord = "Computador: ";
    const userChoice_div = document.getElementById(userChoice);
    options_p.innerHTML = `${smallUserWord}${convertToWorld(userChoice)} ${" perde de ".fontcolor('gray').italics()} ${smallCompWord}${convertToWorld(computerChoice)} `.fontsize(6);
    result_p.innerHTML = "Você perdeu!".fontcolor('tomato');
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function empatar(userChoice, computerChoice){
    const smallUserWord = "Usuario: ";
    const smallCompWord = "Computador: ";
    const userChoice_div = document.getElementById(userChoice);
    options_p.innerHTML = `${smallUserWord}${convertToWorld(userChoice)} ${" igual a ".fontcolor('gray').italics()} ${smallCompWord}${convertToWorld(computerChoice)} `.fontsize(6);  
    result_p.innerHTML = "Empate! ".fontcolor('cornflowerblue');
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function jogo(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            ganhar(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            perder(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            empatar(userChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click', () =>   jogo("r"));
paper_div.addEventListener('click', () =>    jogo("p"));
scissors_div.addEventListener('click', ()  =>  jogo("s"));
}

main();
