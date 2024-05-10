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


// VERSIONE CON CICLO CORRETTO IN CLASSE

let parola = "ciao"
let ultimoCarattere = parola.length - 1
parolaAlContrario = "";

for (let i = ultimoCarattere; i >= 0; i--) {
    let elmetto = parolaa[i]
    console.log(elmetto)

    parolaAlContrario += elmetto
}
console.log(parolaAlContrario)

// E SE IL CICLO NON FOSSE -- MA ++ ?

let reverseWord = '';

for (let i = 0; i < word.length; i++) {

    reverseWord = word.charAt(i) + reverseWord;
};
//ad ogni giro di ciclo prendi il carattere i a cui vado add il testo in reverseWord
//    c+ null --> c
//    i+c --> ic
//    a+ic --> aic
//    o+aic --> oaic

for (let i = 0; i < String.length; i++) {
    output += String[String.length - i - 1]
};

// 4 - 0 --> 4 (o)
// 4 - 1 --> 3 (a)
// 4 - 2 --> 2 (i)
// 4 - 3 --> 1 (c)


