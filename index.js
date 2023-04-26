import express from 'express';
import admin from 'firebase-admin'

const app = express();

admin.initializeApp({
  credential: admin.credential.cert('serviceAccountKey.json')
});

// // REST API http://api.controle-de-gastos.com/transactions

// // GET      http://api.controle-de-gastos.com/transactions
app.get('/transactions', (request, response) => {
    console.log('GET transactions');
    admin.firestore()
        .collection('transactions')
        .get()
        .then(snapshot => {
            const transactions = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }))
            response.json(transactions);
        })
})

// //GET       http://api.controle-de-gastos.com/transactions/:id
// //POST      http://api.controle-de-gastos.com/transactions
// //PUT       http://api.controle-de-gastos.com/transactions/:id
// //DELETE    http://api.controle-de-gastos.com/transactions

app.listen(3000, () => console.log('API rest iniciada em http://localhost:3000'));
