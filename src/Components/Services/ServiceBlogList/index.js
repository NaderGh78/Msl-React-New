import { Fragment } from "react";
import ServiceBlogItem from "../ServiceBlogItem";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const ServiceBlogList = ({ serviceBlog }) => {
    // console.log(serviceBlog.id);
    return (
        <Fragment>
            {serviceBlog.map((blog, i) => (
                <ServiceBlogItem blog={blog} key={i} />
            ))}
        </Fragment>
    );
}

export default ServiceBlogList;