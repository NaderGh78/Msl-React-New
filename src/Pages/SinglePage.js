import { Link, useParams } from "react-router-dom";
import { ServicesData } from "../config/ServicesData";
import { TabTitle } from "../Components/Shared/Helpers/index";
import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mobile } from "../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Header = styled('header')`
    height: 65vh;
    position: relative;
    background-color: #000;
`

const BannerLink = styled('div')`
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
`

const Div = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex; 
    align-items: center; 

    ${mobile({ justifyContent: "center" })}
`

const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex; 
    gap:45px;  

    ${mobile({ flexDirection: "column", width: "550px", maxWidth: "90%" })}
`

const Anchor = styled('a')``

const Span = styled('span')`
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: capitalize;
`

const SingleMainContent = styled('div')` 
    padding: 65px 0; 
`

const ImgBox = styled('div')`
    flex: 1;
    position: relative;
    overflow: hidden;
    z-index: 1; 
    box-shadow: 0 0px 17px #d2cfcf;
    background-color: #FFF;
    padding: 6px;
    cursor: pointer;

    &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.4);
        height: 100%;
        width: 100%;
        opacity: 0; 
        transition: all .3s linear 0s;
        z-index: 1;
        cursor: pointer;
    }

    &:hover:before{
        opacity: 1; 
    }

    &:hover > img{
        transform: scale(1.05);
    }
`

const Img = styled('img')`
    max-width: 100%;
    transition: all .3s linear 0s;
`

const FullDesc = styled('div')`
    flex: 1;
`

const Text = styled('p')`
    font-size: 16px;
    font-weight: bold;
    color: #0b109f;
`

const Ul = styled('ul')`
    list-style: none;
    margin: 0;
    padding: 0;
`

const List = styled('li')`
    font-size: 16px;
    font-weight: bold;
    color: #0b109f;
    margin-bottom: 10px;
`
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const SinglePage = () => {

    const { id } = useParams();

    const [singleData, setSingleData] = useState(null);

    useEffect(() => {

        let blog = ServicesData.find((singleData) => singleData.id === parseInt(id));

        if (blog) {
            setSingleData(blog);
        }

    }, [])

    /*+++++++++++++++++++++++++++*/

    return (

        <Fragment >
            {singleData && (
                <div className="single-page" key={singleData.id}>
                    <Header></Header>
                    <BannerLink>
                        <Div>
                            <Link to="/services">Services</Link>
                            <Span>
                                <FontAwesomeIcon icon={faAngleDoubleRight} style={{ fontSize: "12px", marginRight: "4px" }} />
                                {singleData && singleData.title}
                            </Span>
                        </Div>
                    </BannerLink>
                    <SingleMainContent>
                        {singleData && <TabTitle headingContent={singleData.title} />}
                        <Container>
                            {singleData && (
                                <Fragment>
                                    <ImgBox>
                                        <Img src={singleData.src} alt={`${singleData.title.toLowerCase()}-img`} />
                                    </ImgBox>
                                    <FullDesc>
                                        <Text>
                                            {singleData.text}
                                        </Text>
                                        <Ul>
                                            {singleData.listContent && singleData.listContent.map((li) => (
                                                <List>
                                                    <FontAwesomeIcon icon={faAngleDoubleRight} style={{ fontSize: "12px", marginRight: "4px" }} />
                                                    {li}
                                                </List>
                                            ))}
                                        </Ul>
                                    </FullDesc>
                                </Fragment>
                            )}
                        </Container>
                    </SingleMainContent>
                </div>
            )}
        </Fragment>
    );
}

export default SinglePage;