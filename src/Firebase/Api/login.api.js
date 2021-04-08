import firebase from './index';

export const LoginNetflixClone = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return resolve(user);
            })
            .catch((error) => {
                return reject(error);
            });
    });
}