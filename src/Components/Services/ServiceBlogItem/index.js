import { Link } from "react-router-dom";
import {
    ServicesInfos,
    ImgBox,
    Img,
    ContentBox,
    InnerBox,
    Overlay,
    DescBox,
    DescH6,
    DescP,
    DesCBtn
} from "./style.js";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const ServiceBlogItem = ({
    blog: {
        id,
        src,
        title,
        subTitle
    }
}) => {
    return (
        <ServicesInfos key={id} className={id === 1 || id === 3 ? "wow fadeInLeft" : "wow fadeInRight"}>
            <ImgBox>
                <Img src={src} alt={`imgService-${id}`} />
            </ImgBox>
            <ContentBox>
                <InnerBox>
                    <Overlay></Overlay>
                    <DescBox>
                        <DescH6>{title}</DescH6>
                        <DescP>
                            {subTitle}
                        </DescP>
                        <DesCBtn>
                            <Link to={`/services/${id}`}>
                                service details
                            </Link>
                        </DesCBtn>
                    </DescBox>
                </InnerBox>
            </ContentBox>
        </ServicesInfos>
    );
}

export default ServiceBlogItem;