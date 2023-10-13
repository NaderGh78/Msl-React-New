import { CounterSection, Container, CounterItem, CounterNumber, CounterDetails, CounterDesc } from "./style.js";
import { DataCounter } from "../../../config/DataCounter";
import { Fragment } from "react";
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Counter = () => {
    return (

        <InView>
            {({ isVisible }) =>

                <CounterSection>
                    <Container>

                        <CounterItem className="wow fadeInUp" data-wow-delay="0.2s">
                            <CounterNumber>
                                <CountUp decimals={3} start={0} end={1.273} style={{ color: "#0B60A9 !important" }} />
                            </CounterNumber>
                            <CounterDetails>
                                <CounterDesc>DELIVERED PACKAGES</CounterDesc>
                            </CounterDetails>
                        </CounterItem>

                        <CounterItem className="wow fadeInUp" data-wow-delay="0.4s">
                            <CounterNumber>
                                <CountUp decimals={3} start={0} end={473.754} />
                            </CounterNumber>
                            <CounterDetails>
                                <CounterDesc>KM PER YEAR</CounterDesc>
                            </CounterDetails>
                        </CounterItem>

                        <CounterItem className="wow fadeInUp" data-wow-delay="0.6s">
                            <CounterNumber>
                                <CountUp start={0} end={25} />
                            </CounterNumber>
                            <CounterDetails>
                                <CounterDesc>YEARS OF EXPERIENCE</CounterDesc>
                            </CounterDetails>
                        </CounterItem>

                        <CounterItem className="wow fadeInUp" data-wow-delay="0.8s">
                            <CounterNumber>
                                <CountUp start={0} end={719} />
                            </CounterNumber>
                            <CounterDetails>
                                <CounterDesc>HAPPY CLIENTS</CounterDesc>
                            </CounterDetails>
                        </CounterItem>

                        <CounterItem className="wow fadeInUp" data-wow-delay="1s">
                            <CounterNumber>
                                <CountUp decimals={3} start={0} end={4.234} />
                            </CounterNumber>
                            <CounterDetails>
                                <CounterDesc>TONS OF GOODS</CounterDesc>
                            </CounterDetails>
                        </CounterItem>

                    </Container>
                </CounterSection>
            }
        </InView>

    );
}

export default Counter;