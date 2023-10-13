import Header from "../Components/Contact Us/Header";
import FormAndAdress from "../Components/Contact Us/Form";
import Map from "../Components/Contact Us/Map";
import { useTitle } from "../Components/Shared/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Contact = () => {

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

export default Contact;