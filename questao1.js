/* 1) Observe o trecho de código:

int INDICE = 12, SOMA = 0, K = 1;

enquanto K < INDICE faça

{ K = K + 1; SOMA = SOMA + K;}

imprimir(SOMA);


Ao final do processamento, qual será o valor da variável SOMA? */


var INDICE = 12;
var SOMA = 0;
var K = 1;

while(K < INDICE){
    K = K + 1;
    SOMA = SOMA + K;
    imprimir(SOMA);
}

function imprimir(soma){
    console.log(soma);
}

//resultado
/* Iteração   |   K   |   Soma   | Imprimir   
      1	          2         2	      2
      2	          3         5         5
      3           4         9         9
      4           5         14        14
      5           6         20        20
      6           7         27        27
      7           8         35        35
      8           9         44        44
      9           10        54        54
      10          11        65        65
      11          12        77        77 
      
      O valor da variável SOMA ao final do processamento será 77.
      */