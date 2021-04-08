import React, { useEffect, useState } from 'react';

// component
import NavbarSignUp from '../../components/NavbarRegist';

// router link
import { Link as RouteLink, useHistory } from 'react-router-dom';

// firebase
import firebase from '../../Firebase/Api';

export default function Index() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(
        () => {
            const userEmail = getLocalSlorageInfo();
            setEmail(userEmail.email);
        }, [email]
    )

    const getLocalSlorageInfo = () => {
        const userStorageInfoStr = localStorage.getItem('userStorageInfo');
        const userStorageInfo = JSON.parse(userStorageInfoStr);
        return userStorageInfo;
    }

    const handleButtonContinue = () => {
        try {
            if (password != '') {
                if (password.length > 7) {
                    const userStorageInfo = getLocalSlorageInfo();
                    userStorageInfo.password = password;
                    localStorage.setItem('userStorageInfo', JSON.stringify(userStorageInfo));
                    history.push('/sign-up-stap-2');
                } else {
                    alert('password min 7 caracters');
                }
            } else {
                alert('password required');
            }
        } catch (error) {
            console.log('error api registrasi :', error);
        }
    }

    return (
        <>
            <NavbarSignUp link="sing-in" title="Sing In" />
            <div className="xl:w-5/12 lg:w-7/12 md:w-9/12 mx-auto py-10 px-5">
                <div className="text-black text-lg font-normal">
                    STEP
                    <span className="font-bold mx-2">1</span>
                    OF
                    <span className="font-bold mx-2">3</span>
                </div>
                <div className="mt-3 text-black xs:text-3xl sm:text-3xl md:text-5xl font-bold">
                    Welcome back! <br /> Joining Netflix is easy.
                </div>
                <div className="mt-3 text-black font-normal xs:text-2xl sm:text-2xl md:text-3xl">
                    Enter your password and you ll be watching in no time.
                </div>
                <div className="mt-3 text-black xs:text-2xl sm:text-2xl md:text-3xl">
                    <div className="font-normal">Email</div>
                    <div className="font-bold">{email}</div>
                </div>
                <div className="mt-4">
                    <div className="h-20 w-full">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={evt => setPassword(evt.target.value)}
                            className="ring-1 ring-gray-500 w-full h-full p-4 text-lg" />
                    </div>
                </div>
                <div className="mt-5 text-blue-600 text-2xl">
                    <RouteLink to="#" >Forget your Password ?</RouteLink>
                </div>
                <div className="mt-4 text-white text-3xl h-20 w-full">
                    <button
                        onClick={handleButtonContinue}
                        className="h-full w-full bg-red-600 font-bold rounded-lg border-none focus:outline-none">Continue</button>
                </div>
            </div>
        </>
    );
}
