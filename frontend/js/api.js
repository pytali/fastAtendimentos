"use-strict";

// get data from api
const fetchData = async (id_cliente) => {
    const data = await fetch(`http://localhost:3333/?id=${id_cliente}`);
    const dataJson = await data.json();
    return dataJson;
};
export default fetchData;
