require('dotenv').config()
const axios = require('axios')

axios.get('https://desafio-endpoint-hashcode-n2.onrender.com/passo1')
    .then(response => {
        console.log('Response: ', response.data)
    })
    .catch(error => {
        conso.error('Error: ', error)
    })

axios.post('https://desafio-endpoint-hashcode-n2.onrender.com/passo2', {
        cpf: '114.803.415-33'
    })
    .then(function (response) {
        console.log('Response: ',response.data);
    })
    .catch(function (error) {
        console.log('Error: ',error.response?.data);
    });

const token = process.env.TOKEN_ACCESS

axios.get(`https://desafio-endpoint-hashcode-n2.onrender.com/passo4?cpf=114.803.415-33&token=${token}`)
    .then(response => {
        console.log('Response: ', response.data)
    })
    .catch(error => {
        console.error('Error: ', error)
    })