let numeros = [10 , 20 , 30 , 40, 50]
console.log(numeros[2])

let frutas = ["maça", "Banana", "Morango"]


//interando sobre os elementos do array
frutas.forEach((fruta, index) =>{
    console.log(`${index}: ${fruta}`);
});


//Adicionando elementos
frutas.push("Uva")
frutas.push("Melão")

console.log(frutas)

//Removendo elementos

frutas.pop();
frutas.shift();
frutas.splice(2, 1)

console.log(frutas)

//

let mapa = new Map()
mapa.set("nome", "Joana")
mapa.set( 42, "Idade")

//Acessaando valores
console.log(mapa.get("nome"))
console.log(mapa.get(42))


