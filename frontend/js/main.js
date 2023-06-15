//Feito apenas para testes -- OK
"use-strict";

import fetchData from "./api.js"; // lembrar de colocar o .js no arquivo

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

    form.addEventListener("submit", coletarInfos);

    //infosColetadas = [];

    async function coletarInfos(e) {
        e.preventDefault();

        const contratoInfo = form.querySelector("#contrato-cliente");
        const contanteInfo = form.querySelector("#contatante");
        const telefoneInfo = form.querySelector("#telefone");

        const dataIxc = await fetchData(contratoInfo.value);

        console.log(dataIxc);
        const infosColetadas = {
            contratoCliente: contratoInfo.value,
            contato: contanteInfo.value,
            telefone: telefoneInfo.value,
        };

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
