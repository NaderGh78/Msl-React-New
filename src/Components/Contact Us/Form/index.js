import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormSection, Container, Text, FormBox, AddressBox, Ul, List, ContentBox, Span, Anchor } from "./style.js";
import { TabTitle } from "../../Shared/Helpers/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const FormAndAdress = () => {
    return (

        <FormSection>
            <TabTitle headingContent="get in touch" />
            <Container>
                <Text className='wow bounceInLeft'>
                    Have any questions? We are always happy to help. Do not hesitate to call us or Fill up the form below. We try to get back as soon as possible.
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
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={6} placeholder="Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit"
                            style={{
                                backgroundColor: "transparent",
                                border: "1px solid rgba(0, 0, 0, .2)",
                                color: "#000",
                                borderRadius: "0"
                            }}>
                            Submit
                        </Button>
                    </Form>
                </FormBox>

                <AddressBox className='wow bounceInRight'>
                    <Ul>
                        <List>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <ContentBox>
                                <Span>Location</Span>
                                <Span style={{ color: "#0B60A9" }}>Beirut,Lebanon.</Span>
                            </ContentBox>
                        </List>

                        <List>
                            <FontAwesomeIcon icon={faAt} />
                            <ContentBox>
                                <Span>Email Us</Span>
                                <Anchor href="mailto:lb@msl.network">lb@msl.network</Anchor>
                            </ContentBox>
                        </List>

                        <List $last>
                            <FontAwesomeIcon icon={faPhone} />
                            <ContentBox>
                                <Span>Call Us</Span>
                                <Anchor href="tel:+9613666716">+961 3 666716</Anchor>
                            </ContentBox>
                        </List>
                    </Ul>
                </AddressBox>
            </Container>
        </FormSection>
    );
}

export default FormAndAdress;