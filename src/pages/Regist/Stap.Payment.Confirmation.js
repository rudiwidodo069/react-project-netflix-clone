import React, { useEffect, useState } from 'react';

// router link
import { Link as RouterLink, useHistory } from 'react-router-dom';

// firebase regist api
import { createNewUsers } from '../../Firebase/Api/regist,api';

// component
import NavbarRegist from '../../components/NavbarRegist';
import Loading from '../../components/Loading';

// static icons
import icon1 from '../../assets/icons/visa-v3.svg';
import icon2 from '../../assets/icons/mastercard-v2.svg';
import icon3 from '../../assets/icons/amex-v2.svg';

export default function Index() {
    const history = useHistory();
    const [paymentInfo, setPaymentInfo] = useState({
        firstName: '',
        lastName: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: ''
    });
    const [userStorage, setUserStorage] = useState({});
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const userStorageInfo = localStorage.getItem('userStorageInfo');
            const parseUserStorage = JSON.parse(userStorageInfo);
            setUserStorage(parseUserStorage);
        }, []
    )

    const changeStatePaymentInfo = evt => {
        setPaymentInfo({
            ...paymentInfo,
            [evt.target.name]: [evt.target.value]
        })
    }

    const handleButtonStartMember = async () => {
        userStorage.payment.firstName = paymentInfo.firstName;
        userStorage.payment.lastName = paymentInfo.lastName;
        userStorage.payment.cardNumber = paymentInfo.cardNumber;
        userStorage.payment.expirationDate = paymentInfo.expirationDate;
        userStorage.payment.securityCode = paymentInfo.securityCode;
        setLoading(true);
        const result = await createNewUsers(userStorage);
        if (result) {
            setLoading(false);
            localStorage.setItem('userStorageInfo', JSON.stringify(userStorage));
            history.push('/sign-in');
        } else {
            setLoading(false);
        }
    }

    const handleChangePlain = () => {
        history.push('/sign-up-stap-3');
    }

    return (
        <div>
            <NavbarRegist link="/" title="Sign Out" />
            <div className="xs:w-full sm:w-8/12 md:w-6/12 lg:w-4/12 || mx-auto p-5">
                <Stap />
                <div className="xs:text-3xl md:text-4xl xl:text-5xl || text-black font-bold my-2">
                    Set up your credit or debit card.
                </div>
                <div className="flex my-4">
                    <img src={icon1} alt="react-nexflix-clone-icons" width="8%" height="8%" className="mx-1" />
                    <img src={icon2} alt="react-nexflix-clone-icons" width="8%" height="8%" className="mx-1" />
                    <img src={icon3} alt="react-nexflix-clone-icons" width="8%" height="8%" className="mx-1" />
                </div>
                <div className="my-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={paymentInfo.firstName}
                        onChange={evt => changeStatePaymentInfo(evt)}
                        className="p-4 text-xl w-full ring-1 ring-gray-500" />
                </div>
                <div className="my-4">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={paymentInfo.lastName}
                        onChange={evt => changeStatePaymentInfo(evt)}
                        className="p-4 text-xl w-full ring-1 ring-gray-500" />
                </div>
                <div className="my-4">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentInfo.cardNumber}
                        onChange={evt => changeStatePaymentInfo(evt)}
                        className="p-4 text-xl w-full ring-1 ring-gray-500" />
                </div>
                <div className="my-4">
                    <input
                        type="text"
                        name="expirationDate"
                        placeholder="Expiration Date (MM/YY)"
                        value={paymentInfo.expirationDate}
                        onChange={evt => changeStatePaymentInfo(evt)}
                        className="p-4 text-xl w-full ring-1 ring-gray-500" />
                </div>
                <div className="my-4 relative">
                    <input
                        type="text"
                        name="securityCode"
                        placeholder="Security Code (CVV)"
                        value={paymentInfo.securityCode}
                        onChange={evt => changeStatePaymentInfo(evt)}
                        className="p-4 text-xl w-full ring-1 ring-gray-500" />
                    <i className="bi bi-question-circle absolute top-2 right-5 text-4xl font-bold text-gray-400"></i>
                </div>
                <div className="w-full h-20 p-5 bg-gray-200 flex justify-between items-center rounded-lg">
                    <div className="text-black text-xl">
                        <div className="font-bold">{userStorage.idr}</div>
                        <div className="font-normal">{userStorage.plain}</div>
                    </div>
                    <div
                        onClick={handleChangePlain}
                        className="text-xl font-bold text-blue-600 cursor-pointer">
                        Change
                    </div>
                </div>
                <div className="w-full h-20 text-base font-normal my-2 text-gray-500">
                    Your payments will be processed internationally. Additional bank fees may apply.
                </div>
                <div className="text-base font-normal my-2 text-gray-500">
                    By checking the checkbox below, you agree to our
                    <span className="text-blue-600 ml-1">
                        <RouterLink to="#">Terms Of Use,</RouterLink>
                    </span>
                    <span className="text-blue-600 ml-1 mr-1">
                        <RouterLink to="#">Provacy Statement,</RouterLink>
                    </span>
                    and that you are over 18. Netflix will automatically continue your membership and charge the monthly membership fee (currently IDR54,000) to your payment method until you cancel. You may cancel at any time to avoid future charges.
                </div>
                <div className="mt-10 flex items-center">
                    <input
                        type="checkbox"
                        name="arge"
                        value={check}
                        onChange={() => check ? setCheck(false) : setCheck(true)}
                        className="w-9 h-9 ring-1 ring-gray-500"
                    />
                    <span className="text-gray-500 text-xl ml-2">I agree</span>
                </div>
                <div className="mt-10 text-2xl text-white h-20">
                    {
                        check ?
                            <button onClick={handleButtonStartMember}
                                className="w-full h-full outline-none bg-red-600 font-bold rounded-lg focus:outline-none">Start Membership</button>
                            :
                            <button
                                disabled={true}
                                className="w-full h-full outline-none bg-gray-600 font-bold rounded-lg focus:outline-none">Start Membership</button>
                    }
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}

export function Stap() {
    return (
        <div className="text-black text-lg font-normal">
            STEP
            <span className="font-bold mx-2">3</span>
                    OF
            <span className="font-bold mx-2">3</span>
        </div>
    );
}
