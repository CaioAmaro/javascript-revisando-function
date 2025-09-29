/* Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. 
Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. 
A regra é a seguinte:

    Até 5 km: frete fixo de R$ 5
    De 5.1 km até 20 km: R$ 0,50 por quilômetro
    Acima de 20 km: frete fixo de R$ 20

Seu desafio é escolher o tipo de função mais adequado para resolver este problema. 
Função tradicional? 
Arrow Function? 
E aí? Como vai implementar esse desafio?

Exemplo de entrada:
calcularFrete(3);

calcularFrete(12);
Saída esperada:
5
6 */

const calcularFrete = (distanciaEmKm) => {

    let precoFrete = 0

    if(distanciaEmKm > 20){
        precoFrete = 20
    }else if(distanciaEmKm > 5){
        precoFrete = parseInt(distanciaEmKm) * 0.50
    }else{
        precoFrete = 5
    }

    console.log('Preço do frete: R$', precoFrete)
}

calcularFrete(3)
calcularFrete(12)
calcularFrete(12.1)
