// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
console.log("ciao")

let arrayUno = [1, 2, 3]
let arrayDue = ["a", "b", "c"]
let arrayTre = []
function pusha() {
    for (let i = 0; i < arrayUno.length && arrayDue.length; i++) {
        let elementiUno = arrayUno[i]
        let elementiDue = arrayDue[i]
        arrayTre.push(elementiUno, elementiDue)
        console.log(arrayTre)
    }
}

pusha()

//NON VA

// let array1 = [1, 2, 3]
// let array2 = ["a", "b", "c"]
// let array3 = []

// function joint(array1, array2, array3) {
//     let i = 0
//     while (i < array1.length && i < array2.length) {
//         array3.push(array1[i])
//         array3.push(array2[i])
//         i++
//     }

//     if (array1.length > array2.length) {
//         while (i < array1.length) {
//             array3.push(array1[i])
//             i++
//         }
//     }
//     else if (array2.length > array1.length) {
//         while (i < array2.length) {
//             array3.push(array2[i])
//             i++
//         }
//     }
//     console.log("altra soluzione", array3)
// }

// joint()

//SE GLI ARRY HANNO DIVERSE LUNGHEZZE?
const primo = ["a", "b", "c", "d", "e"]
const secondo = [1, 2, 3, 4, 5, 6, 7, 8]

const risultato = []
//di base consideriamo primo > secondo
let limiteCiclo = primo.length

//se fosse viceversa il valre di limiteCiclo sarà secondo.length
if (primo.length > secondo.length) {
    let limiteCiclo = secondo.length
}

//una volta constatato quale sia limiteCiclo
// iniziamo un ciclo

for (let i = 0; i < limiteCiclo; i++) {
    console.log(primo[i])
    console.log(secondo[i])

    risultato.push(primo[i], secondo[i])

}
console.log("sono il risultato", risultato)


//FUNZIONE COM 2 ARGOMENTI
// ARRAY1 E ARRAY2 IN ARRAY3

function mischia(primo, secondo) {
    const risultato = []
    if (primo.length > secondo.length) {
        let limiteCiclo = secondo.length
    }

    //una volta constatato quale sia limiteCiclo
    // iniziamo un ciclo

    for (let i = 0; i < limiteCiclo; i++) {
        console.log(primo[i])
        console.log(secondo[i])

        risultato.push(primo[i], secondo[i])

    }
    // console.log("sono il risultato", risultato)
    return risultato

}

let arrayPazzo = mischia(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5, 6, 7, 8])
console.log("perchè io valgo:", arrayPazzo)