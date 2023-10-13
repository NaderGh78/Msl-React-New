import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const FeaturesWrapper = styled('div')`
    padding: 65px 0;
    background-color: #E3E8EC;
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap:45px; 

    ${mobile({ width: "90%" })}
`

export const ServicesInfos = styled('div')`
    display: flex;
    width: 48%;
    height: 180px;
    margin: auto;

    ${mobile({ maxWidth: "100%", width: "600px", margin: "auto" })} 

    &:hover  :nth-child(2) > div > div{
       opacity: 1;
    }

    &:hover  :nth-child(2) > div > div + div{
       color: #fff !important;
    }

    &:hover  :nth-child(2) > div > div + div a{ 
       color: #fff !important;
    }
`

export const ImgBox = styled('div')`  
    width: 40%;
    height: 100%; 
`

export const Img = styled('img')`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ContentBox = styled('div')`
    width: calc(100% - 40%);
    height: 100%;
    background-color: #fff;
    padding: 10px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: -30px;
        width: 57px;
        height: 100%; 
        background-color: #fff;
        transform: skew(-12deg);
    } 
`

export const InnerBox = styled('div')`
    width: 100%;
    height: 100%;  
    background-color: #EFF3F6;
    position: relative;
    transition: all .4s;

    &::before{ 
        content: "";
        position: absolute;
        top: 0px;
        left: -28px;
        width: 45px;
        height: 100%;
        background-color: #EFF3F6;
        transform: skew(-12deg);
    }   
`

export const Overlay = styled('div')`
    width: 100%;
    height: 100%;
    background-color: #0b109f; 
    transition: all .4s; 
    opacity: 0;

    &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: -25px;
        width: 65px;
        height: 100%;
        background-color: #0b109f; 
        transform: skew(-10deg); 
    }
`

export const DescBox = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    z-index: 1; 
`

export const DescH6 = styled('h6')`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0;
`

export const DescP = styled('p')`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    margin: 20px 0;
`

export const DesCBtn = styled('div')` 
    & > a {
       color: #0B60A9;
       text-decoration: none;
       position: relative;
       font-weight: 500;
     }

    & > a::after {
        content: "\f178";
        position: absolute; 
        top: 2px;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 15px;  
        transform: translateX(-28px);
        transition: all .3s;
        opacity: 0; 
        visibility: hidden;  
    }

    & > a:hover:after {
        transform: translateX(10px);
        opacity: 1;
        visibility: visible;
    }
`

export const Anchor = styled('a')`
    display: inline-block;
    position: relative;
    text-decoration: none;
    top: -4px;
    text-align: right; 
    text-transform: capitalize;
    padding-right: 5px;
    font-size: 14px;
    font-weight: bold;
`  