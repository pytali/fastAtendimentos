
const envpath = "./.env";

const error = {true: {error: true},
    "false": { error: false}};

require("dotenv").config({
    path: envpath,
}); // require for .env archive

const token = process.env.TOKEN_BD; // variable of token


// get clients fanta *Para testes*
// eslint-disable-next-line no-unused-vars
const getClients = async (req, res) => {

    if(!token) {
        res.status(500).send({...error.true, code: 500, message: `Token nao encontrato em ${envpath}`});
        console.error(new Error("Token nao encontrado"));
        return;
    }

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
    );
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

    const DataClienteValidate = await fetchDataCliente;

    if(DataClienteValidate.status !== 200) {
        return res.status(DataClienteValidate.status).send({...error.true, code: DataClienteValidate.status,  message: "Token invalido"});

    }
    const DataClienteResponse = await DataClienteValidate.json();

    // const data1 = await fetchDataCliente;
    // const data2 = await fetchDataLogin;
    if (DataClienteResponse.total === 0){
        return res.status(404).send({...error.true, code: 505,  message: `CPF ${cpf} nao encontrado`});
    }
    return res.status(200).send(JSON.stringify({...error.false, data: DataClienteResponse.registros}));
    // console.log(data1);
    // console.log(data2);
};

module.exports = getClients;