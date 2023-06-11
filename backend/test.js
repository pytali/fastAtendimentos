const test = async () => {
    const response = await fetch("http://127.0.0.1:3333/").then((response) => {
        return response.json();
    });

    console.log(response);
};

test();
