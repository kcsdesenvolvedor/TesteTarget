/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

a) Considerar o vetor já carregado com as informações de valor de faturamento.

b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

c) Utilize o algoritmo mais veloz que puder definir. */



var faturamentosAnual = [1200, 21000, 13500, 9000, 0, 32000, 11300, 0];

var menorValor = Number.MAX_VALUE;
var maiorValor = 0;
var diasFaturamentoAcimaMedia = 0;
var qtdDiasComFaturamento = 0;
var valorFaturamentoTotal = 0;
var mediaFaturamento = 0;

//primeira passagem para buscar media, menor e maior valor
for (let i = 0; i < faturamentosAnual.length; i++) {
    if (faturamentosAnual[i] === 0) continue;

    if (faturamentosAnual[i] < menorValor)
        menorValor = faturamentosAnual[i];

    if (faturamentosAnual[i] > maiorValor)
        maiorValor = faturamentosAnual[i];

    valorFaturamentoTotal += faturamentosAnual[i];
    qtdDiasComFaturamento++;
}

mediaFaturamento = valorFaturamentoTotal / qtdDiasComFaturamento;

//segunda passagem para validar os faturamentos a cima da media
for (let i = 0; i < faturamentosAnual.length; i++) {
    if (faturamentosAnual[i] > mediaFaturamento)
        diasFaturamentoAcimaMedia++;
}

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Temos ${diasFaturamentoAcimaMedia} dias com faturamento acima da media anual`);
