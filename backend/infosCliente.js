// require("dotenv").config({ path: "../.env" });

//Token migrado para arquivo .env

const apiIXC = () =>
    fetch("https://ixc.brasildigital.net.br/webservice/v1/cliente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + Buffer.from(token).toString("base64"),
            ixcsoft: "listar",
        },
        body: JSON.stringify({
            qtype: "cliente.id",
            query: "0",
            oper: ">",
            page: "1",
            rp: "2",
            sortorder: "desc",
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Faça algo com os dados retornados pela API
            console.log(data);
        })
        .catch((error) => {
            // Trate qualquer erro ocorrido durante a solicitação
            console.error(error);
        });
