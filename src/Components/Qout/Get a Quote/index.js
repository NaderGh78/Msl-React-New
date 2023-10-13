import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormSection, Container, Text, FormBox, ImgBox, Img } from "./style.js";
import { TabTitle } from "../../Shared/Helpers/index.js";
import TruckImg from "../../../assets/images/Quote/truckImg.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const GetQoute = () => {
    return (
        <FormSection>
            <TabTitle headingContent="Quote" />

            <Container>
                <Text className='wow bounceInLeft'>
                    We get you a better quote
                </Text>
            </Container>

            <Container>
                <FormBox className='wow bounceInLeft'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={6} placeholder="Message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ backgroundColor: "transparent", border: "1px solid rgba(0, 0, 0, .2)", color: "#000", borderRadius: "0" }}>
                            Submit
                        </Button>

                    </Form>
                </FormBox>

                <ImgBox className='wow bounceInRight'>
                    <Img src={TruckImg} alt="truckImg" />
                </ImgBox>
            </Container>
        </FormSection>
    );
}

export default GetQoute; 