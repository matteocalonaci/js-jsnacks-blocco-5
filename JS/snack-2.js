// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const zucchineDue = [
    { peso: 50, lunghezza: 7 },
    { peso: 60, lunghezza: 8 },
    { peso: 70, lunghezza: 9 },
    { peso: 80, lunghezza: 10 },
    { peso: 100, lunghezza: 14 },
    { peso: 110, lunghezza: 15 },
    { peso: 205, lunghezza: 20 },
    { peso: 225, lunghezza: 21 },
    { peso: 375, lunghezza: 37 },
    { peso: 450, lunghezza: 35 },
]

// //FACCIO UN CICLO

let zucchineCorta = []

let zucchineLunga = []

for (let i = 0; i < zucchineDue.length; i++) {
    const zucchinaInQuestione = zucchineDue[i].lunghezza

    if (zucchinaInQuestione < 15) {
        zucchineCorta.push(zucchinaInQuestione)
        console.log("ADD a zucchine corte", zucchineCorta)
    } else {
        zucchineLunga.push(zucchinaInQuestione)
        console.log("ADD a zucchine lunghe", zucchineLunga)
    }
}
// CREO UNA FUNZIONE SOMMA GENERICA
function sommaZucchine(element) {
    let corte = 0
    for (let i = 0; i < element.length; i++) {
        corte += element[i]
    }
    console.log("Tutte insieme siamo lunghe", corte, "cm")
    return corte
}

//RICHIAMO LE FUNZIONI
sommaZucchine(zucchineCorta)
// ---> 48 cm

sommaZucchine(zucchineLunga)
// ---> 128 cm

