import Header from "../Components/ContactUs Components/Header";
import FormAndAdress from "../Components/ContactUs Components/Form";
import Map from "../Components/ContactUs Components/Map";
import { useTitle } from "../Components/Shared Components/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

const AllContactUsPageComp = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    useTitle('| Contact Us');

    return (
        <>
            <Header />
            <FormAndAdress />
            <Map />
        </>
    );
}

export default AllContactUsPageComp;