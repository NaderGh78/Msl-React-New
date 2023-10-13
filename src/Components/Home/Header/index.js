import {
    HeaderSection,
    Overlay, Video,
    Typing,
    BtnIcon,
    BtnText,
    Icon,
    SlMediaBox,
    SlMediaIcons,
    Li,
    Anchor
} from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import headerVideo from "../../../assets/images/Home/video/horn.mp4";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Header = () => {

    const videoRef = useRef();

    const [stop, setStop] = useState(false);

    const handleVideo = () => {

        setStop(!stop);

        if (stop === true) {

            videoRef.current.pause();

        } else {

            videoRef.current.play();

        }

    };

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {

        const typed = new Typed(el.current, {

            strings: ["<strong>M</strong>editerranean<strong> S</strong>ea<strong> L</strong>ines"],

            typeSpeed: 90,

            backSpeed: 50,

            cursorChar: '',

            loop: true

        });

        // Destropying
        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <HeaderSection>
            <Overlay></Overlay>
            <Video autoplay loop ref={videoRef}>
                <source src={headerVideo} type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </Video>
            <Typing>
                <h1 ref={el}></h1>
            </Typing>
            <BtnIcon onClick={handleVideo}>
                <BtnText>
                    {stop ? "Pause" : "Play"}
                </BtnText>
                <Icon>
                    <FontAwesomeIcon icon={stop ? faCirclePause : faCirclePlay} />
                </Icon>
            </BtnIcon>
            <SlMediaBox>
                <SlMediaIcons>
                    <Li>
                        <Anchor href=" " face>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor href=" " twit>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor href=" " insta>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Anchor>
                    </Li>
                </SlMediaIcons>
            </SlMediaBox>
        </HeaderSection>
    );
}

export default Header;