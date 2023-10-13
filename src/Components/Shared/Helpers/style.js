import styled from "styled-components";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const TitleBox = styled('div')`
    width: 100%;
    text-align: center;
`

export const Title = styled('h2')`
    display: inline-block;
    position: relative;
    margin-bottom: 40px;
    text-transform: uppercase;
    position: relative;
    text-transform: uppercase;

    &::before{
        content: "";
        position: absolute;
        top: 50%;
        left: -80px;
        width: 50px;
        height: 3px;
        background-color: #a0d9e6;
    }

    &::after{
        content: "";
        position: absolute;
        top: 34%;
        left: -31px;
        width: 13px;
        height: 13px;
        background-color: #a0d9e6;
        border-radius: 50%; 
    }
`