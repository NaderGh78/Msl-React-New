import Card from 'react-bootstrap/Card';
import { AllCards } from "../../../config/AllCards";
import { Fragment } from 'react';
import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const CardSection = styled('div')``

const Container = styled('div')`
    max-width: 1140px;
    margin: 70px auto ;
    padding: 0; 
    display: flex; 
    justify-content: space-between;
    overflow: hidden;
    
    ${mobile({ flexDirection: "column", width: "90%" })}
`

const StyledCard = styled(Card)`
${mobile({ maxWidth: "100% !important", width: "600px !important", margin: "0 auto 20px !important" })}
`

const StyledBody = styled(Card.Body)`
    position: relative;
    font-size: 13px;
    font-weight: bold;
    line-height: 2; 
`

const StyldTitle = styled(Card.Title)`
    position: absolute;
    bottom: calc(100% - 20px);
    left: 0;
    text-transform: uppercase;
    background-color: #a0d9e6;
    width: 65%;
    color: #0b109f;
    margin-bottom: 0;
    line-height: 100%;
    padding: 12px 0 8px 9px;
    text-align: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        right: -20px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 40px 0 0 20px;
        border-color: transparent transparent transparent transparent;
        border-left-color: #a0d9e6;
    }
`

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Cards = () => {
    return (
        <CardSection>
            <Container>
                {AllCards.map(({ id, src, title, textTop, descText }) => {
                    return <Fragment key={id}>
                        <StyledCard style={{ width: '22rem' }} key={id} className={id === 1 ? "wow fadeInLeftBig" : id === 2 ? "wow fadeInUpBig" : "wow fadeInRightBig"}>
                            <Card.Img variant="top" src={src} alt={`imgCard-${id}`} />
                            <StyledBody>
                                <StyldTitle>{title}</StyldTitle>
                                <Card.Text className='mt-4' component="div">
                                    <span className='mb-3'>{`>> ${textTop}`}</span>
                                    {descText}
                                </Card.Text>
                            </StyledBody>
                        </StyledCard>
                    </Fragment>
                })}
            </Container>
        </CardSection>
    );
}

export default Cards;