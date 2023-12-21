let numero = Number(prompt("Digite o Valor Que Deseja Sacar: "));
let notaCinquenta = 50;
let notaDez = 10;
let notaCinco = 5;
let notaUm = 1;

if(numero>=0){
    let quantidadeNotaCinquenta = Math.floor(numero/notaCinquenta);
    let resto = numero%notaCinquenta;

    let quantidadeNotaDez = Math.floor(resto/notaDez);
        resto%=notaDez;

    let quantidadeNotaCinco = Math.floor(resto/notaCinco);
        resto%=notaCinco;

    let quantidadeNotaUm = resto;
        alert(`Você irá reber ${quantidadeNotaCinquenta} notas de Cinquenta, ${quantidadeNotaDez} notas de dez, ${quantidadeNotaCinco} notas de cinco e ${quantidadeNotaUm} notas de um GC$`);
} else {
    alert("Você precisa digitar um número positivo!");
}

// let numero = Number(prompt("Digite o Valor Que Deseja Sacar: "));
// let notaCinquenta = 50;
// let notaDez = 10;
// let notaCinco = 5;
// let notaUm = 1;

// let quantidadeNotaCinquenta = 0;
// let quantidadeNotaDez = 0;
// let quantidadeNotaCinco = 0;
// let quantidadeNotaUm = 0;

// while (numero > 0) {
//     if (numero >= notaCinquenta) {
//         quantidadeNotaCinquenta++;
//         numero -= notaCinquenta;
//     } else if (numero >= notaDez) {
//         quantidadeNotaDez++;
//         numero -= notaDez;
//     } else if (numero >= notaCinco) {
//         quantidadeNotaCinco++;
//         numero -= notaCinco;
//     } else {
//         quantidadeNotaUm++;
//         numero -= notaUm;
//     }
// }

// if (numero <= 0) {
//     alert("Você irá receber " +
//         `${quantidadeNotaCinquenta} notas de Cinquenta, ` +
//         `${quantidadeNotaDez} notas de Dez, ` +
//         `${quantidadeNotaCinco} notas de Cinco e ` +
//         `${quantidadeNotaUm} notas de Um GC$`);
// } else {
//     alert("Você precisa digitar um número positivo!");
// }

// let numero = Number(prompt("Digite o Valor Que Deseja Sacar: "));
// let notaCinquenta = 50;
// let notaDez = 10;
// let notaCinco = 5;
// let notaUm = 1;

// let quantidadeNotaCinquenta = 0;
// let quantidadeNotaDez = 0;
// let quantidadeNotaCinco = 0;
// let quantidadeNotaUm = 0;

// for (; numero > 0;) {
//     if (numero >= notaCinquenta) {
//         quantidadeNotaCinquenta++;
//         numero -= notaCinquenta;
//     } else if (numero >= notaDez) {
//         quantidadeNotaDez++;
//         numero -= notaDez;
//     } else if (numero >= notaCinco) {
//         quantidadeNotaCinco++;
//         numero -= notaCinco;
//     } else {
//         quantidadeNotaUm++;
//         numero -= notaUm;
//     }
// }

// if (numero <= 0) {
//     alert("Você irá receber " +
//         `${quantidadeNotaCinquenta} notas de Cinquenta, ` +
//         `${quantidadeNotaDez} notas de Dez, ` +
//         `${quantidadeNotaCinco} notas de Cinco e ` +
//         `${quantidadeNotaUm} notas de Um GC$`);
// } else {
//     alert("Você precisa digitar um número positivo!");
// }