import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import NotFoundImg from "../../src/assets/images/Shared/404.gif";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Div = styled('div')`
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      width: 55%; 
      height: 530px;

      ${mobile({ maxWidth: "650px", width: "90%", height: "250px" })}
    }

    & > div img{
      width: 100%;
      height: 100%;
      object-fit: cover;

      ${mobile({ maxWidth: "100%", objectFit: "contain" })}
    }

    & > div a{
      display: block;
      margin-top: 10px;
      font-size: 20px;
      text-decoration: none;
      color: #273d53;
      text-align: center;
      text-transform: capitalize;

      ${mobile({ fontSize: "16px" })}
    }
`

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const NotFound = () => {
  return (
    <Div>
      <div>
        <img src={NotFoundImg} alt="404Img" />
        <Link to="/">not found result ,go to home page.</Link>
      </div>
    </Div>
  );
}

export default NotFound;