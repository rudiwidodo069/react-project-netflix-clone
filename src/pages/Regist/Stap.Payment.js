import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// component
import NavbarRegist from '../../components/NavbarRegist';

// static icons
import icon1 from '../../assets/icons/visa-v3.svg';
import icon2 from '../../assets/icons/mastercard-v2.svg';
import icon3 from '../../assets/icons/amex-v2.svg';
import spiner from '../../assets/icons/spinner.png';

// custom css
import './regist.css';

export default function Index() {
    const history = useHistory();

    const [spinerLoading, setSpinerLoading] = useState(false);

    const handlePaymentSetup = () => {
        setSpinerLoading(true);
        setTimeout(() => {
            setSpinerLoading(false);
            history.push('/sign-up-stap-payment-confirmation');
        }, 2000);
    }

    return (
        <div>
            <NavbarRegist link="/" title="Sign Out" />
            <div className="xs:w-full xs:px-3 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 || mx-auto p-20 step-payment">
                <div className="icons w-14 h-14 rounded-full border-4 border-red-600 mx-auto flex justify-center items-center">
                    <i className="bi bi-lock text-3xl text-red-600 font-bold"></i>
                </div>
                <Stap />
                <div className="xs:text-2xl || text-center md:text-4xl font-bold text-black">
                    Set up your payment.
                </div>
                <div className="xs:text-2xl xs:w-10/12 w-5/12 || text-center md:text-3xl font-normal text-black mt-8 mx-auto">
                    Your membership starts as soon as you set up payment.
                </div>
                <div className="xs:text-2xl xs:w-10/12 w-5/12 || text-center md:text-3xl font-bold text-black mt-8 mx-auto">
                    No commitments. Cancel online anytime.
                </div>

                <div className="relative">
                    <button
                        disabled={spinerLoading}
                        onClick={handlePaymentSetup}
                        className={`w-full h-20 ring-2 ring-gray-400 mt-10 rounded-lg p-4 relative flex || xs:flex-col xs:items-start xs:justify-center sm:flex-row sm:justify-between  sm:items-center lg:justify-around ${spinerLoading ? 'bg-gray-100 bg-opacity-50' : ''}`}>
                        <div className="xs:text-xl md:text-3xl xs:text-left || text-balck w-full">Credit Or Debit Card</div>
                        <div className="flex">
                            <img src={icon1} alt="react-nexflix-clone-icons" width="15%" height="10%" className="mx-1 || xs:w-10 xs:mt-1 sm:w-2/12" />
                            <img src={icon2} alt="react-nexflix-clone-icons" width="15%" height="10%" className="mx-1 || xs:w-10 xs:mt-1 sm:w-2/12" />
                            <img src={icon3} alt="react-nexflix-clone-icons" width="15%" height="10%" className="mx-1 || xs:w-10 xs:mt-1 sm:w-2/12" />
                        </div>
                        <div className="text-3xl text-gray-400 || xs:absolute xs:top-6 xs:right-4 sm:static sm:top-0 sm:right-0">
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </button>
                    {spinerLoading && <div className="spiner-loading-button">
                        <img src={spiner} alt="spiner-loading" />
                    </div>}
                </div>

            </div>
        </div>
    );
}


export function Stap() {
    return (
        <div className="text-black text-lg font-normal mt-10 text-center">
            STEP
            <span className="font-bold mx-2">3</span>
                    OF
            <span className="font-bold mx-2">3</span>
        </div>
    );
}
