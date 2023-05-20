import Header from "../Components/Qout Components/Header";
import GetQoute from "../Components/Qout Components/Get a Quote";
import { useTitle } from "../Components/Shared Components/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';


const AllQoutePageComp = () => {

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

export default AllQoutePageComp;