import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const FeaturesWrapper = styled('div')`
    padding: 65px 0;
    background-color: #E3E8EC;
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap:45px; 
    overflow: hidden;

    ${mobile({ width: "90%" })}
`