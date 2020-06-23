    var player = 0;
    var jogadas = [
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ["", "", "", "", "", ""],
        ];
    var contx, conty;
function teste() {
    //todo - seletor de numero mais bonito

    //calculo para os numeros jogados
    var num1 = document.getElementById('num1').value;
    num1 = Number(num1);
    var num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    var posicao = num1 * num2;

    //função cores do player
    if (document.getElementById(posicao).style.backgroundColor == '') {//troca a cor na posição jogada
        if (player % 2 == 0) {
        document.getElementById(posicao).style.backgroundColor = 'red';
        }else {
        document.getElementById(posicao).style.backgroundColor = 'blue';
        }
        player++;
    }

    //totest - função vitoria "analisar as 8 direções (nos 4 sentidos) a partir da ultima peça jogada."(horizontal e vertical * falta diagonais)
    var tela = [//variavel para o progama "ler" a tela
        [ "1",  "2",  "3",  "4",  "5",  "6"],
        [ "7",  "8", " 9", "10", "12", "14"],
        ["15", "16", "18", "20", "21", "24"],
        ["25", "27", "28", "30", "32", "35"],
        ["36", "40", "42", "45", "48", "49"],
        ["54", "56", "63", "64", "72", "81"],
        ];    
    for (contx = 0; contx < 6; contx++) {//loop para ler a jogada e o jogador
        for (conty = 0; conty < 6; conty++) {
            if (tela[contx][conty] == posicao) {
                if (player % 2 == 0){
                    jogadas[contx][conty] = 'B';
                }else{
                    jogadas[contx][conty] = 'R';
                }
                return true;
            }
        }
    }

}

function condicaoVitoria() {
    var vitoria = 0;//função pra vitorias na horizontal
    for (contx = 0; contx < 6; contx++) {
        for (conty = 0; conty < 6; conty++) {
            if (jogadas[contx][conty] == 'R') {
                vitoria++;
                if (vitoria == 4) {
                    alert("VERMELHO GANHOU!");
                }
            }else {
                vitoria=0;
            }
        }
        console.log("testando loop1!");
    }
    var vitoria = 0;
    for (contx = 0; contx < 6; contx++) {
        for (conty = 0; conty < 6; conty++) {
            if (jogadas[contx][conty] == 'B') {
                vitoria++;
                if (vitoria == 4) {
                    alert("AZUL GANHOU!");
                }
            }else {
                vitoria=0;
            }
        }
        console.log("testando loop3!");
    }

    var vitoria = 0;//função pra vitorias na vertial
    for (conty = 0; conty < 6; conty++) {
        for (contx = 0; contx < 6; contx++) {
            if (jogadas[contx][conty] == 'R') {
                vitoria++;
                if (vitoria == 4) {
                    alert("VERMELHO GANHOU!");
                }
            }else {
                vitoria=0;
            }
        }
        console.log("testando loop2!");
    }
    var vitoria = 0;
    for (conty = 0; conty < 6; conty++) {
        for (contx = 0; contx < 6; contx++) {
            if (jogadas[contx][conty] == 'B') {
                vitoria++;
                if (vitoria == 4) {
                    alert("AZUL GANHOU!");
                }
            }else {
                vitoria=0;
            }
        }
    }
    console.log("testando loop4!");
}