import { Container, ContentBox, ImgCaption, ImgContainer, Div, Img, DescBox, DescText } from "./style.js";
import { TabTitle } from "../../Shared/Helpers/index.js";
import wwwImg from "../../../assets/images/Home/wwa_img.jpg";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const WhoWeAr = () => {
    return (
        <Container>
            <TabTitle headingContent="who we are" />
            <ContentBox>
                <ImgContainer className="wow fadeInUpBig">
                    <Div>
                        <Img src={wwwImg} alt="long-img" />
                        <ImgCaption></ImgCaption>
                    </Div>
                </ImgContainer>
                <DescBox className="wow fadeInRight">
                    <DescText>
                        MSL-Mediterranean Sea Lines, is a privately-owned organization founded in Liberiaand headquartered in Lebanon.
                        <br /><br />
                        A global business engaged in the shipping, transport, customs clearance & logistics sector.
                        <br /><br />
                        Evolved from single local office, and through a global network of representatives & agencies all over the world, MSL is launching its services supported by a team that renders high caliber of professionalism beside combining efficiency and reliability,to provide the best possible responding to the needs of our customers.
                        <br /><br />
                        MSL aims to facilitate international trade between global seaports across all continents, focusing on East Mediterranean Route.
                    </DescText>
                </DescBox>
            </ContentBox>
        </Container>
    );
}

export default WhoWeAr;