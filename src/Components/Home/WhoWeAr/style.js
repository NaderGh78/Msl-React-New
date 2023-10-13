import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const Container = styled('div')`
    max-width: 1140px;
    margin: 50px auto 0;
    padding: 0;
    overflow: hidden;
`

export const ContentBox = styled('div')`
    display: flex;  
    ${mobile({ flexDirection: "column" })}
`

export const ImgCaption = styled('div')`
   position: absolute;
    top: 100%;
    right: 0; 
    width: 100%;
    height: 100%;
    background-color: rgba(160, 217, 230, 0.6);
    transition: all 0.5s ease; 

    &::before{
        content: '';
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 100%;
        left: 10px;
        border: 5px solid #ffffff;
        border-bottom: 0;
        border-right: 0; 
        opacity: 0; 
        transition: all .5s ease .5s;
    }
`

export const ImgContainer = styled('div')`
    width: 100%;
    position: relative;  
    ${mobile({ width: "80%", maxWidth: "340px", margin: "0 auto 40px" })} 

    &::before{
        content: '';
        position: absolute; 
        top: 10px;
        right: -10px;
        bottom: -10px;
        left: 10px;
        border: 1px solid #C3C3C3; 
        z-index: -1;
    }  
`

export const Div = styled('div')`
    position: relative;
    overflow: hidden;  

    &:hover  ${ImgCaption}::before {
        bottom: 10px;
        opacity: 1;
    }

    &:hover  ${ImgCaption} {
        top: 0;
    } 
`

export const Img = styled('img')` 
    width: 100%;
    height: 100%; 
`

export const DescBox = styled('div')`
    margin-left: 49px;
`

export const DescText = styled('p')`
    font-size: 19px;
    line-height: 1.6;
`