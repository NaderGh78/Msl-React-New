import Header from "../Components/About Components/Header";
import AboutInfo from "../Components/About Components/Info";
import Cards from "../Components/About Components/Cards";
import { useTitle } from "../Components/Shared Components/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

const AllAboutPageComp = () => {

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

export default AllAboutPageComp;