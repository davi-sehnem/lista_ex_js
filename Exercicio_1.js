function Exercicio_1(){
    let soma=0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar):"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, digite um número válido.");
        }

        continuar = confirm("Deseja adicionar mais número?");
    }

    alert("A soma dos número é: " + soma);
}

somarNumeros();

function Exercicio_2(){
   
    for(let i = 10; i>=0;i--){
        alert("Lançamento em: " + i);
    }
    alert("Lançamento realizado!");
}

function Exercicio_3() {

let gasto = 0;
let ganho = 0;
let saldo = 0;


for(let i = 1; i <= 12; i++){
    gasto[i] += parseFloat(prompt("Informe o gasto bruto do mes: " + i))
    ganho[i] += parseFloat(prompt("Informe o ganho bruto do mes: " + i))
}
saldo=bruto-gasto

alert("O saldo financeiro aunal é de: R%" + saldo);
alert("O ganho bruto anual foi de: R%" + bruto);
alert("O gasto bruto anual foi de: R%" + gasto);

}

function Exercicio_4() {

let n = [4];
let aux;

    for (let i = 0; i <4; i++){

        n[i] = parseInt(prompt("Insira o valor: " + i));
    }

    for (i=0; i<4; i++){

        for (let j=1; j<4;j++){

           if(n[j] < n[j+1]){
            aux = n[j];
            n[j] = n[j+1];
            n[j+1] = aux;
           } 

        }

    }
    alert("Ordenados em forma decrescente: " + vetor[1] + "; " + vetor[2] + "; " + vetor[3] + "; " + vetor[4]);
}

function Exercicio_5() {

let n;

n = prompt("Insira um número inteiro:")

if(n %2 == 0){
    alert("O número é par.")
} else {
    alert("O núemero é impar.")
}
}

function Exercicio_6(){

let letra;

letra = prompt("Informe uma letra");

if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    alert("A letra é uma Vogal.");
} else {
    alert("A letra é uma consoante.");
}

}

function Exercicio_7() {

let sabor = prompt("Escolha um sabor de picole: \nA-Chocolate \nB-Morango \nC-Creme \nD-Manga \nE-Melancia \nF-Vanilla ice \nG-Céu Azul \nH-Brownie \nI-Hawaiano")

if(sabor === 'A'){
    alert("Sabor Choloate: R$1,50")
    return;
} 
if(sabor === 'B'){
    alert("Sabor Morango: R$2,50")
    return;
} 
if(sabor === 'C'){
    alert("Sabor Creme: R$2,50")
    return;
} 
if(sabor === 'D'){
    alert("Sabor Manga: R$3,20")
    return;
} 
if(sabor === 'E'){
    alert("Sabor Melancia: R$3,40")
    return;
} 
if(sabor === 'F'){
    alert("Sabor Vanilla Ice: R$3,00")
    return;
} 
if(sabor === 'G'){
    alert("Sabor Céu Azul: R$3,60")
    return;
} 
if(sabor === 'H'){
    alert("Sabor Brownie: R$4,00")
    return;
} 
if(sabor === 'I'){
    alert("Sabor Hawaiano: R$5,00")
    return;
} 

}

function Exercicio_8() {

let n1;
let n2;
let diferenca;
let dobro;
let multiplicacao;

n1= parseFloat(prompt("Inira o 1° valor: "))
n2= parseFloat(prompt("Inira o 2° valor: "))

diferenca = (n1 - n2);

dobro = (n1 * 2) + (n2 * 3);

multiplicacao = (n1 * n2);

alert("A diferença entre eles é: " + diferenca);
alert("O dobro da primeira variável somado ao triplo da segunda: " + dobro);
alert("A multiplicação das variaveis: " + multiplicacao);

}

function Exercicio_9() {

let n1 = Math.ceil(Math.random() * 10);
let n2 = Math.ceil(Math.random() * 10);

if (n1 > n2){
    alert(n1 + " " + n2);
} else {
    alert(n2 + " " + n1);
}

}

function Exercicio_10(){

let nome=0;
let salario=0;
let inss=0;

nome = prompt("Nome do funcionário: ");
salario = prompt("Salário Bruto: ");

inss += salario*0.08;

alert("Nome: " + nome);
alert("Salário Bruto: R$" + salario);
alert("Valor do desconto INSS: " + inss);
alert("Salário Líquido: R$" + (salario-inss));

}

function Exercicio_11(){

let nome=0;
let salario=0;
let inss=0;

nome = prompt("Nome do funcionário: ");
salario = prompt("Salário Bruto: ");

if(salario < 1000){
    inss = salario*0.08;
} else if(salario >= 1000 || salario <= 1500){
    inss = salario*0.085;
} else if(salario >= 1500){
    inss = salario*0.09;
}

alert("Nome: " + nome);
alert("Salário Bruto: R$" + salario);
alert("Valor do desconto INSS: " + inss);
alert("Salário Líquido: R$" + (salario-inss));

}