import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// custom css
import './jumbotron.css';

export default function Index({ children, userConsumer }) {

    const history = useHistory();
    const [email, setEmail] = useState('');

    const hanldeButtonSignUp = () => {
        if (email == '') {
            alert('email not validate');
        } else {
            userConsumer.email = email;
            localStorage.setItem('userStorageInfo', JSON.stringify(userConsumer));
            history.push('/sign-up-stap-1');
        }
    }

    return (
        <div className="jumbotron w-full 2xl:h-screen xl:h-full">
            <div className="w-full h-full bg-black bg-opacity-80 box-text">
                <div className="container mx-auto h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="h-2/4 g:w-6/12 md:w-8/12 sm:w-10/12 xs:w-full">
                            <div className="text-white text-center">
                                {children}
                            </div>
                            <div className="text-2xl text-center text-white mt-12 xl:text-xl lg:text-lg md:text-lg sm:text-lg xs:text-base">
                                Ready to watch? Enter your email to create or restart your membership.
                            </div>
                            <div className="w-full flex lg:flex-row mt-5 md:flex-col md:items-center sm:flex-col sm:items-center xs:flex-col xs:items-center">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={evt => setEmail(evt.target.value)}
                                    className="w-8/12 h-16 bg-white p-3 outline-none text-lg focus:ring-2 focus:ring-blue-500 md:w-full sm:w-full xs:w-full" />
                                <button
                                    onClick={hanldeButtonSignUp}
                                    className="lg:w-4/12 xs:w-5/12 bg-red-600 lg:text-2xl text-white font-bold focus:outline-none lg:h-16 lg:mt-0 md:mt-5 md:h-10 md:text-xl sm:mt-5 sm:h-10 sm:text-xl xs:mt-5 xs:h-10 xs:text-xl">Get Started
                                    <span><i className="bi bi-chevron-right text-white"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

