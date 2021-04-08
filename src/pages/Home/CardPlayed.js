import React, { Fragment } from 'react'

// static image
import netflixIcon from '../../assets/icons/download.jpg';

export default function CardPlayed({ playVideo, details }) {
    return (
        <Fragment>
            <div className="md:container xs:mx-3 h-full md:mx-auto px-1 flex flex-col justify-center">
                <div className="py-2 -ml-3 flex items-center">
                    <img src={netflixIcon} alt="netflix icon" className="bg-black w-10 h-10" />
                    <div className="text-gray-600 text-opacity-90 text-2xl font-bold tracking-widest ml-2">Series</div>
                </div>
                <div className="md:text-4xl sm:text-2xl text-white font-bold">
                    {details.title}
                </div>
                <div className="md:text-2xl xs:text-xl my-3 font-normal text-white">
                    <span className="text-green-500 mr-2">98% Match</span>
                    <span className="mx-2">{details.date}</span>
                    <span className="ring-1 ring-white py-1 px-4 mx-2 xs:hidden sm:inline-block">MOVIES</span>
                </div>
                <div className="text-white md:text-2xl xs:text-xl font-bold">
                    it s Official: Another Seasion Is Coming
                 </div>
                <div className="text-gray-400 text-opacity-60 lg:w-10/12 md:my-5 xs:w-full xs:my-2 text-xl font-normal xs:hidden sm:block">
                    {details.overview}
                </div>
                <div className="flex sm:flex-row xs:flex-col text-white md:text-2xl xs:text-xl my-3">
                    <button
                        onClick={playVideo}
                        className="md:w-40 md:h-14 sm:w-2/4 xs:w-full xs:h-12 xs:mb-3 sm:mb-0 bg-red-600 mr-2 ring-1 ring-red-600 outline-none focus:outline-none focus:ring-1 focus:ring-white font-bold">
                        <i className="bi bi-play-fill"></i>
                        PLAY
                    </button>
                    <button
                        className="md:w-40 md:h-14 sm:w-2/4 xs:w-full xs:h-12 ring-1 ring-white outline-none sm:ml-2 xs:ml-0 font-bold">
                        <i className="bi bi-plus font-bold"></i>
                        MY LIST
                    </button>
                </div>
                <div className="my-2 text-gray-400 text-opacity-60 md:text-xl xs:text-lg md:w-6/12">
                    Popularity: {details.popularity}
                </div>
                <div className="my-1 text-gray-400 text-opacity-60 md:text-xl xs:text-lg md:w-6/12">
                    Genres: {
                        details.genres.map(val => {
                            return <span key={val.id} className="mx-1">{val.name}</span>
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
