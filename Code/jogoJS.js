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

    //função calculo para posição
    var num1 = document.getElementById('num1').value;
    num1 = Number(num1);
    var num2 = document.getElementById('num2').value;
    num2 = Number(num2);
    var posicao = num1 * num2;

    //função cores do player
    if (document.getElementById(posicao).style.backgroundColor == '') {//verificar cores
        if (player % 2 == 0) {
        document.getElementById(posicao).style.backgroundColor = 'red';
        }else {
        document.getElementById(posicao).style.backgroundColor = 'blue';
        }
        player++;
    }

    //totest - função vitoria "analisar as 8 direções (nos 4 sentidos) a partir da ultima peça jogada." (apenas horizontal)
    var tela = [
        [ "1",  "2",  "3",  "4",  "5",  "6"],
        [ "7",  "8", " 9", "10", "12", "14"],
        ["15", "16", "18", "20", "21", "24"],
        ["25", "27", "28", "30", "32", "35"],
        ["36", "40", "42", "45", "48", "49"],
        ["54", "56", "63", "64", "72", "81"],
        ];    
    for (contx = 0; contx < 6; contx++) {
        console.log("testandoX");//apagar quando terminar
        for (conty = 0; conty < 6; conty++) {
            console.log("testandoY");//apagar quando terminar
            if (tela[contx][conty] == posicao) {
                console.log("X = "+contx+" Y = "+conty);//apagar quando terminar
                if (player % 2 == 0){//informação "invertida" por causa do player++ anterior
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
    //vitoria vermelha
    var vitoria = 0;
    for (contx = 0; contx <= 6; contx++) {
        for (conty = 0; conty <= 6; conty++) {
            if (jogadas[contx][conty] == 'R') {
                vitoria++;
                if (vitoria == 4) {
                    alert("VERMELHO GANHOU!");
                }
            }else {
                vitoria=0;
            }
        }
    }
    //vitoria azul
    var vitoria = 0;
    for (contx = 0; contx <= 6; contx++) {
        for (conty = 0; conty <= 6; conty++) {
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
}