require("dotenv").config(); // require for .env archive

const token = process.env.TOKEN_BD; // variable of token

// get clients fanta *Para testes*
const getClients = async (req, res) => {
    const fetchData = await fetch(
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
                query: "0",
                oper: ">",
                page: "1",
                rp: "2",
                sortorder: "desc",
            }),
        }
    )
        .then((data) => data.json())
        .catch((error) => console.log(error));

    return res.status(200).json(fetchData.registros);
};

module.exports = {
    getClients,
};
