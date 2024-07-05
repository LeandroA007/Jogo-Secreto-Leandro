let ListaNum =[];
let numlimite = 10;
let Numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function ExibirMsgInial(){
exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}

ExibirMsgInial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == Numerosecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas >1 ? 'Tentativas':'Tentativa';
        let msgtentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p',msgtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > Numerosecreto){
            exibirTextoNaTela('p', 'Numero secreto é menor');
            } else{
                exibirTextoNaTela('p','Numero secreto é maior');
            }
            tentativas++;
            limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let NumEscolhido =parseInt(Math.random() * numlimite +1);
    let qtdsorte = ListaNum.length;

    if (qtdsorte == numlimite){
        ListaNum = [];
    }
    if (ListaNum.includes(NumEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        ListaNum.push(NumEscolhido);
        console.log(ListaNum);
        return NumEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}          

function reiniciarJogo(){
    Numerosecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    ExibirMsgInial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}