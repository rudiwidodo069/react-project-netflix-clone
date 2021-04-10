import React from 'react';

import { useHistory } from 'react-router-dom';

// component
import NavbarSignUp from '../../components/NavbarRegist';

export default function Index() {
    const history = useHistory();

    const handleNextStep = () => {
        history.push('/sign-up-stap-3');
    }

    return (
        <>
            <NavbarSignUp link="/" title="Sign Out" />
            <div className="xl:w-5/12 lg:w-8/12 sm:w-10/12 xs:w-full  h-screen mx-auto md:py-10 sm:py-5 xs:py-3 px-5 sm:px-0 flex flex-col justify-center items-center">
                <div className="text-6xl text-red-600">
                    <i className="bi bi-check-circle"></i>
                </div>
                <Stap />
                <div className="mt-2 font-bold xs:text-3xl sm:text-3xl md:text-4xl">
                    Choose your plan.
                </div>
                <ListItems />
                <div className="xl:w-7/12 lg:w-7/12 md:w-7/12 sm:w-10-12 xs:w-full h-16 mx-auto my-3 text-white xs:text-3xl sm:text-3xl md:text-4xl">
                    <button
                        onClick={handleNextStep}
                        className="h-full w-full bg-red-600 rounded-lg font-bold border-none focus:outline-none">See the plans</button>
                </div>
            </div>
        </>
    );
}

export function Stap() {
    return (
        <div className="text-black text-lg font-normal mt-8">
            STEP
            <span className="font-bold mx-2">1</span>
        OF
            <span className="font-bold mx-2">3</span>
        </div>
    )
}

export function ListItems() {
    return (
        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-10/12 xs:w-full mx-auto my-4">
            <ul className="block list-none">
                <li className="flex my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black xs:text-xl sm:text-xl md:text-2xl">No commitments, cancel anytime.</span>
                </li>
                <li className="flex my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black xs:text-xl sm:text-xl md:text-2xl">Everything on Netflix for one low price.</span>
                </li>
                <li className="flex my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black xs:text-xl sm:text-xl md:text-2xl">No ads and no extra fees. Ever.</span>
                </li>
            </ul>
        </div>
    )
}