import { TitleBox, Title } from "./style.js";
import { useEffect } from 'react';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/


//make the custom heading page in all pages
export const TabTitle = (props) => {
    const { headingContent } = props;
    return (
        <TitleBox>
            <Title>{headingContent}</Title>
        </TitleBox>
    )
};

//make the Title Pages daynamic
export const useTitle = (title) => {
    useEffect(() => {
        document.title = `MSL ${title}`
    }, [title]);

    return null;
}
