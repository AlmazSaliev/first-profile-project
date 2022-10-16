import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Card, { room } from "./UI/Card";
import { Floor, ImgApartments } from "../constants";
import { useState } from "react";
import LoadingSpinner from "./UI/LoadingSpinner";
import { useSelector } from "react-redux";

const ProjectDetail = () => {
  const apartment = useSelector((store) => store.allapartmnet.apartment);
  const id = useParams();
  const data = ImgApartments.map((i) => {
    const newdata = apartment?.filter((el) => +el.projectId === i.id);
    if (newdata.length > 0) {
      const sales = newdata?.filter((el) => el.status === "продано");
      const booking = newdata?.filter((el) => {
        if (el.status === "бронировано") {
          const not = sales.filter(
            (i) => el.floorId === i.floorId && i.roomId === el.roomId
          );
          if (not.length > 0) {
            return null;
          }
          return not;
        }
        return null;
      });
      const arraybooking = [];
      const truebooking = booking?.filter((i) => {
        const find = arraybooking?.findIndex(
          (el) => el.roomId === i.roomId && el.floorId === i.floorId
        );
        if (find === -1) {
          arraybooking.push(i);
          return i;
        }
        return null;
      });
      return { id: i.id, sales: sales, booking: truebooking };
    }
    return i;
  });

  const [show, setshow] = useState(false);
  setTimeout(() => {
    setshow(true);
  }, 1500);

  const title = ImgApartments.find((i) => i.id === +id.id);
  const allstatistic = data?.find((i) => i.id === +id.id);
  return (
    <WrapperContainer>
      <LinkRout>
        <Link to="/projects">Проекты </Link>
      </LinkRout>
      <WrapperText>
        <h1>{title.title}</h1>
        <WrapperSt>Статистика</WrapperSt>
        <BorderBottom />
        <p>
          Этажей: {Floor.length} , квартир: {Floor.length * room.length} , из
          них: продано:
          <WrapperSales> {allstatistic.sales?.length}</WrapperSales> /
          бронировано:
          <WrapperBooking> {allstatistic.booking?.length}</WrapperBooking> /
          свободные:
          <WrapperFree>
            {" "}
            {Floor.length * room.length -
              allstatistic.sales?.length -
              allstatistic.booking?.length}
          </WrapperFree>
          .
        </p>
      </WrapperText>
      {show || <LoadingSpinner />}
      <Container>
        {Floor.map((el) => {
          return <Card key={el.id} id={el.id} image={el.image} />;
        })}
      </Container>
    </WrapperContainer>
  );
};
export default ProjectDetail;

const LinkRout = styled("div")`
  position: absolute;
  & > a {
    text-decoration: none;
    color: #002102;
    border-bottom: 0.4vh solid #002102;
  }
  margin: 0 auto;
  top: 110px;
  width: 90%;
  left: 5vw;
  font-size: 1.5vw;
  @media screen and (max-width: 700px) {
    font-size: 2.5vw;
    & > a {
      border-bottom: 0.2vh solid #002102;
    }
  }
`;
const WrapperSales = styled("span")`
  color: red;
`;
const WrapperBooking = styled("span")`
  color: orange;
`;
const WrapperFree = styled("span")`
  color: blue;
`;
const WrapperSt = styled("p")`
  font-weight: bold;
  border-bottom: 0.4vw solid darkgreen;
  margin-bottom: 2%;
`;
const BorderBottom = styled("span")`
  position: absolute;
  box-shadow: 0px 5px 10px 1px darkgreen;
  height: 2%;
  width: 100%;
  left: 0;
  top: 60%;
`;
const WrapperText = styled("div")`
  position: relative;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.5vw;
  color: #0b363c;
  & > h1 {
    text-transform: capitalize;
  }
  @media screen and (max-width: 700px) {
    font-size: 2vw;
    & > p {
      font-size: 2.3vw;
    }
  }
`;
const WrapperContainer = styled("div")`
  margin: 0 auto;
  margin-top: 160px;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-top: 140px;
  }
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  gap: 15px;
`;
