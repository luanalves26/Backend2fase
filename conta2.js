function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial; // Variável protegida (privada via closure)

    return {
        titular,

        depositar(valor) {
            if (valor <= 0) {
                console.log("Valor do depósito inválido.");
                return;
            }
            saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
        },

        sacar(valor) {
            if (valor <= 0) {
                console.log("Valor de saque inválido.");
                return;
            }
            if (valor > saldo) {
                console.log("Saldo insuficiente para realizar o saque.");
                return;
            }
            saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso!`);
        },

        get saldoAtual() {
            return saldo;
        }
    };
}

const contas = [
    criarConta("Alice", 3000),  criarConta("Carla", 1000)];
  //
    
contas.forEach((conta) => { 
    console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
});
