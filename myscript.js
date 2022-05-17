Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// genero un array per la sequenza

var myOutput = document.getElementById("output");



let sequence = [];

// genero un ciclo per ottenere 5 numeri randomici

addEventListener

question (5);

// while (sequence.length < 5) {
//     let ranNum = Math.floor(Math.random()*5)+1;
//     sequence.push(ranNum);
    
// }

// Le mie funzioni

function question (numGen) {

    
    while (sequence.length < numGen ) {
        let ranNum = Math.floor(Math.random()*5)+1;

        sequence.push(ranNum);
    }
    myOutput.append(sequence);
    console.log("sequenza ", sequence)
}
