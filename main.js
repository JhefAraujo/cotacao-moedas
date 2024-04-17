async function cleanAndFetch(element) {
    moeda = element.innerHTML.split(" - ")[1];
    nomeMoeda = element.innerHTML.split(" - ")[0];
    data = await fetch("https://economia.awesomeapi.com.br/json/last/" + moeda + "-BRL").then(response => response.json());
    valor = data[moeda + "BRL"].bid;
    numValor = parseFloat(valor).toFixed(2);
    document.getElementById("valor").innerHTML = "R$ " + numValor;
    document.getElementById("moeda").innerHTML = nomeMoeda + " - Atual";
    element.parentElement.style.opacity = 0;
    setTimeout(() => {
        element.parentElement.style.display = "none";
        document.getElementById("dados").style.display = "flex";
        document.getElementById("dados").style.opacity = 1;
    }, 800);
}

function voltar() {
    document.getElementById("dados").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("dados").style.display = "none";
        document.getElementById("moedas").style.display = "flex";
    }, 400);
    setTimeout(() => {
        document.getElementById("moedas").style.opacity = 1;
    }, 400);
}
