import React from 'react';

// static icon
import icon1 from '../../assets/icons/loading.gif';
import icon2 from '../../assets/icons/spinner.png';

// custom css
import './loading.css';

export default function Index() {
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center loading fixed top-0 z-20">
            <div className="relative">
                <div>
                    <img src={icon1} alt="icon-loading" />
                </div>
                <div className="loading-spiner absolute top-2 left-2">
                    <img src={icon2} alt="icon-loading" />
                </div>
            </div>
        </div>
    )
}
