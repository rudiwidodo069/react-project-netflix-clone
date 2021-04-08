import React from 'react';

// static image
import banner from '../../assets/logo/logo.png';

// router link
import { Link as RouteLink } from 'react-router-dom';

export default function Index({ link, title }) {
    return (
        <div className="h-20 px-3 shadow">
            <div className="md:container mx-auto">
                <div className="h-20 w-full flex justify-between items-center">
                    <div className="h-full w-40">
                        <img src={banner} alt="react-netflix-clone" className="w-full h-full" />
                    </div>
                    <div className="text-black font-bold xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                        <RouteLink to={link}>{title}</RouteLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
