import Header from "../Components/Home/Header";
import WhoWeAr from "../Components/Home/WhoWeAr";
import Counter from "../Components/Home/Counter";
import { useTitle } from "../Components/Shared/Helpers/index";
import Loader from "../Components/Shared/Loader";
import WOW from 'wowjs';
import { useEffect } from 'react';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Home = () => {

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

export default Home;