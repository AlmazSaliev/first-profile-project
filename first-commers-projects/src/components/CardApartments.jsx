import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardApartments = (props) => {
  const navigate = useNavigate();
  return (
    <WrapperBox onClick={() => navigate(`/projects/${props.data.id}`)}>
      <div>
        <Img src={props.data.images} alt="photo" />
      </div>
      <div>
        <h1>{props.data.title}</h1>
        <div>
          <p>{props.data.address}</p>
          <img src={props.data.logo} alt="logo" />
        </div>
      </div>
    </WrapperBox>
  );
};
export default CardApartments;
const Img = styled.img``;
const WrapperBox = styled.div`
  width: 22%;
  padding-bottom: 2%;
  border-radius: 2%;
  box-shadow: 0px 0px 15px 0px grey;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & > :nth-child(1) {
    border-radius: 2%;
    width: 100%;
    height: 70%;
    & > img {
      border-radius: 2%;
      width: 100%;
      height: 100%;
    }
  }
  & > :nth-child(2) {
    & > h1 {
      text-align: center;
      font-size: 150%;
      margin-top: 4%;
      color: #494949;
      text-transform: uppercase;
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 85%;
      margin: 0 auto;
      & > p {
        width: 50%;
        font-size: 100%;
      }
      & > img {
        width: 25%;
      }
    }
  }
  :hover {
    box-shadow: 0px 0px 10px 8px grey;
    background-color: #f7f6f1;
    transition-duration: 1s;
    & > :nth-child(1) {
      overflow: hidden;
      & > img {
        transform: scale(1.2);
        transition-duration: 2s;
      }
    }
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    padding-bottom: 8%;
  }
`;
