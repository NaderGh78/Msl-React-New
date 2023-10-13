import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const CounterSection = styled('div')`
    background-color: #000;
    padding: 50px 0 50px 0;
    margin-top: 50px; 
    ${mobile({ marginTop: "10px", padding: "0" })}
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

export const CounterItem = styled('div')` 
    width: 200px;
    ${mobile({ width: "100%", textAlign: "center", borderBottom: "1px solid #0b60a9", padding: "20px 0" })} 

    &:last-of-type{
        ${mobile({ borderBottom: "none" })} 
    }
`

export const CounterNumber = styled('h2')`
    position: relative;
    color: #0B60A9;

    &::after{
        content: '';
        position: absolute;
        display: block;
        bottom: -10px;
        border-top: 2px solid #0B60A9;
        width: 50px;
        ${mobile({ display: "none" })}
    }
`

export const CounterDetails = styled('div')``

export const CounterDesc = styled('p')`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 0;
    text-transform: uppercase;
`