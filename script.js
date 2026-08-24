function calcular() {
    const num1 = parseFloat(
        document.getElementById('num1').value
    );

    const num2 = parseFloat(
        document.getElementById('num2').value
    );

    const operacao =
        document.getElementById('operacao').value;

    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML =
            "Por favor, digite números válidos.";

        return;
    }

    switch (operacao) {

        case 'soma':
            resultado = num1 + num2;
            mensagem =
                `A soma de ${num1} e ${num2} é = ${resultado}`;
            break;

        case 'subtracao':
            resultado = num1 - num2;
            mensagem =
                `A diferença entre ${num1} e ${num2} é = ${resultado}`;
            break;

        case 'multiplicacao':
            resultado = num1 * num2;
            mensagem =
                `O produto de ${num1} vezes ${num2} é = ${resultado}`;
            break;

        case 'divisao':
            if (num2 == 0) {
                mensagem = "Não é possível divisão por zero";
            } else {
                resultado = (num1 / num2).toFixed(2);
                mensagem =
                    `A divisão de ${num1} por ${num2} é = ${resultado}`;
            }
            break;

        case 'resto':
            if (num2 == 0) {
                mensagem = "Não é possível divisão por zero";
            } else {
                resultado = num1 % num2;
                mensagem =
                    `O resto da divisão de ${num1} por ${num2} é = ${resultado}`;
            }
            break;

        default:
            mensagem = "Não vale essa opção";
    }

    document.getElementById('resultado').innerHTML = `
        <strong>Resultado:</strong> ${resultado}
        <br><br>
        <em>${mensagem}</em>
    `;
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
