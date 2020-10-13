
var A=new Array(3);
var B=new Array(3);
var C=new Array(3);
function multiMatriz()
{
    for(i=1;i<=3;i++){
        A[i]=[0,0,0,0];B[i]= [0,0,0,0];C[i]= [0,0,0,0]
        for(j=1;j<=3;j++){
            A[i][j]=parseFloat(document.primeraMatriz[3*i+j-4].value)
            B[i][j]=parseFloat(document.segundaMatriz[3*i+j-4].value)
        }
    }
    for(i=1;i<=3;i++){
        for(j=1;j<=3;j++){
            C[i][j]=0
            for(n=1;n<=3;n++){C[i][j]=C[i][j]+A[i][n]*B[n][j]
            }
        document.resulMatriz[3*i+j-4].value=C[i][j]
        }
    }
}
