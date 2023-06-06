
const token = '82:4d22b851ff516dc5bf776bea0b029d028bf82204380d85bfe00ccc4b5c307d47';

fetch('https://ixc.brasildigital.net.br/webservice/v1/cliente/id=28698', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados retornados pela API
    console.log(data);
  })
  .catch(error => {
    // Trate qualquer erro ocorrido durante a solicitação
    console.error(error);
  });
  
