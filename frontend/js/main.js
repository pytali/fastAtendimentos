//Feito apenas para testes -- OK
const test = async () => {
    const response = await fetch("http://127.0.0.1:3333/").then((response) => {
        return response.json();
    });
    console.log(response);
};
function app() {
    const btnOpa = document.querySelector("#opcao-opa");
    const btnRamal = document.querySelector("#opcao-ramal");

    btnOpa.addEventListener("click", inserirInput);
    btnRamal.addEventListener("click", removerInput);

    function inserirInput(e) {
        e.preventDefault();

        if (!document.getElementById("protocolo-input")) {
            const inserirProtocolo = document.querySelector("#protocolo-opa");

            const protocoloInput = document.createElement("input");

            const paragrafo = document.createElement("p");

            protocoloInput.setAttribute("type", "number");
            protocoloInput.setAttribute("id", "protocolo-input");

            protocoloInput.placeholder = "Informe o protocolo";

            paragrafo.innerHTML = "Protocolo:";

            inserirProtocolo.appendChild(protocoloInput);

            inserirProtocolo.appendChild(paragrafo);
        }
    }

    function removerInput(e) {
        e.preventDefault();

        const elemento = document.querySelector("#protocolo-opa");

        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    }

    const form = document.querySelector("#infos-contato");

    form.addEventListener("submit", test());

    infosColetadas = [];

    function coletarInfos(e) {
        e.preventDefault();

        const contratoInfo = form.querySelector("#contrato-cliente");
        const contanteInfo = form.querySelector("#contatante");
        const telefoneInfo = form.querySelector("#telefone");

        infosColetadas.push({
            contratoCliente: contratoInfo.value,
            contato: contanteInfo.value,
            telefone: telefoneInfo.value,
        });

        const btnGerarAtendimento =
            document.querySelector("#gerar-atendimento");

        btnGerarAtendimento.addEventListener("click", criaAtendimento);

        function criaAtendimento(e) {
            e.preventDefault();

            const inserirInfos = document.querySelector("#atendimento-gerado");

            const infosInformadas = document.createElement("div");

            infosInformadas = infosColetadas;

            inserirInfos.appendChild(infosInformadas);
        }
    }
}

app();
