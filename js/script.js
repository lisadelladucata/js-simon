// creo array per i numeri randomici da 1 a 100
const randomNumb =[];

// funzione per i 5 numeri

while( randomNumb.length < 5) {
    const num = randomNumbGeneretor(1,100);
    if(!randomNumb.includes(num)){
        randomNumb.push(num);
    }
}

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function randomNumbGeneretor(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function randomNumbDisplay(){
    const numbDisplay = document.getElementById("display-numbers")
    numbDisplay.innerHTML = randomNumb.join(' ')
}

// timer
let timer;
let countdown = 30;

// funzioni per il timer

function playTimer(){
    timer = setInterval(() =>{
        countdown--;
        document.getElementById("countdown-display").innerText = countdown;

        if(countdown <= 0){
            clearInterval(timer)
            hiddenNum();
        }
    }, 1000)
}

// funzione per nascondere i numeri 

function hiddenNum(){
    document.getElementById("random-numbers").classList.add("hidden")
    document.getElementById("section-input").classList.remove("container")
    document.getElementById("section-input").style.display='block'
}

// funzione per controllare i numeri inseriti

function checkNumb(){
    const userNumb =[
        parseInt(document.getElementById('num1').value),
        parseInt(document.getElementById('num2').value),
        parseInt(document.getElementById('num3').value),
        parseInt(document.getElementById('num4').value),
        parseInt(document.getElementById('num5').value)
    ];

    const correct = userNumb.filter( num => randomNumb.includes(num));
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.innerHTML= `Hai indovinato ${correct.length} numeri: ${correct.join(',')}`
}

//avvia gioco

randomNumbGeneretor();
randomNumbDisplay();
playTimer();
