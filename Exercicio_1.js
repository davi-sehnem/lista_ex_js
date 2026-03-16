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