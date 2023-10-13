import styled from "styled-components";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const MapSection = styled('section')`
    margin-bottom: 50px;
`

const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0px; 
`

const Iframe = styled('iframe')` 
    border: 0;
`

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Map = () => {
    return (
        <MapSection>
            <Container>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.14843782460406!2d35.508305600772374!3d33.89341677078618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17b816aa7cb9%3A0xce1670d0bf3e6cd0!2sMediterranean%20Sea%20Lines!5e1!3m2!1sen!2slb!4v1621082781342!5m2!1sen!2slb"
                    width="100%" height="370" allowfullscreen="" loading="lazy">
                </Iframe>
            </Container>
        </MapSection>
    );
}

export default Map;