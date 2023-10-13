import Header from "../Components/Qout/Header";
import GetQoute from "../Components/Qout/Get a Quote";
import { useTitle } from "../Components/Shared/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Qoute = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    useTitle('| Qoute');

    return (
        <>
            <Header />
            <GetQoute />
        </>
    );
}

export default Qoute;