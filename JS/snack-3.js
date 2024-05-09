// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)


//FUNZIONE ANONIMA GIRATA
// const parola = 'ciao';


// function reverse() {
//     let parolaDivisa = parola.split('');
//     parolaGirata = parolaDivisa.reverse();
//     console.log('ti ho girata maledetta', parolaGirata);

// }
// reverse()


//FUNZIONE CON ARGOMENTO GIRATA

function girata(element) {
    let parola = element
    let parolaDivisa = parola.split('');
    let parolaRovesciata = parolaDivisa.reverse();
    return parolaRovesciata
}

let parolaRovesciata = girata("Genoveffo")
console.log('ti ho girata maledetta', parolaRovesciata);
