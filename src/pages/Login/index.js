import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// firebase login api
import { LoginNetflixClone } from '../../Firebase/Api/login.api';

// custom css
import './login.css';

// static images
import banner from '../../assets/logo/logo.png';

// component
import Loading from '../../components/Loading';

export default function Index() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleButtonSignIn = async () => {
        try {
            setLoading(true);
            const result = await LoginNetflixClone(email, password);
            if (result) {
                setLoading(false);
                const userLogin = {
                    email: result.email,
                    uid: result.uid,
                    refreshToken: result.refreshToken,
                    profile: 'https://firebasestorage.googleapis.com/v0/b/netflix-clone-b5bbf.appspot.com/o/newuser%2Favatar-p.svg?alt=media&token=06d68980-e845-4731-a54e-448d5d26ecff',
                }
                localStorage.setItem('UserLoginNetflixClone', JSON.stringify(userLogin));
                history.push('/netflix-clone-home');
            }
        } catch (error) {
            setLoading(false);
            alert(error.code);
        }
    }

    return (
        <div className="login w-full h-screen xl:h-screen md:h-full">
            <div className="w-full h-full lg:bg-black lg:bg-opacity-50 md:bg-black sm:bg-black xs:bg-black">
                <div className="lg:container lg:mx-auto pb-10 xs:pb-0 xs:px-3">
                    <div className="w-full h-20 flex items-center">
                        <img src={banner} alt="netflix clone banner" className="w-44 h-full" />
                    </div>
                    <div className="xl:w-4/12 lg:w-6/12 md:w-full sm:w-full xs:w-full bg-black bg-opacity-80 mx-auto rounded-sm lg:p-5 md:py-5 mt-5">
                        <div className="text-white text-4xl font-bold">Sign In</div>
                        <div className="my-5 w-full h-14">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                placeholder="Email Or Phone Number"
                                onChange={evt => setEmail(evt.target.value)}
                                className="w-full h-full outline-none ring-1 ring-gray-500 bg-gray-500 bg-opacity-60 p-5 text-lg rounded-sm text-gray-400" />
                        </div>
                        <div className="my-5 w-full h-14">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={evt => setPassword(evt.target.value)}
                                className="w-full h-full outline-none ring-1 ring-gray-500 bg-gray-500 bg-opacity-60 p-5 text-lg rounded-sm text-gray-400" />
                        </div>
                        <div className="mt-4 mb-4">
                            <button
                                onClick={() => handleButtonSignIn()}
                                className="w-full h-14 bg-red-600 text-white text-xl font-bold outline-none border-none rounded-sm focus:outline-none">Sigin In</button>
                        </div>
                        <div className="w-full py-2 flex justify-between">
                            <div className="h-full flex items-center">
                                <input type="checkbox" name="remember" id="remember" className="w-5 h-5" />
                                <span className="text-gray-400 text-base ml-2">Remember me</span>
                            </div>
                            <div className="text-gray-400 text-base">
                                <a href="##" className="no-underline">need help ?</a>
                            </div>
                        </div>
                        <div className="my-2 text-2xl py-2">
                            <button className="border-none focus:outline-none">
                                <i className="bi bi-facebook text-blue-700"></i>
                            </button>
                            <span className="text-base text-gray-400 ml-2">login whit facebook</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <div className="text-gray-400 text-lg">New to Netflix ?</div>
                            <span>
                                <a href="/" className="text-white text-lg ml-2">Sign Up now</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}
