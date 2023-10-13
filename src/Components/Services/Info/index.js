import { FeaturesWrapper, Container } from "./style.js";
import { ServicesData } from "../../../config/ServicesData";
import { useState } from "react";
import { TabTitle } from "../../Shared/Helpers/index.js";
import ServiceBlogList from "../ServiceBlogList/index.js";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Info = () => {

    const [serviceBlog, setServiceBlog] = useState(ServicesData);
    return (
        <FeaturesWrapper>
            <TabTitle headingContent="our services" />
            <Container>
                {serviceBlog && <ServiceBlogList serviceBlog={serviceBlog} />}
            </Container>
        </FeaturesWrapper>
    );
}

export default Info;