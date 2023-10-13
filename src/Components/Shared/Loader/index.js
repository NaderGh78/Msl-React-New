import { useState, useEffect } from "react";
import { PreloadDiv, Status } from "./style";
import ImgLoader from "../../../assets/images/Home/Loader/logo-preload.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Loader = () => {

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsPending(false);
        }, 2000);

        if (isPending) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'visible';
        }
    })

    return (
        <>
            {isPending && (
                <PreloadDiv>
                    <Status>
                        <img src={ImgLoader} alt="loader" />
                    </Status>
                </PreloadDiv>
            )}
        </>
    );
}

export default Loader;