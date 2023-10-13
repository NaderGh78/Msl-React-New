import styled from "styled-components";
import { mobile } from "../../../responsive";
import footerBg from "../../../assets/images/Shared/footer-bg.jpg";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const FooterSection = styled('footer')` 
    position: relative; 
    background-image: url(${footerBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
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

export const FooterContent = styled('div')` 
    padding: 50px 0;
    position: relative;
    z-index: 2;
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 30px; 

    ${mobile({ flexDirection: "column" })} 
`

export const SingleContent = styled('div')` 
    width: 100%; 
    display: ${props => props.$last && "flex"};   
    flex-direction: ${props => props.$last && "column"};
    align-items: ${props => props.$last && "center"};
    justify-content: ${props => props.$last && "center"};

    ${mobile({ width: "90%", margin: "auto" })}
`

export const Title = styled('h3')`
    text-transform: capitalize;
    color: #fff;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding-bottom: 13px;
    margin-bottom: 20px;

    &:after{
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: #a0d9e6;
        height: 4px; 
        transition: width .3s;
        width: 54px;
    }
`

export const Anchor = styled('a')`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 22px;

    &:hover,&:hover > i{
        color: #a0d9e6;
    }
`

export const Img = styled('img')` 
    height: auto;
    max-width: 60px; 
`

export const BoxFlex = styled('div')``


export const Text = styled('p')`
    color: #fff;
    margin-top: 20px;
    text-transform: capitalize;
    font-weight: bold;
`

export const List = styled('div')`
    display: flex;
`

export const ListAnchor = styled('a')`
    display: block;
    position: relative;
    border: 2px solid #fff; 
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    overflow: hidden;
    text-align: center; 
    transition: .2s;
    width: 40px;
    font-size: 20px;
    cursor: pointer; 
    background: 
    ${props =>
        props.id === 1 ? "#3b5998" :
            props.id === 2 ? "#1da1f2" :
                props.id === 3 ? "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)" :
                    ""
    }; 

    &:hover {
        border-radius: 50%;
    }
`

export const Icons = styled('i')`
    color: #fff;
`

export const Copyright = styled('div')`
    background-color: #10151B;
    padding: 25px 0;
    text-align: center;

    ${mobile({ padding: "20px 0" })}
`

export const CopyrighText = styled('p')`
    font-size: 18px;
    color: #7d7d7d;
    margin-bottom: 0;
    font-weight: 600;
    text-transform: capitalize;

    ${mobile({ fontSize: "14px" })} 
` 