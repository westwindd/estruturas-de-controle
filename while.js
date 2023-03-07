function getInteiroAleatorio(max, min){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
while(opcao != -1){
    opcao = getInteiroAleatorio(10, -1)
    console.log(`A opção escolhida foi: ${opcao}`);
}
    console.log('Até a próxima')
