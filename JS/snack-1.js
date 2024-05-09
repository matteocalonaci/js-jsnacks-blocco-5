// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    { varietà: "nera", peso: 50, lunghezza: 7 },
    { varietà: "tonda", peso: 60, lunghezza: 8 },
    { varietà: "trombetta", peso: 70, lunghezza: 9 },
    { varietà: "napoletana", peso: 80, lunghezza: 10 },
    { varietà: "fiorentina", peso: 100, lunghezza: 14 },
    { varietà: "romanesco", peso: 110, lunghezza: 15 },
    { varietà: "gialle", peso: 205, lunghezza: 20 },
    { varietà: "rugoso friulano", peso: 225, lunghezza: 21 },
    { varietà: "crookneck", peso: 375, lunghezza: 37 }, ,
    { varietà: "patisson", peso: 450, lunghezza: 35 },
]

//console.log(zucchine.length) --> 11

//FACCIO UN CICLO
let sommaZucchine = 0
for (let i = 0; i < zucchine.length; i++) {
    sommaZucchine += zucchine[i].peso;
    console.log(i, sommaZucchine)
}

// Cannot read properties of undefined (reading 'peso') ??????

// Soluzione a Lezione

// let sommaZucchine = 0;
// for (let i = 0; i < zucchine.length; i++) {
// 	sommaZucchine += zucchine[i].peso; ---> QUESTO FUNZIONE ED è UGUALE!
// }

