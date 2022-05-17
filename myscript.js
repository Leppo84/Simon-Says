Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero un array per la sequenza

var myOutput = document.getElementById("output");

let startBtn = document.getElementById("start_btn")

let sequence = [];

// creo l'evento sul bottone per iniziare il gioco

startBtn.addEventListener("click", function() {
    
    // faccio apparire la sequenza da memorizzare
    
    question (5);

    // dopo 5 secondi la faccio sparire
    
    setTimeout(erase,5000);

    // dopo 20 sec faccio comparire i pulsanti

    // una volta digitato 5 volte li faccio scomparire e genero il nuovo output

})

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
