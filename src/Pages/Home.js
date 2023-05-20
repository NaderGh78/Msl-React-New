import Header from "../Components/Home Components/Header";
import WhoWeAr from "../Components/Home Components/WhoWeAr";
import Counter from "../Components/Home Components/Counter";
import { useTitle } from "../Components/Shared Components/Helpers/index";
import Loader from "../Components/Shared Components/Loader";
import WOW from 'wowjs';
import { useEffect } from 'react';

const AllHomePageComp = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    useTitle(' ');

    return (
        <>
            <Loader />
            <Header />
            <WhoWeAr />
            <Counter />
        </>
    );
}

export default AllHomePageComp;