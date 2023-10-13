import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { mobile } from "../../../responsive";
import Logo from "../../../assets/images/Shared/main-logo.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Img = styled('img')` 
    width: 95px;
    max-width: 100%;
    height: auto;
`

const STyledNav = styled(Navbar)`
    width: 100%;
    background-color: rgba(0, 0, 0, .2) !important;
    position: fixed;
    top: 0; 
    padding: 0;
    z-index: 4;

    &.fixed{
        background-color: #7e7e7e !important;
        border-bottom: 2px solid #a0d9e6;
    }

    & img{ 
        ${mobile({ marginLeft: "10px" })}
    }

    /* make container full width on mobile */
    & > :first-child{ 
        ${mobile({ maxWidth: "100% !important" })}
    }

    & button{ 
        ${mobile({
    width: "45px",
    height: "45px",
    fontSize: "25px",
    border: "none",
    color: "#a0d9e6",
    border: "3px solid",
    borderRadius: "50%",
    boxShadow: "none !important",
    marginRight: "15px",
    padding: "0",
    outline: "none"
})}
    } 

    /* style collaps div */
    & :first-child > :nth-child(3){ 
        ${mobile({ backgroundColor: "#0b109f" })}
    }
`

const StyledLink = styled(Nav.Link)`
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    text-transform: capitalize;  
    color: #fff;  
    /* in case the link is has props */
    position: ${props => props.$last && "relative"}; 
    padding : ${props => props.$last ? " 7px 6px 5px 3px !important" : "7px 30px 5px 0 !important"};
    background-color: ${props => props.$last && "#a0d9e6"}; 
    ${mobile({ textAlign: "center", padding: "9px 0 !important", borderBottom: "1px solid #888" })}

    &:before{
        content: '';
        position: absolute;
        bottom: -2px;
        background-color: #a0d9e6;
        width: ${props => props.$last ? "0" : "20px"};
        height: ${props => props.$last ? "0" : "3px"};  
        transition: all .3s; 
        ${mobile({ display: "none" })}
    }

    &::after{
        content: "";
        position: absolute;
        width: ${props => props.$last && "13px"}; 
        top: ${props => props.$last && "0"}; 
        left: ${props => props.$last && "-8px"};
        background-color: #a0d9e6;
        height: ${props => props.$last && "100%"}; 
        transform: ${props => props.$last && "skew(-15deg)"};   
        ${mobile({ transform: "none !important", width: "0" })}
    }

    &:hover{ 
        color: ${props => props.$last ? "#fff" : "#a0d9e6"} 
    }

    &:hover:before{
        width: ${props => props.$last ? "0" : "50px"};
    }

    &.active{
        color: ${props => props.$last ? "#fff" : "#a0d9e6"};
        font-weight: bold;
    }

    &.active::before{
        width: ${props => props.$last ? "0" : "50px"};
    }  
`

const MyNav = styled(Nav)`
    position: relative;
    border-bottom: 1px solid rgba(225, 225, 225, 0.7); 
    padding: 0; 

    ${mobile({ borderBottom: "none" })}

    & :last-child{
       ${mobile({ borderBottom: "none" })}
    } 
`

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const NavbarSection = () => {

    //initialy make the first router with active class
    const location = useLocation("/");
    const windowSize = useRef([window.innerWidth]);
    const el = useRef();
    const refBtn = useRef();
    const refCollapse = useRef();
    const [fixed, setFixed] = useState(false);
    const [url, setUrl] = useState(null);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    /*+++++++++++++++++++++++++++++++*/

    useEffect(() => {

        const handelFixed = () => {

            if (window.pageYOffset >= el.current.clientHeight) {

                setFixed(true);

                if (refCollapse.current.classList.contains('show')) {

                    refBtn.current.click();

                }

            } else {

                setFixed(false);

            }

        }

        setUrl(location.pathname);


        window.onscroll = function () { handelFixed() };

    }, [fixed, location]);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const handleClickLinks = () => {

        //do the following when window size is less than 768px
        if (windowSize.current <= 768) {

            refBtn.current.click();

        }

        //make the page scroll top when router change on click
        // document.documentElement.scrollTo(0, 0);

    }

    /*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
    /*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
    /*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

    return (
        <div className="navbar p-0">
            <STyledNav bg="light" expand="lg" className={fixed && "fixed"} ref={el}>
                <Container className='p-0'>
                    <Navbar.Brand as={Link} to={"/"} className='p-0'><Img src={Logo} alt="main-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} ref={refBtn}> <FontAwesomeIcon icon={isNavCollapsed ? faBars : faTimes} /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className={`${isNavCollapsed ? '' : 'show'}`} ref={refCollapse}>
                        <MyNav className="ms-auto">
                            <StyledLink as={Link} to={"/"} className={url === "/" ? " active" : ""} onClick={handleClickLinks}>home</StyledLink>
                            <StyledLink as={Link} to={"/about"} className={url === "/about" ? " active" : ""} onClick={handleClickLinks}>about us</StyledLink>
                            <StyledLink as={Link} to={"/services"} className={url === "/services" ? " active" : ""} onClick={handleClickLinks}>services</StyledLink>
                            <StyledLink as={Link} to={"/contact"} className={url === "/contact" ? " active" : ""} onClick={handleClickLinks}>contact us</StyledLink>
                            <StyledLink as={Link} to={"/quote"} $last onClick={handleClickLinks}>get a quote</StyledLink>
                        </MyNav>
                    </Navbar.Collapse>
                </Container>
            </STyledNav>
        </div>
    )
}

export default NavbarSection;