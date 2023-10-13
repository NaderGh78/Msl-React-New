import { Company, Reach } from "../../../config/data";
import { FooterSocialLinks } from "../../../config/FooterSocialLinks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FooterSection,
    Overlay,
    FooterContent,
    Container,
    SingleContent,
    Title,
    Anchor,
    Img,
    BoxFlex,
    Text,
    List,
    ListAnchor,
    Icons,
    Copyright,
    CopyrighText
} from "./style.js";
import { Fragment } from "react";
import footerLogo from "../../../assets/images/Shared/logo.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Footer = () => {

    return (
        <FooterSection>
            <Overlay></Overlay>
            <FooterContent>
                <Container>
                    <SingleContent>
                        <Title>company</Title>
                        {Company.map(({ id, name }) => {
                            return <div key={id}>
                                <Anchor href="">{name}</Anchor>
                            </div>
                        })}
                    </SingleContent>

                    <SingleContent>
                        <Title>Reach Us</Title>
                        {Reach.map(({ id, icon, details }) => {
                            return <div key={id}>
                                <Anchor href=""><FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} /> {details}</Anchor>
                            </div>
                        })}
                    </SingleContent>
                    <SingleContent $last>
                        <Img src={footerLogo} alt="footer-logo" />
                        <BoxFlex>
                            <Text>
                                find us on social media
                            </Text>
                            <List>
                                {FooterSocialLinks.map(({ id, icon }) => (
                                    <Fragment key={id}>
                                        <ListAnchor id={id}><FontAwesomeIcon icon={icon} color="#fff" /></ListAnchor>
                                    </Fragment>
                                ))}
                            </List>
                        </BoxFlex>

                    </SingleContent>
                </Container>
            </FooterContent>

            <Copyright>
                <CopyrighText>Copyright &copy; mediterranean sea lines. 2023. All rights reserved. </CopyrighText>
            </Copyright>

        </FooterSection>
    );
}

export default Footer;