function generarMatriz() {
    var numero = document.getElementById('numMatriz').value;
    var matriz = new Array();

    matriz[0] = new Array(1);
    matriz[0][0] = 1;
    matriz[1] = new Array(2);
    matriz[1][0] = 1;
    matriz [1][1] = 1;

    for (var i = 2; i < numero; i++) {
        matriz[i] = new Array(matriz[i - 1].length + 1);
        matriz[i][0] = 1;
        matriz[i][matriz[i].length - 1] = 1;

        for (var j = 1; j < matriz[i].length - 1; j++) {
            matriz[i][j] = matriz[i - 1][j - 1] + matriz[i - 1][j];
        }
    }
    for (var i = 0; i < numero; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            document.write(matriz[i][j] + " ");
        }
        document.write("<br>")
    }
}