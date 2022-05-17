Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// genero i percorsi ai miei bottoni

var myOutput = document.getElementById("output");

var btnOne = document.getElementById("red_btn")
var btnTwo = document.getElementById("blue_btn")
var btnThree = document.getElementById("green_btn")
var btnFour = document.getElementById("purple_btn")
var btnFive = document.getElementById("yellow_btn")

let startBtn = document.getElementById("start_btn")

// genero un array per la sequenza e uno per l'utente

var sequence = [];

var userSeq = [];

var guessed = [];

// creo l'evento sul bottone per iniziare il gioco

startBtn.addEventListener("click", function() {
    
    // faccio apparire la sequenza da memorizzare
    
    question (5);

    // dopo 2 secondi e mezzo la faccio sparire
    
    setTimeout(erase,2500);

    // dopo altri 4 sec faccio comparire i numeri sui pulsanti

    setTimeout(genBtn,6500,btnOne,1);
    setTimeout(genBtn,6500,btnTwo,2);
    setTimeout(genBtn,6500,btnThree,3);
    setTimeout(genBtn,6500,btnFour,4);
    setTimeout(genBtn,6500,btnFive,5);

    // ora permetto all'utente di digitare 

    setTimeout(inputNumbers,6500);

    // dopo altri 3 sec faccio uscire l'output

    setTimeout(gameCheck,10000);
    startBtn.className = "hide";
})

// una volta digitato 5 volte li faccio scomparire e genero il nuovo output

// question (5);
    
// Le mie funzioni

// genero un ciclo per ottenere 5 numeri randomici

function question (numGen) {
        
        while (sequence.length < numGen ) {
        let ranNum = Math.floor(Math.random()*5)+1;

        sequence.push(ranNum);
    }
    myOutput.append(sequence);
    console.log("sequenza ", sequence)
}

function erase () {
    myOutput.innerHTML="";
}

function genBtn (where, innerNum) {

    newBtn = document.createElement("button");

    newBtn.className = "btn";
    
    where.append(newBtn);
    
    newBtn.innerHTML=innerNum;

}

function inputNumbers () {
    btnOne.addEventListener("click", function() {
        userSeq.push(1);
        console.log("Tua seq",userSeq);
    }
    )
    btnTwo.addEventListener("click", function() {
        userSeq.push(2);
        console.log("Tua seq",userSeq);
    }
    )
    btnThree.addEventListener("click", function() {
        userSeq.push(3);
        console.log("Tua seq",userSeq);
    }
    )
    btnFour.addEventListener("click", function() {
        userSeq.push(4);
        console.log("Tua seq",userSeq);
    }
    )
    btnFive.addEventListener("click", function() {
        userSeq.push(5);
        console.log("Tua seq",userSeq);
        }
    )
}

function gameCheck() {
    if (sequence.length > userSeq.length) {
        myOutput.innerHTML="Tempo scaduto! Prova più veloce!";
    }
    else if (sequence.length < userSeq.length) {
    myOutput.innerHTML="Mi spiace, hai premuto troppo e non so che dirti!";    
    }
    else {
        for (let i = 0; i < sequence.length; i++) {
            let question = sequence[i];
            console.log ("Simon",question)
            let answer = userSeq[i]
            console.log ("Tu",answer)
            if (answer == question) {
                guessed.push(question)
            }
            else {
            }
        }
        if (guessed.length == sequence.length) {
            myOutput.innerHTML="Grande! Hai indovinato tutti i numeri!";
        }
        else if (guessed.length == 0) {
            myOutput.innerHTML="Nessuno. Mmmhhh... mi sa che stai giocando a un altro gioco!";
        }

        else if (guessed.length == 1) {
            myOutput.innerHTML=`Solo un numero :( ...
            Riprova dai! Non è così difficile!`;
        }
        
        else if (guessed.length == 4) {
            myOutput.innerHTML=`Uuuh! Quattro azzeccati: ${guessed}!
            Quasi!`;
        }
        
        else {
            myOutput.innerHTML=`Solo questi ${guessed.length} giusti: ${guessed}!
            Prova ancora!`;
        }
    }
    console.log("indovinati",guessed)
    
    // startBtn.removeEventListener("click",question);
}