
require("dotenv").config({
    path: "./.env",
}); // require for .env archive

const token = process.env.TOKEN_BD; // variable of token


// get clients fanta *Para testes*
// eslint-disable-next-line no-unused-vars
const getClients = async (req, res) => {

    const {cpf} = req.query;

    const fetchDataCliente = await fetch(
        "https://ixc.brasildigital.net.br/webservice/v1/cliente",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(token).toString("base64"),
                ixcsoft: "listar",
            },
            body: JSON.stringify({
                qtype: "cnpj_cpf",
                query: `${cpf}`,
                oper: "=",
                page: "1",
                rp: "20",
                sortname: "cliente.id",
                sortorder: "desc"
            }),
        }
    ).then((data) => data.json());
    // fetch(
    //     "https://ixc.brasildigital.net.br/webservice/v1/radusuarios",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Basic " + Buffer.from(token).toString("base64"),
    //             ixcsoft: "listar",
    //         },
    //         body: JSON.stringify({
    //             qtype: "id_cliente",
    //             query: `${id}`,
    //             oper: "=",
    //             page: "1",
    //             rp: "2",
    //             sortorder: "desc",
    //         }),
    //     }
    // )
    //     .then((data) => data.json())
    // ]);

    // const data1 = await fetchDataCliente;
    // const data2 = await fetchDataLogin;
    return res.status(200).send(fetchDataCliente);
    // console.log(data1);
    // console.log(data2);
};

module.exports = getClients;