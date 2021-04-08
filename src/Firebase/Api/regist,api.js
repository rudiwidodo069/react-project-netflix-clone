import firebase from './index';

export const createNewUsers = data => {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                return resolve(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                return reject(errorMessage);
            });
    });
}