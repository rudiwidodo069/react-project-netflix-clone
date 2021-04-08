// file static
import vidio1 from '../../assets/video/video-tv-0819.m4v';
import vidio2 from '../../assets/video/video-devices-id.m4v';
import image1 from '../../assets/images/mobile-0819.jpg';
import image2 from '../../assets/images/device-pile-id.png';
import image3 from '../../assets/images/boxshot.png';
import image4 from '../../assets/images/download-icon.gif';
import image5 from '../../assets/images/tv.png';

const OurStoryContent = [
    {
        id: 1,
        title: "Enjoy on your TV.",
        text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        video: vidio1,
        image: image5,
        boxImg: '',
        gif: '',
        cover: '',
        maxWidth: '73%',
        maxHeight: '50%',
        top: '46%',
        left: '48%',
    },
    {
        id: 2,
        title: "Download your shows to watch offline.",
        text: "Save your favorites easily and always have something to watch.",
        video: "",
        image: image1,
        boxImg: '',
        gif: image4,
        cover: image3
    },
    {
        id: 3,
        title: "Watch everywhere.",
        text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        video: vidio2,
        image: image2,
        boxImg: '',
        gif: '',
        cover: '',
        maxWidth: '48%',
        maxHeight: '50%',
        top: '35%',
        left: '49%'
    }
];

export default OurStoryContent;