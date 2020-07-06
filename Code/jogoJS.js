let player = 0,
    jogadaX,
    jogadaY,
    posiX,
    posiY,
    num1,
    num2,
    posicao,
    vitoria;

//variavel para o progama "ler" as jogadas
var jogadas = [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
    ];
//variavel para o progama "ler" a tela
var tela = [
        [ "1",  "2",  "3",  "4",  "5",  "6"],
        [ "7",  "8", " 9", "10", "12", "14"],
        ["15", "16", "18", "20", "21", "24"],
        ["25", "27", "28", "30", "32", "35"],
        ["36", "40", "42", "45", "48", "49"],
        ["54", "56", "63", "64", "72", "81"],
    ];

function jogada() {
    //calculo para os numeros jogados
    let num1 = document.getElementById('num1').value;
    num1 = Number(num1);
    let num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    let posicao = num1 * num2;

    //função cores do player
    if (document.getElementById(posicao).style.backgroundColor == '') {//troca a cor na posição jogada
        if (player % 2 == 0) {
            document.getElementById(posicao).style.backgroundColor = 'red';
        }else {
            document.getElementById(posicao).style.backgroundColor = 'blue';
        }
        player++;
    }
    
    //loop para ler a jogada e o jogador
    for (posiX = 0; posiX < 6; posiX++) {
        for (posiY = 0; posiY < 6; posiY++) {
            if (tela[posiX][posiY] == posicao) {  
                if (player % 2 == 0){
                    jogadas[posiX][posiY] = 'B';
                }else{
                    jogadas[posiX][posiY] = 'R';
                }
                return true;
            }
        }
    }
}

function condicaoVitoria() {
    //função pra vitorias na vertical
    var vitoria = 0;
    console.log("testado vertical Vermelho");
    for (var jogodaX = 0; jogodaX < 6; jogodaX++) {//vertical
        if (jogadas[jogodaX][posiY] == 'R') {
            vitoria++;
            if (vitoria == 4) {
                alert("VERMELHO GANHOU!");
            }
        }else {
            vitoria = 0;
        }
    }
    vitoria = 0;

    console.log("testado horizontal vermelho");
    for (var jogadaY = 0; jogadaY < 6; jogadaY++) {//horizontal
        if (jogadas[posiX][jogadaY] == 'R') {
            vitoria++;
            if (vitoria == 4) {
                alert("VERMELHO GANHOU!");
            }
        }else {
            vitoria = 0;
        }
    }
    vitoria = 0;

    console.log("testado vertical azul");
    for (var jogodaX = 0; jogodaX < 6; jogodaX++) {//vertical
        if (jogadas[jogodaX][posiY] == 'B') {
            vitoria++;
            if (vitoria == 4) {
                alert("AZUL GANHOU!");
            }
        }else {
            vitoria = 0;
        }
    }
    vitoria = 0;

    console.log("testado horizontal azul");
    for (var jogadaY = 0; jogadaY < 6; jogadaY++) {//horizontal
        if (jogadas[posiX][jogadaY] == 'B') {
            vitoria++;
            if (vitoria == 4) {
                alert("AZUL GANHOU!");
            }
        }else {
            vitoria = 0;
        }
    }
    vitoria = 0;

    /*//printa no console o array das jogadas - historico de jogadas - debugger
    for (posiX = 0; posiX < 6; posiX++) {
        for (posiY = 0; posiY < 6; posiY++) {
            console.log(jogadas[posiX][posiY])
        }
    }*/
}

function telaInicial() {

    
}