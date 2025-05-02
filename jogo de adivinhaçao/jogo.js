// gera o numero secreto de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100 ) + 1;
const numeroDeTentativas = 10;
let tentativasRestantes = numeroDeTentativas;
let jogoEncerrado = false;

function chutar(){
    if (jogoEncerrado)
        return;

    const palpite = parseFloat(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

// validaçao do palpite 
    if (isNaN(palpite) || palpite < 1 || palpite > 100) 
    {
        mensagem.textContent = "digite um numero valido";
        return;

    }

    tentativasRestantes --; // conta as tentativas do jogador 

    if (palpite === numeroSecreto){
        mensagem.textContent="voce acertou!!!";
        jogoEncerrado = true;
        return;
    }else if (tentativasRestantes ===0) {
    mensagem.textContent ="voce perdeu ! O numero secreto era" + numeroSecreto + ".";
    tentativas.textContent = "Tentativas restantes: 0";
    return;
    }else if (palpite < numeroSecreto){
        mensagem.textContent = "O numero secreto e maior!";
        
    }else {
        mensagem.textContent ="O numero secreto era menor";
    
    }
    tentativas.textContent =" Tentativas restantes:" + tentativasRestantes;
    }     