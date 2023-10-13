import Header from "../Components/Services/Header";
import Info from "../Components/Services/Info";
import { useTitle } from "../Components/Shared/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Services = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])


    useTitle('| Services');

    return (
        <>
            <Header />
            <Info />
        </>
    );
}

export default Services;