import React, { Fragment, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';

// static images
import banner from '../../assets/logo/logo.png';

// coustom css
import './homeNavbar.css';

export default function Index({ playlistNotive }) {
    const getImagesProfile = localStorage.getItem('UserLoginNetflixClone');
    const defaultProfile = JSON.parse(getImagesProfile);

    const [openSetting, setOpenSetting] = useState(false);
    const [openNavLink, setOpenNavLink] = useState(false);

    const handleOpenSettingAccount = () => {
        if (openSetting) {
            setOpenSetting(false);
            setOpenNavLink(false);
        } else {
            setOpenNavLink(false);
            setOpenSetting(true);
        }
    }

    const handleOpenNavLink = () => {
        if (openNavLink) {
            setOpenSetting(false);
            setOpenNavLink(false);
        } else {
            setOpenNavLink(true);
            setOpenSetting(false);
        }
    }

    return (
        <Fragment>
            <div className="w-full h-20 fixed top-0 left-0 right-0 bg-black z-20">
                <div className="lg:container h-20 mx-auto">
                    <div className="w-full h-full flex justify-between items-center ">
                        <div className="home-nav-left-box flex items-center">
                            <div className="w-24 h-full">
                                <img src={banner} alt="logo-netflix-clone" className="w-full h-full" />
                            </div>
                            <NavLinkLeft />
                        </div>
                        <div className="home-nav-right-box flex items-center relative">
                            <ul className="flex mr-2">
                                <li className="list-none mx-2">
                                    <RouteLink to="#" className="no-underline text-white text-xl font-bold">
                                        <i className="bi bi-search"></i>
                                    </RouteLink>
                                </li>
                                <li className="list-none mx-2">
                                    <RouteLink to="#" className="no-underline text-white text-xl">
                                        <i className="bi bi-gift"></i>
                                    </RouteLink>
                                </li>
                                <li className="list-none mx-2">
                                    <RouteLink to="#" className="no-underline text-white text-xl">
                                        <i className="bi bi-bell-fill"></i>
                                    </RouteLink>
                                </li>
                                <li className="list-none mx-2 xs:block xl:hidden">
                                    <i
                                        onClick={() => handleOpenNavLink()}
                                        className="bi bi-three-dots-vertical text-white text-xl"></i>
                                </li>
                            </ul>
                            <div
                                onClick={() => handleOpenSettingAccount()}
                                className="w-20 h-full text-2xl font-bold text-white cursor-pointer">
                                <img src={defaultProfile.profile} alt="profile-nextflix-clone" className="w-14 h-14 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openSetting && <AccountSetting profile={defaultProfile} />}
            {openNavLink && <ResponsiveLandspace />}
        </Fragment>
    );
}

export function NavLinkLeft() {
    return (
        <ul className="xl:ml-2 xs:hidden xl:flex">
            <li className="list-none mx-2">
                <RouteLink to="#" className="no-underline text-white text-xl">
                    Home
                </RouteLink>
            </li>
            <li className="list-none mx-2">
                <RouteLink to="#" className="no-underline text-white text-xl">
                    TV Shows
                </RouteLink>
            </li>
            <li className="list-none mx-2">
                <RouteLink to="#" className="no-underline text-white text-xl">
                    Movies
                 </RouteLink>
            </li>
            <li className="list-none mx-2">
                <RouteLink to="#" className="no-underline text-white text-xl">
                    Latest
                </RouteLink>
            </li>
            <li className="list-none mx-2 relative">
                <RouteLink to="#" className="no-underline text-white text-xl">
                    My List
                </RouteLink>
            </li>
        </ul>
    )
}

export function ResponsiveLandspace() {
    return (
        <div className="navlink text-3xl text-white rounded-md fixed">
            <ul className="flex flex-col justify-center items-baseline z-10">
                <li className="list-none mx-2">
                    <RouteLink to="#" className="no-underline text-white text-xl">
                        Home
                </RouteLink>
                </li>
                <li className="list-none mx-2">
                    <RouteLink to="#" className="no-underline text-white text-xl">
                        TV Shows
                                    </RouteLink>
                </li>
                <li className="list-none mx-2">
                    <RouteLink to="#" className="no-underline text-white text-xl">
                        Movies
                </RouteLink>
                </li>
                <li className="list-none mx-2">
                    <RouteLink to="#" className="no-underline text-white text-xl">
                        Latest
                 </RouteLink>
                </li>
                <li className="list-none mx-2 relative">
                    <RouteLink to="#" className="no-underline text-white text-xl">
                        My List
                </RouteLink>
                </li>
            </ul>
        </div>
    )
}

export const AccountSetting = ({ profile }) => {
    return (
        <div className="account-setting text-3xl text-white rounded-md fixed">
            <div className="account-profile mx-auto rounded-full">
                <img src={profile.profile} alt="profile netflix clone" className="w-full h-full rounded-full" />
            </div>
            <div className="text-xl font-bold text-white text-center my-5">
                {profile.email}
            </div>
            <div className="text-xl font-bold text-white text-center my-3">
                account
            </div>
            <div className="text-xl font-bold text-white text-center my-3">
                my list
            </div>
            <div className="text-xl font-bold text-white text-center my-5">
                <RouteLink to="/">logout</RouteLink>
            </div>
        </div>
    );
}
