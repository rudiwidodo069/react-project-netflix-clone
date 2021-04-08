import React, { Fragment, useContext, useEffect, useState } from 'react';

// components
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import OurStory from '../../components/OurStory';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

export default function Index({ _props }) {
    const userProps = useContext(_props);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []
    )

    return (
        <Fragment>
            <Navbar />
            <Jumbotron userConsumer={userProps}>
                <div className="text-6xl font-bold xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-3xl">
                    Unlimited movies, TV shows, and more.
                </div>
                <div className="text-4xl mt-6 xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-xl">
                    Watch anywhere. Cancel anytime.
                </div>
            </Jumbotron>
            <OurStory />
            <Faq userConsumer={userProps}>
                <div className="md:container mx-auto">
                    <div className="text-center xs:text-4xl xs:px-2 lg:text-6xl text-white font-bold mb-12">
                        Frequently Asked Questions
                    </div>
                </div>
            </Faq>
            <Footer />
            {loading && <Loading />}
        </Fragment>
    )
}
