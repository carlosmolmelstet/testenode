import express from 'express';

// CHAMANDO O EXPRESS
const app = express();


// CRIANDO UMA ROTA

app.get('/', (request, response) => {
    return response.json({message: "gabii"})
});



app.listen(1616, () => {
    console.log('🚀 server deu bom!!');
});