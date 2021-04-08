import React, { Fragment, memo, useEffect, useState } from 'react';

// component
import HomeNavbar from '../../components/HomeNavbar';
import Footer from '../../components/Footer';
import CradVideoTranding from './CradVideoTranding';
import CradVideoRecomended from './CradVideoRecomended';
import CardVideoMovie from './CradVideoMovie';

// static image
import netflixIcon from '../../assets/icons/download.jpg';

// static video
import videoStatic from '../../assets/video/video-devices-id.m4v';

// costom css
import './home.css';

// get tmbd api
import { GetDetailHomePageVideo, GetDetailHomePageWatchVideo, GetHomePageVideo } from '../../IMDB/GetHomePageVideo';
import { GetAllVideos } from '../../IMDB/GetAllVideos';
import CardPlayed from './CardPlayed';

// react memo
const MemoCardVidioRecomended = memo(CradVideoRecomended);
const MemoCardVideoTranding = memo(CradVideoTranding);
const MemoCardVideoMovie = memo(CardVideoMovie);
const MemoCardPlayed = memo(CardPlayed);

export default function Index() {
    const [openBoxPlayed, setOpenBoxPlayed] = useState({
        status: {
            recomanded: false,
            tranding: false,
            movie: false,
            tv: false
        },
        position: 0,
        title: '',
        background: '',
        overview: '',
        date: '',
        popularity: '',
        genres: []
    });
    const [playButton, setPlayButton] = useState(false);
    const [homePageVideo, setHomePageVideo] = useState({});
    const [watchProviderVideo, setWatchProviderVideo] = useState('');
    const [recomanded, setRecomanded] = useState([]);
    const [tranding, setTranding] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(
        async () => {
            const data = await GetHomePageVideo();
            const random = Math.floor(Math.random() * 20);
            const detailMovie = await GetDetailHomePageVideo(data.results[random].id);
            const providerVideo = await GetDetailHomePageWatchVideo(data.results[random].id);
            const recomandedVideo = await GetAllVideos(2);
            const trandingVideo = await GetAllVideos(3);
            const moviesVideo = await GetAllVideos(4);
            setHomePageVideo(detailMovie);
            setWatchProviderVideo(providerVideo);
            setRecomanded(recomandedVideo.results);
            setTranding(trandingVideo.results);
            setMovies(moviesVideo.results);
        }, []
    )

    const handleOpenPlayedBoxRecomended = async (idMovie) => {
        const detailMovie = await GetDetailHomePageVideo(idMovie);
        setOpenBoxPlayed({
            status: {
                recomanded: true,
                tranding: false,
                movie: false
            },
            position: detailMovie.id,
            title: detailMovie.original_title,
            background: `https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`,
            overview: detailMovie.overview,
            date: detailMovie.release_date,
            popularity: detailMovie.popularity,
            genres: detailMovie.genres
        })
    }

    const handleOpenPlayedBoxMovie = async (idMovie) => {
        const detailMovie = await GetDetailHomePageVideo(idMovie);
        setOpenBoxPlayed({
            status: {
                recomanded: false,
                tranding: false,
                movie: true
            },
            position: detailMovie.id,
            title: detailMovie.original_title,
            background: `https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`,
            overview: detailMovie.overview,
            date: detailMovie.release_date,
            popularity: detailMovie.popularity,
            genres: detailMovie.genres
        })
    }

    const handleOpenPlayedBoxTranding = async (idMovie) => {
        const detailMovie = await GetDetailHomePageVideo(idMovie);
        setOpenBoxPlayed({
            status: {
                recomanded: false,
                tranding: true,
                movie: false
            },
            position: detailMovie.id,
            title: detailMovie.original_title,
            background: `https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`,
            overview: detailMovie.overview,
            date: detailMovie.release_date,
            popularity: detailMovie.popularity,
            genres: detailMovie.genres
        })
    }

    const handleAddPlaylist = (id) => {

    }


    return (
        <Fragment>
            <div className="bg-black w-full">
                <HomeNavbar />
                <div className="h-screen w-full bg-black text-white pt-20">
                    <div className="w-full h-full relative">
                        <img src={`https://image.tmdb.org/t/p/w500${homePageVideo.backdrop_path}`} alt="cover video" className="w-full h-full sm:object-cover xs:object-fill object-center" />
                        <div className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-80">
                            <div className="md:container md:mx-auto md:px-1 xs:px-3">
                                <div className="py-2 md:-ml-3 flex items-center">
                                    <img src={netflixIcon} alt="netflix icon" className="bg-black  || xs:w-9 xs:h-9 md:w-14 md:h-14" />
                                    <div className="text-gray-600 text-opacity-90 text-2xl font-bold tracking-widest ml-2">Series</div>
                                </div>
                                <div className="lg:text-6xl md:text-4xl xs:text-2xl || text-white font-bold">
                                    {homePageVideo.original_title}
                                </div>
                                <div className="lg:text-3xl md:text-2xl xs:text-lg || md:my-6 sm:my-4 xs:my-2 font-normal text-white">
                                    <span className="text-green-500 mr-2">98% Match</span>
                                    <span className="mx-2">{homePageVideo.release_date}</span>
                                    <span className="ring-1 ring-white py-2 px-4 mx-2">MOVIES</span>
                                    <span className="xs:hidden md:mx-2 md:inline-block">{homePageVideo.status}</span>
                                </div>
                                <div className="text-gray-400 text-opacity-60 lg:w-8/12 xs:w-full md:my-7 sm:my-5 xs:my-4  xs:text-lg sm:text-xl font-normal">
                                    {`${homePageVideo.overview}`.slice(0, 200)}
                                </div>
                                <div className="lg:flex-row xs:flex-col text-white text-2xl">
                                    <button
                                        onClick={() => setPlayButton(true)}
                                        className="md:w-40 md:h-16 xs:h-12 xs:w-full xs:my-2 bg-red-600 mr-2 ring-1 ring-red-600 outline-none focus:outline-none focus:ring-1 focus:ring-white font-bold">
                                        <i className="bi bi-play-fill"></i>
                                        PLAY
                                    </button>
                                    <button
                                        onClick={() => handleAddPlaylist(homePageVideo.id)}
                                        className="md:w-40 md:h-16 xs:h-12 xs:w-full xs:my-2 ring-1 ring-white outline-none  md:ml-2 font-bold">
                                        <i className="bi bi-plus font-bold"></i>
                                        MY LIST
                                    </button>
                                </div>
                                <div className="my-2 text-gray-400 text-opacity-60 sm:text-xl xs:text-lg md:w-6/12">
                                    Popularity: {homePageVideo.popularity}
                                </div>
                                <div className="my-2 text-gray-400 text-opacity-60 sm:text-xl  xs:text-lg md:w-6/12">
                                    Genres: {
                                        homePageVideo.genres !== undefined ? homePageVideo.genres.map(val => {
                                            return (<span key={val.id} className="mx-1">{val.name}</span>)
                                        }) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MemoCardVidioRecomended
                    boxTitle="Recomended"
                    openBoxPlayed={openBoxPlayed}
                    played={(val) => handleOpenPlayedBoxRecomended(val)}
                    closeBoxPlayed={
                        () => setOpenBoxPlayed({ status: { recomanded: false }, position: 0 })
                    }
                    playVideo={() => setPlayButton(true)}
                    recomended={recomanded}
                    details={openBoxPlayed} />
                <MemoCardVideoTranding
                    boxTitle="Tranding"
                    openBoxPlayed={openBoxPlayed}
                    played={(val) => handleOpenPlayedBoxTranding(val)}
                    closeBoxPlayed={() => setOpenBoxPlayed(
                        () => setOpenBoxPlayed({ status: { tranding: false }, position: 0 }))
                    }
                    playVideo={() => setPlayButton(true)}
                    recomended={tranding}
                    details={openBoxPlayed} />
                <MemoCardVideoMovie
                    boxTitle="Movies"
                    openBoxPlayed={openBoxPlayed}
                    played={(val) => handleOpenPlayedBoxMovie(val)}
                    closeBoxPlayed={() => setOpenBoxPlayed(
                        () => setOpenBoxPlayed({ status: { tranding: false }, position: 0 }))
                    }
                    playVideo={() => setPlayButton(true)}
                    recomended={movies}
                    details={openBoxPlayed} />

                {playButton && <PlayedVideos closePlayVideo={() => setPlayButton(false)} linkWatchVideo={watchProviderVideo} />}
                <Footer />
            </div>
        </Fragment>
    );
}

export const PlayedVideos = ({ closePlayVideo, linkWatchVideo }) => {
    return (
        <div className="w-full h-screen bg-black bg-opacity-90 fixed z-30 top-0 left-0 flex items-center justify-center">
            <div className="sm:w-8/12 xs:w-11/12 relative">
                <video controls className="w-full">
                    <source src={videoStatic} type="video/mp4" />
                </video>
                <div className="absolute text-4xl text-white font-bold md:top-5 md:right-5 xs:top-1 xs:right-1 z-10 cursor-pointer">
                    <i
                        onClick={closePlayVideo}
                        className="bi bi-x"></i>
                </div>
            </div>
        </div>
    );
}

export const BoxCardPlayed = ({ closeBoxPlayed, playVideo, details }) => {
    return (
        <div className="w-full bg-gray-900 bg-opacity-50 box-played text-white text-4xl my-2">
            <div className="w-full h-full relative">
                <div className="absolute text-4xl text-white font-bold top-5 right-5 z-10 cursor-pointer">
                    <i
                        onClick={closeBoxPlayed}
                        className="bi bi-x"></i>
                </div>
                <div className="w-full h-full">
                    <img src={details.background} alt="netflix-clone-cover-videos" className="w-full h-full" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70">
                    <MemoCardPlayed playVideo={playVideo} details={details} />
                </div>
            </div>
        </div>
    );
}