// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swipperStyle.css";
// import required modules
import { Pagination } from "swiper";
/*+++++++++++++++++++++++++++++++++*/
import { SliderImg } from "../../../config/SliderImg";
import { Fragment } from "react";
import { TabTitle } from "../../Shared/Helpers/index.js";
import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const CompanyInfo = styled('div')`
   margin-top: 65px; 
`

const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex;
    gap:45px;

    ${mobile({ flexDirection: "column", width: "90%" })} 
`

const WrapperDesc = styled('div')``

const DescBox = styled('div')``

const DescText = styled('p')`
    font-size: 13px;
    font-weight: bold;
    line-height: 2;
    width: 100%;
`

const Slider = styled('div')`
     width: 50%;
     height: 370px; 
     ${mobile({ width: "100%" })}
`

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const AboutInfo = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (ida, className) {
            return `<span class =${className}></span>`
        }
    };

    return (
        <CompanyInfo>
            <TabTitle headingContent="about us" />
            <Container>
                <WrapperDesc className="wow fadeInUp">
                    <DescBox>
                        <DescText>
                            Located in the heart of Beirut, and engaged with global network of agencies worldwide, MSL is offering its services in the field of shipping & freight forwarding business.<br />

                            Cost-effective solutions, trust-worthy consultancy, secure shipping & fast delivery are our main targets as MSL.<br />

                            Shipping cargo is not a complex matter from now on. MSL will undertake the mission of shipping customer’s cargo from A to Z: starting from collecting cargo, to freight & even customs clearance. MSL ensures fast & safe shipment delivery all around the world at economic and competitive shipping rates.
                        </DescText>
                    </DescBox>
                </WrapperDesc>
                <Slider className="wow fadeInUp">
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {SliderImg.map(({ id, src }) => {
                            return <Fragment key={id}>
                                <SwiperSlide><img src={src} alt={`imgSlide-${id}`} /></SwiperSlide>
                            </Fragment>
                        })}

                    </Swiper>
                </Slider>
            </Container>
        </CompanyInfo>
    );
}

export default AboutInfo;