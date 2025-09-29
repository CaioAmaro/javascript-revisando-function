/* Imagine que você está criando um sistema para um e-commerce que vende livros.
Toda vez que o cliente aplica um cupom de desconto, 
o sistema precisa calcular quanto ele vai pagar com base no valor 
original e na porcentagem de desconto.

Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:

    o preço original do produto,
    a porcentagem de desconto (com um valor padrão de 10%).

Exemplo de entrada:
calcularDesconto(100, 20);

Saída esperada:
80 */

function calcularDesconto(preco, descontoEmPorcentagem){
    descontoEmPorcentagem /= 100
    descontoEmReais = preco * descontoEmPorcentagem

    return preco - descontoEmReais
}

console.log(calcularDesconto(100, 20))