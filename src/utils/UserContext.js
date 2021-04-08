import React, { createContext } from 'react';

const user = {
    email: '',
    password: '',
    uid: '',
    refreshToken: '',
    profile: 'https://firebasestorage.googleapis.com/v0/b/netflix-clone-b5bbf.appspot.com/o/newuser%2Favatar-p.svg?alt=media&token=06d68980-e845-4731-a54e-448d5d26ecff',
    idr: '',
    plain: '',
    payment: {
        firstName: '',
        lastName: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: ''
    }
}

const UserContext = createContext();

export {
    user, UserContext
}