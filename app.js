function rolarDados(){

const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('dado').setAttribute('src', `images/dice${numeroAleatorio1}.png`);
document.getElementById('dado2').setAttribute('src', `images/dice${numeroAleatorio2}.png`)

if(numeroAleatorio1 > numeroAleatorio2){
    document.querySelector('h1').innerHTML = "Jogador 1 vencedor!"
}else if(numeroAleatorio1 === numeroAleatorio2){
    document.querySelector('h1').innerHTML = "Empate!"
}else{
    document.querySelector('h1').innerHTML = "Jogador 2 vencedor!"
}

}


