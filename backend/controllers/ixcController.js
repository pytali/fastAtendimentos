require("dotenv").config(); // require for .env archive

const token = process.env.TOKEN_BD; // variable of token

// get clients fanta *Para testes*
const getClients = async (req, res) => {
    const { id } = req.query;
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
                qtype: "cliente.id",
                query: `${id}`,
                oper: "=",
                page: "1",
                rp: "2",
                sortorder: "desc",
            }),
        }
    )
        .then((data) => data.json())
        .catch((error) => console.log(error));
    const fetchDataLogin = await fetch(
        "https://ixc.brasildigital.net.br/webservice/v1/radusuarios",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(token).toString("base64"),
                ixcsoft: "listar",
            },
            body: JSON.stringify({
                qtype: "id_cliente",
                query: `${id}`,
                oper: "=",
                page: "1",
                rp: "2",
                sortorder: "desc",
            }),
        }
    )
        .then((data) => data.json())
        .catch((error) => {
            return error;
        });

    const normalizeData = (
        [{ id, razao, telefone_celular, cpf_cnpj }],
        [{ online, login, senha, conexao, ip }]
    ) => {
        const newData = {
            contrato: id,
            nome: razao,
            contato_celular: telefone_celular,
            cpf_cnpj,
            logins: [
                {
                    login,
                    online,
                    senha,
                    mac_onu: conexao,
                    ip,
                },
            ],
        };
        return newData;
    };

    return res
        .status(200)
        .json(
            normalizeData(fetchDataCliente.registros, fetchDataLogin.registros)
        );
};

module.exports = {
    getClients,
};
