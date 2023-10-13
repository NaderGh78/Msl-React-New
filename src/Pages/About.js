import Header from "../Components/About/Header";
import AboutInfo from "../Components/About/Info";
import Cards from "../Components/About/Cards";
import { useTitle } from "../Components/Shared/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    useTitle('| About Us');

    return (
        <>
            <Header />
            <AboutInfo />
            <Cards />
        </>
    );
}

export default About;