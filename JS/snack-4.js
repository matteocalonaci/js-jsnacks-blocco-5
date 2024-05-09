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

