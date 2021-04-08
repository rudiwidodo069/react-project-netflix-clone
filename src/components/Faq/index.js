import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// custom css
import './faq.css';

// faq content json
import faqContentJson from './faq.content.json';

export default function Index({ children, userConsumer }) {
    const history = useHistory();
    const [faqOpen, setFaqOpen] = useState({ open: false, id: null });
    const [email, setEmail] = useState('');

    const hanldeOpenFaq = (id) => {
        faqOpen ? setFaqOpen({ open: false, id: id }) : setFaqOpen({ open: true, id: id });
    }

    const hanldeButtonSignUp = () => {
        if (email == '') {
            alert('email tidak valid');
        } else {
            userConsumer.email = email;
            localStorage.setItem('userStorageInfo', JSON.stringify(userConsumer));
            history.push('/sign-up-stap-1');
        }
    }

    return (
        <div className="md:p-20 xs:py-20 bg-black">
            {children}
            {
                faqContentJson.map(value => {
                    return (
                        <div
                            key={value.id}
                            className="lg:w-8/12 md:10/12 xs:w-full mx-auto bg-gray-600 bg-opacity-50 p-5 my-2">
                            <div className="grid grid-cols-2">
                                <div className="text-white lg:text-3xl md:text-2xl font-normal text-left">
                                    {value.title}
                                </div>
                                <div className="text-5xl text-white font-normal text-right cursor-pointer">
                                    {faqOpen.id === value.id ?
                                        <i
                                            onClick={() => setFaqOpen({ open: false, id: null })}
                                            className="bi bi-x"></i> :
                                        <i
                                            onClick={() => hanldeOpenFaq(value.id)}
                                            className="bi bi-plus"></i>}
                                </div>
                                {
                                    faqOpen.id === value.id ?
                                        <div className="mt-8 py-5 col-span-2 border-t-2 border-black text-2xl text-white font-normal">
                                            {value.text}
                                        </div> : ''
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className="lg:w-3/4 sm:w-full mx-auto mt-8">
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
                        onClick={() => hanldeButtonSignUp()}
                        className="lg:w-4/12 xs:w-5/12 bg-red-600 lg:text-2xl text-white font-bold focus:outline-none lg:h-16 lg:mt-0 md:mt-5 md:h-10 md:text-xl sm:mt-5 sm:h-10 sm:text-xl xs:mt-5 xs:h-10 xs:text-xl">Get Started
                                    <span><i className="bi bi-chevron-right text-white"></i></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
