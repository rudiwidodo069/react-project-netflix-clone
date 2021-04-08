import React from 'react';

// custom css
import './ourstory.css';

// json file
import OurStoryContent from './our.story.content';

export default function index() {
    return (
        <div className="bg-black bg-opacity-90 w-full py-1">
            {
                OurStoryContent.map((value, key) => {
                    return (
                        <Card key={key} id={key} value={value} />
                    )
                })
            }
        </div>
    );
}

export function Card({ id, value }) {
    return (
        <div className="our-story-card w-full bg-black my-2.5">
            <div className="sm:container mx-auto">
                {
                    id % 2 === 0 ?
                        (<div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:text-center lg:text-left box-our-story">
                            <div className="text-white xs:p-0 sm:p-8 p-10 flex justify-center flex-col">
                                <div className="font-bold xs:text-4xl lg:text-6xl">{value.title}</div>
                                <div className="xs:text-2xl lg:text-4xl mt-6">{value.text}</div>
                            </div>
                            <div className="xs:p-0 sm:p-8 p-10">
                                <div className="w-full relative">
                                    <div className="w-full h-full">
                                        <img src={value.image} alt={value.title} className="relative z-10" />
                                    </div>
                                    <div
                                        className="box-video absolute"
                                        style={{
                                            maxHeight: value.maxHeight,
                                            maxWidth: value.maxWidth,
                                            top: value.top,
                                            left: value.left
                                        }}>
                                        <video autoPlay muted playsInline loop className="lg:w-11/12">
                                            <source src={value.video} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>) :
                        (<div className="grid sm:grid-cols-1 lg:grid-cols-2">
                            <div className="xs:p-0 sm:p-8 p-10 xs:row-start-2 lg:row-start-1">
                                <div className="w-full">
                                    <img src={value.image} alt={value.title} className="w-full" />
                                    <div className="md:w-full md:h-full lg:w-10/12 lg:h-full mx-auto grid grid-cols-4 p-4 relative ring-1 ring-gray-500 bg-black rounded-xl md:-mt-36 lg:-mt-32">
                                        <div className="md:h-full lg:h-full lg:w-20 mr-3">
                                            <img src={value.cover} alt={value.title} className="sm:h-full sm:w-full" />
                                        </div>
                                        <div className="col-span-2 flex flex-col justify-center">
                                            <div className="xs:text-base md:text-2xl text-white mb-2">Stranger Things</div>
                                            <div className="sm:text-base md:text-xl text-blue-700">Downloading....</div>
                                        </div>
                                        <div className="h-full flex justify-center items-center">
                                            <img src={value.gif} alt={value.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white xs:p-0 sm:p-8 p-10 flex justify-center flex-col xs:text-center lg:text-left">
                                <div className="xs:text-4xl lg:text-6xl font-bold">{value.title}</div>
                                <div className="xs:text-2xl lg:text-2xl mt-6">{value.text}</div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
