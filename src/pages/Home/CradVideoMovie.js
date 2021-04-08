import React from 'react'
import { BoxCardPlayed } from './index'

export default function CradVideoMovie({ boxTitle, openBoxPlayed, played, closeBoxPlayed, playVideo, recomended, details }) {
    return (
        <div className="w-full py-3">
            <div className="md:container xs:mx-3 md:mx-auto">
                <div className="text-white text-3xl my-3">{boxTitle}</div>
                <div className="w-full grid grid-flow-col-dense overflow-auto box-card-cover">
                    {
                        recomended.map((val, i) => {
                            return (
                                <div
                                    key={val.id}
                                    className="mr-1 card-cover relative"
                                    onClick={() => played(val.id)}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                                        alt="netflix-clone-cover-small"
                                        className="w-full h-full object-cover object-center" />
                                    <div className={`w-full h-full bg-black bg-opacity-90 box-title ${openBoxPlayed.position === val.id ? 'active-box-played' : 'hidden'}`}>
                                        <div className="text-white text-lg text-center font-bold uppercase">{val.title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                openBoxPlayed.status.movie ? <BoxCardPlayed closeBoxPlayed={closeBoxPlayed} playVideo={playVideo} details={details} /> : ''}
        </div>
    )
}
