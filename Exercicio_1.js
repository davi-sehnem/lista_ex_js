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

let vetor = [4];
let aux;

    for (let i = 0; i <4; i++){

        vetor[i] = parseInt(prompt("Insira o valor: " + i));
    }

    for (i=0; i<4; i++){

        for (let j=1; j<4;j++){

           if(vetor[j] < vetor[j+1]){
            aux = vetor[j];
            vetor[j] = vetor[j+1];
            vetor[j+1] = aux;
           } 

        }

    }
    alert("Ordenados em forma decrescente: " + vetor[1] + "; " + vetor[2] + "; " + vetor[3] + "; " + vetor[4]);
}