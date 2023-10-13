import styled from "styled-components";
import { mobile } from "../../../responsive";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const FormSection = styled('div')`
    padding: 65px 0;
`

export const Container = styled('div')`
    max-width: 1140px;
    margin: auto;
    padding: 0px;
    display: flex;  
    justify-content: space-between;
    overflow: hidden;
    
    ${mobile({ flexDirection: "column", maxWidth: "90%" })}
`

export const Text = styled('p')`
    font-size: 16px;
    width: 50%;

    ${mobile({ width: "100%" })}
`

export const FormBox = styled('div')`
    flex: 1;
    ${mobile({ width: "100%" })}
`

export const AddressBox = styled('div')`
    flex: 1; 
`

export const Ul = styled('ul')`
    list-style: none;
    padding: 0;
    margin: 0; 
    border: 1px solid #E5E5E5;
    height: 350px;
    margin-left: auto;
    padding: 0 20px;
    width: 75%;

    ${mobile({ width: "100%", marginTop: "30px" })}
`

export const List = styled('li')`
    display: flex;
    align-items: center; 
    border-bottom: ${porps => porps.$last ? "none" : "1px solid #E5E5E5"};  
    height: 33.3%;

    & > :first-child{
        font-size: 28px;
        color: #a0d9e6;
    }
`

export const Icon = styled('i')``

export const ContentBox = styled('div')`
    margin-left: 30px;
`

export const Span = styled('span')`
    font-size: 17px;
    font-weight: bold;
    display: block;
`
export const Anchor = styled('a')`
    color: #0B60A9;
    font-size: 17px;
    text-decoration: none;
    font-weight: bold;
`