//Operadores lógicos

//console.log(true && true)

// let a = 3 > 2 //true
// let b = 2 > 3 //false

// if (a == true && b == false){
//     console.log ("As duas condições são verdadeiras")
// } else {
//     console.log("AS informações não batem")
// }


// // || or / ou

// //Criar uma condição que exiba uma mensagem no console.log se a Isa faz aniversário em Dezembro ou Janeiro

// let cantora = "Isa"
// let mes = "Setembro"

// if((mes === "Dezembro") || (mes === "Janeiro")){
// console.log (`A ${cantora} faz aniversário em Dezembrou ou Janeiro`)
// }else{
// console.log(`A ${cantora} faz aniversário em ${mes}`)
// }


// let nome = "Brendon"
// let idade = 37 

// if( (idade == 36) && (nome == "Brendon")){
// console.log(`${nome} pode ir pra farra`)
// }else{
// console.log(`${nome} vai ficar em casa`)
// }

// let humano = false

// // ! Not - inverte o valor 
// console.log(humano = !false)

//----------------Laços de repetição

let x = 5;
let y = 3;

//soma
//console.log ( x = x + y) //completa
//console.log (x += y) // simplificada

//subtração
//console.log ( x = x - y) //completa
//console.log (x -= y) //simplificada

//multiplicação 
//console.log ( x = x * y) //completa
//console.log (x *= y) //simplificada

//divisão
//console.log ( x = x / y) //completa
//console.log (x /= y) //simplificada

//++ incremento
// 0+1 =1
// 1+1 =2
// 2+1 =3


// -- decremento
//5-1 =4
//4-1 =3
//3-1 =2
//2-1 =1
//1-1 =0

//Laços de repetição
// console.log (0)
// console.log (2)
// console.log (4)
// console.log (6)
// console.log (8)
// console.log (10)



//--------------------while
//loop while

//estrutura do while

// variável = valor

// while (condição){
//     tarefa
//     interação
// }

// Contar de 1 ao 12, de 2 em 2

// let contador = 2;
// while (12 >= contador) {
// console.log(contador);
// contador +=2; //COMEÇANDO DO VALOR 2, CONTE DE 2 EM 2 ATÉ CHEGAR AO 12
// }


// let contador = 0 

// while (contador < 12) {
//     contador = contador + 2
//     console.log(contador)
// }

// let contador2 = 2;
// while (12 >= contador2) {
// console.log(contador2);
// contador2 +=2;
// }

//-----for

//Estrutura do for


// for (let contador = 1; contador <= 1000; contador+= 2)

// console.log (contador)

// for (let i=1; i <=10; i+=2)
// console.log(i)


//Criar um loop que conte todos os números ímpares de  1 até 100 usando for e while

//usandor for

// for (let n1 = 1; n1 <= 100; n1 +=2){
//     console.log(n1)
// }

//usando while

let n2 = 1

while( n2 <= 100 ){
console.log(n2)
n2 += 2
}