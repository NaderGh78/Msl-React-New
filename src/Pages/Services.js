import Header from "../Components/Services Components/Header";
import Info from "../Components/Services Components/Info";
import { useTitle } from "../Components/Shared Components/Helpers/index";
import WOW from 'wowjs';
import { useEffect } from 'react';

const AllSevicesPageComp = () => {

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

export default AllSevicesPageComp;