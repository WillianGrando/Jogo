    var num1=0, num2=0, player=0;
function teste() {
//função seletor de numero

//função calculo para posição
    num1 = document.getElementById('num1').value;
    num1 = Number(num1);
    num2 = document.getElementById('num2').value;
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

//função vitoria

}
