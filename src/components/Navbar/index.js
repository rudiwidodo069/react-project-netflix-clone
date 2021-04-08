import React from 'react';

// static images
import banner from '../../assets/logo/logo.png';

// custom css
import './navbar.css';

export default function index() {
    return (
        <nav className="navbar p-3 h-20 w-full absolute top-0">
            <div className="sm:container mx-auto">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="banner">
                        <a href="#home">
                            <img src={banner} alt="netflix-clone" className="w-full h-full" />
                        </a>
                    </div>
                    <div className="nav-link flex items-center justify-around h-full">
                        <div className="flex items-center xs:justify-center language sm:mr-8 xs:mr-0">
                            <select name="language" id="language" className="xs:h-7 xs:w-32 sm:w-full sm:h-full ring-2 ring-gray-400 text-gray-100 bg-transparent pl-1">
                                <option value="english globe">English</option>
                            </select>
                        </div>
                        <div className="sigin flex items-center">
                            <button
                                onClick={() => location.href = "/sign-in"}
                                className="bg-red-600 w-full text-white rounded-md font-bold xs:h-8 lg:h-full">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
