import styled from "styled-components";
import contactImg from "../../../assets/images/Contact/contactBg.jpg";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const HeaderSection = styled('header')`
    background-image: url(${contactImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 65vh;
    position: relative;
`

export const Overlay = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    height: 100%;
    width: 100%;
`