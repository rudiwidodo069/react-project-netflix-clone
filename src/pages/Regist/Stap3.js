import React, { Fragment, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

// component
import NavbarSignUp from '../../components/NavbarRegist';

// custom css
import './regist.css';

// register component json
import RegisterComponentJson from './regist.component.json';

export default function Index() {
    const history = useHistory();

    const [active, setActive] = useState(6);
    const [title, settitle] = useState('');
    const [idr, setIdr] = useState(0);
    const [userStorageInfo, setUserStorageInfo] = useState({});

    useEffect(
        () => {
            const getUserSotage = localStorage.getItem('userStorageInfo');
            const parseUserStorage = JSON.parse(getUserSotage);
            setUserStorageInfo(parseUserStorage);
        }, []
    )

    useEffect(
        () => {
            const activeDom = document.getElementsByClassName('active');
            const title = activeDom[0].getAttribute('value');
            settitle(title);
        }, []
    )

    useEffect(
        () => {
            const activeDom = document.getElementsByClassName('text-active');
            const idr = activeDom[0].getAttribute('value');
            setIdr(idr);
        }, []
    )

    const handleActive = (col, title, idr) => {
        setActive(col);
        settitle(title);
        setIdr(idr);
    }

    const hanldeNextStep = () => {
        userStorageInfo.idr = idr;
        userStorageInfo.plain = title;
        localStorage.setItem("userStorageInfo", JSON.stringify(userStorageInfo));
        history.push('/sign-up-stap-payment');
    }

    return (
        <div>
            <NavbarSignUp link="/" title="Sign Out" />
            <div className="stap-3 md:w-full md:gap-2 lg:w-10/12 xl:w-8/12 xs:w-full xs:p-3 p-10 mx-auto">
                <Stap />
                <div className="mt-2 font-bold md:text-4xl xs:text-2xl sm:text-3xl">
                    Choose the plan that’s right for you
                </div>
                <ListItems />
                <div className="grid lg:grid-cols-6 xs:grid-cols-4 box-click ring-2">
                    <GridRow1
                        active={active}
                        click={(col, title, idr) => handleActive(col, title, idr)} />
                    <GridRow2 active={active} />
                    <GridRow3 active={active} />
                    <GridRow4 active={active} />
                    <GridRow5 active={active} />
                </div>
                <MoreDetails />
                <div className="md:w-2/4 sm:w-3/4 xs:w-full h-20 mx-auto mt-4 text-white md:text-3xl sm:text-2xl xs:text-xl">
                    <button
                        onClick={hanldeNextStep}
                        className="w-full h-full bg-red-600 font-bold rounded-lg border-none focus:outline-none">Continue</button>
                </div>
            </div>
        </div>
    );
}

export function Stap() {
    return (
        <div className="text-black text-lg font-normal">
            STEP
            <span className="font-bold mx-2">2</span>
                    OF
            <span className="font-bold mx-2">3</span>
        </div>
    )
}

export function ListItems() {
    return (
        <div className="my-4">
            <ul className="block list-none">
                <li className="flex items-center my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black md:text-2 xs:text-xl">
                        Watch all you want. Ad-free.
                    </span>
                </li>
                <li className="flex my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black md:text-2 xs:text-xl">
                        Recommendations just for you.
                    </span>
                </li>
                <li className="flex my-2">
                    <i className="bi bi-check2 text-4xl text-red-600"></i>
                    <span className="ml-2 text-black md:text-2 xs:text-xl">
                        Change or cancel your plan anytime.
                    </span>
                </li>
            </ul>
        </div>
    )
}

export function GridRow1({ active, click }) {
    return (
        <Fragment>
            <div className="xs:hidden lg:col-span-2"></div>
            {RegisterComponentJson.stap3.map(value => {
                return (
                    <div
                        key={value.id}
                        className={` xs:col-start-${value.gridStart - 2} lg:row-start-1 lg:col-start-${value.gridStart}`}>
                        <div
                            onClick={() => click(value.gridStart, value.title, value.text[0].idr)}
                            className={`xs:w-20 xs:h-20 xs:text-sm xl:w-32 xl:h-32 xl:text-2xl mx-auto bg-red-400 flex justify-center items-center text-white font-bold cursor-pointer active-box ${value.gridStart === active ? `active` : ''}`}
                            value={value.title}>
                            {value.title}
                        </div>
                    </div>
                )
            })
            }
        </Fragment>
    )
}

export function GridRow2({ active }) {
    return (
        <>
            <div className="xs:col-span-4 lg:col-span-2 lg:row-start-2 || border-b-4 py-2 mt-5">
                <div className="text-black font-normal || xs:text-center xs:text-sm sm:text-lg md:text-xl lg:text-left lg:text-2xl">
                    Monthly price
                </div>
            </div>
            {
                RegisterComponentJson.stap3.map(value => {
                    return value.text.map(data => {
                        return (
                            <div
                                key={value.id}
                                className={`text-gray-500 py-2 border-b-4 mt-5 box-idr || xs:row-start-3 xs:text-sm sm:text-lg md:text-xl lg:row-start-2 lg:text-2xl`}>
                                <div
                                    className={`font-bold text-center ${value.gridStart === active ? 'text-active' : ''}`}
                                    value={data.idr}>
                                    {data.idr}
                                </div>
                            </div>
                        )
                    })
                })
            }
        </>
    )
}

export function GridRow3({ active }) {
    return (
        <>
            <div className="xs:col-span-4 xs:row-start-4 lg:col-span-2 lg:row-start-3 || border-b-4 py-2 mt-5">
                <div className="text-black font-normal || xs:text-center xs:text-sm sm:text-lg md:text-xl lg:text-2xl lg:text-left">
                    Video quality
                </div>
            </div>
            {
                RegisterComponentJson.stap3.map(value => {
                    return value.text.map(data => {
                        return (
                            <div
                                key={value.id}
                                className={`text-gray-500 py-2 border-b-4 mt-5 box-idr ||  xs:row-start-5 xs:text-sm sm:text-lg md:text-xl lg:row-start-3 lg:text-2xl`}>
                                <div className={`font-bold text-center ${value.gridStart === active ? 'text-active' : ''}`}>
                                    {data.quality}
                                </div>
                            </div>
                        )
                    })
                })
            }
        </>
    )
}

export function GridRow4({ active }) {
    return (
        <>
            <div className="xs:col-span-4 xs:row-start-6 lg:col-span-2 lg:row-start-4 || border-b-4 py-2 mt-5">
                <div className="text-black font-normal || xs:text-center xs:text-sm sm:text-lg md:text-xl lg:text-2xl lg:text-left">
                    Resolution
                </div>
            </div>
            {
                RegisterComponentJson.stap3.map(value => {
                    return value.text.map(data => {
                        return (
                            <div
                                key={value.id}
                                className={`text-gray-500 py-2 border-b-4 mt-5 box-idr || xs:row-start-7 xs:text-sm sm:text-lg md:text-xl lg:row-start-4 lg: text-2xl`}>
                                <div className={`font-bold text-center ${value.gridStart === active ? 'text-active' : ''}`}>
                                    {data.resolution}
                                </div>
                            </div>
                        )
                    })
                })
            }
        </>
    )
}

export function GridRow5({ active }) {
    return (
        <>
            <div className="xs:col-span-4 xs:row-start-auto lg:row-start-5 lg:col-span-2 py-2 mt-5 || xs:mt-2">
                <div className="text-black font-normal || xs:text-center xs:text-sm sm:text-lg md:text-xl lg:text-2xl lg:text-left">
                    Devices you can use to watch
                </div>
            </div>
            {
                RegisterComponentJson.stap3.map(value => {
                    return (
                        <div
                            key={value.id}
                            className={`text-gray-500 text-2xl py-2 mt-5 lg:row-start-5 lg:col-start-${value.gridStart} box-idr || xs:col-start-auto xs:mt-0 `}>
                            <div className={`font-bold text-center ${value.gridStart === active ? 'text-active' : ''}`}>
                                <div className="text-lg my-2">
                                    <i className={`${value.watch.phone.icon} text-3xl`}></i>
                                    <div className="xs:text-sm sm:text-base md:text-lg">{value.watch.phone.label}</div>
                                </div>
                                <div className="text-lg my-2">
                                    <i className={`${value.watch.tablet.icon} text-3xl`}></i>
                                    <div className="xs:text-sm sm:text-base md:text-lg">{value.watch.tablet.label}</div>
                                </div>
                                <div className="text-lg my-2">
                                    <i className={`${value.watch.computer.icon} text-3xl`}></i>
                                    <div className="xs:text-sm sm:text-base md:text-lg">{value.watch.computer.label}</div>
                                </div>
                                <div className="text-lg my-2">
                                    <i className={`${value.watch.tv.icon} text-3xl`}></i>
                                    <div className="xs:text-sm sm:text-base md:text-lg">{value.watch.tv.label}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export function MoreDetails() {
    return (
        <>
            <div className="my-2 md:text-lg xs:text-base font-normal text-gray-600">
                We re testing new plans for our members.
                    <span><a href="##" className="text-blue-600 ml-1">See all plans.</a></span>
            </div>
            <div className="my-2 md:text-lg xs:text-base font-normal text-gray-600">
                Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. See
                    <span><a href="##" className="text-blue-600 ml-1">Terms of Use </a></span>
                <span>for more details</span>
            </div>
            <div className="my-2 md:text-lg xs:text-base font-normal text-gray-600">
                Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Mobile+ and Mobile.
                </div>
        </>
    )
}