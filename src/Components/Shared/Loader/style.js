import styled from "styled-components";
import GifImg from "../../../assets/images/Home/Loader/status-load.gif";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const PreloadDiv = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: 9999;
`

export const Status = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(${GifImg});
    background-position: center;
    background-repeat: no-repeat;
    height: 200px; 
    transform: translate(-50%, -50%);
`
