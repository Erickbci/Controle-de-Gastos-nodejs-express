import express from 'express';

const app = express();

// REST API http://api.controle-de-gastos.com/transactions

// GET      http://api.controle-de-gastos.com/transactions
app.get('/transactions', (requeste, response) => {
    console.log('GET transactions');
    response.json([{id: 1}]);
})

//GET       http://api.controle-de-gastos.com/transactions/:id
//POST      http://api.controle-de-gastos.com/transactions
//PUT       http://api.controle-de-gastos.com/transactions/:id
//DELETE    http://api.controle-de-gastos.com/transactions

app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'));