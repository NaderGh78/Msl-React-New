import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const FormSection = styled('div')`
    padding: 65px 0;
    background-image: url("/assets/images/Quote/sectionBg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0px;
    display: flex;  
    justify-content: space-between;
    overflow: hidden;
    
    ${mobile({ flexDirection: "column", width: "90%" })}
`

export const Text = styled('p')`
    font-size: 16px;
    width: 50%;

    ${mobile({ width: "100%" })}
`

export const FormBox = styled('div')` 
    flex: 1;
`

export const ImgBox = styled('div')` 
    flex: 1;
    text-align:center; 
`

export const Img = styled('img')`
    max-width: 70%;
    height: auto;

    ${mobile({ width: "400px", maxWidth: "90%", marginTop: '30px' })}
` 