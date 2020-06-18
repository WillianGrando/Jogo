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
        for (conty = 0; conty < 6; conty++) {
            if (tela[contx][conty] == posicao) {
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
    testex = contx - 3;
    testey = conty - 3;
    
    console.log("iniciando 1 loop");
    for (testex; testex <= 7 ; testex++) {
        if (jogadas[testex][conty] == 'R') {
            vitoria++;
            if (vitoria == 4) {
                alert("VERMELHO GANHOU!");
            }
        }else {
            console.log("loop1 "+vitoria);
            vitoria=0;
        }
    }
    console.log("iniciando 2 loop");
    for (testey; testey <= 7; testey++) {
        if (jogadas[contx][testey] == 'R') {
            vitoria++;
            if (vitoria == 4) {
                alert("VERMELHO GANHOU!");
            }
        }else {
            console.log("loop2 "+vitoria);
            vitoria=0;
        }
    }
}