import admin from 'firebase-admin';

//Acessa o banco de dados

export class TransactionRepository {

    findByUserUid(uid) {
        return admin.firestore()
            .collection('transactions')
            .where('user.uid', '==', uid)
            .orderBy('date', 'desc')
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id
                }))
            })
    }
}