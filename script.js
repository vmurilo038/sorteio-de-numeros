function sortear() {

    let minimo = Number(document.getElementById("minimo").value);
    let maximo = Number(document.getElementById("maximo").value);

    if (document.getElementById("minimo").value === "" ||
        document.getElementById("maximo").value === "") {

        alert("Digite o número mínimo e máximo!");
        return;
    }

    if (!Number.isInteger(minimo) || !Number.isInteger(maximo)) {

        alert("Digite apenas números inteiros!");
        return;
    }

    if (minimo > maximo) {

        alert("O número mínimo deve ser menor que o máximo!");
        return;
    }

    if (minimo <= 0) {

        alert("O número mínimo deve ser positivo!");
        return;
    }

    let numeroSorteado = Math.floor(
        Math.random() * (maximo - minimo + 1)
    ) + minimo;

    document.getElementById("numero").textContent = numeroSorteado;
}