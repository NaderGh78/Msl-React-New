import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const HeaderSection = styled('header')`
    position: relative;
    height: 100vh;
    z-index: 1;
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

export const Video = styled('video')`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100%;
    min-width: 100%; 
    object-fit: cover; 
    object-position: center;
    width: 100%;
    z-index: -1;
`

export const Typing = styled('div')` 
    display: inline-block;
    position: absolute;
    top: 55%;
    left: 50%;
    color: #fff; 
    transform: translate(-50%, 21%);
    width: 85%;
    text-align: center; 

    &>h1{ 
       font-weight: lighter;
       color: #fff;
       ${mobile({ fontSize: "20px" })}
    }

    &>h1>strong{ 
        color: #fff;
        font-size: 70px;
        ${mobile({ fontSize: "25px" })}
    } 
`

export const BtnIcon = styled('div')`
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: #fff;  
    width: 100px;
    user-select: none;
    cursor: pointer; 
`

export const BtnText = styled('div')`
   font-size: 20px;
   color: #fff;
   margin-bottom: 8px; 
`

export const Icon = styled('div')` 
   font-size: 30px; 
   color: #fff;
`

export const SlMediaBox = styled('div')`
    position: absolute;
    right: 15px;
    bottom: 56px;
    text-align: center;
    width: auto;
`

export const SlMediaIcons = styled('ul')` 
    display: flex; 
    flex-direction: column;
    margin-bottom: 0;
    list-style: none;
`

export const Li = styled('li')`
    margin-bottom: 13px;
`

export const Anchor = styled('a')`
    display: block;
    position: relative;
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    line-height: 36px;
    color: #fff;
    margin: 0 10px;
    overflow: hidden;
    text-align: center; 
    transition: .2s;
    font-size: 20px; 
    background: 
    ${props =>
        props.face ? "#3b5998" :
            props.twit ? "#1da1f2" :
                props.insta ? "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)" :
                    ""
    }; 

    &:hover{
        border-radius: 50%;
        color: #fff;
    } 
`  