function Exercicio_2(){

let continuar = true;

continuar = confirm("O lançamento do foguete vai começar! Está pronto?")

if (continuar == false){
    return;
} else {
    for(let i = 10; i >= 10; i--){
        alert("O lançamento vai começar em: " + i);
    }
}
    alert("Lançamento realizado!")
}