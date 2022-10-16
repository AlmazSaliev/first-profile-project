import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import ImageClicking from "../ImageClicking";

export const room = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
];

const Card = (props) => {
  const { image, id } = props;
  const status = useSelector((store) => store.allapartmnet.apartment);
  const data = status?.filter((i) => +i.floorId === +id);
  const newdata = room?.map((i) => {
    const obj = data?.filter((el) => +el.roomId === i.id);
    if (obj?.length > 0) {
      const sales = obj?.filter((i) => i.status === "продано");
      if (sales?.length > 0) {
        return { id: i.id, status: sales[0].status };
      }
      const booking = obj?.filter((i) => {
        if (i.status === "бронировано") {
          return obj.filter((el) => el.roomId !== i.roomId);
        }
        return null;
      });
      if (booking.length > 0) {
        return { id: i.id, status: booking[0].status };
      }
    }
    return i;
  });
  console.log(newdata, "newdata");
  const sales = newdata?.filter((i) => i?.status === "продано");
  // const booking = newdata?.filter((i) => {
  //   if (i?.status === "бронировано") {
  //     const truebooking = sales.filter((e) => e.id === i.id);
  //     if (truebooking.length > 0) {
  //       return null;
  //     }
  //     return truebooking;
  //   }
  //   return null;
  // });
  const booking = newdata?.filter((i) => i?.status === "бронировано");
  const free = newdata?.filter((i) => i?.status === undefined);
  return (
    <div>
      <CardWrap>
        <WrapperFloor>
          <p>{id}-й этаж</p>
        </WrapperFloor>
        <Section>
          <ImageClicking
            id={id}
            images={image}
            idroom1={newdata[0].id}
            statusroom1={newdata[0].status}
            idroom2={newdata[1].id}
            statusroom2={newdata[1].status}
            idroom3={newdata[2].id}
            statusroom3={newdata[2].status}
            idroom4={newdata[3].id}
            statusroom4={newdata[3].status}
            idroom5={newdata[4].id}
            statusroom5={newdata[4].status}
            idroom6={newdata[5].id}
            statusroom6={newdata[5].status}
            idroom7={newdata[6].id}
            statusroom7={newdata[6].status}
            idroom8={newdata[7].id}
            statusroom8={newdata[7].status}
            idroom9={newdata[8].id}
            statusroom9={newdata[8].status}
            idroom10={newdata[9].id}
            statusroom10={newdata[9].status}
            idroom11={newdata[10].id}
            statusroom11={newdata[10].status}
            idroom12={newdata[11].id}
            statusroom12={newdata[11].status}
            idroom13={newdata[12].id}
            statusroom13={newdata[12].status}
            idroom14={newdata[13].id}
            statusroom14={newdata[13].status}
            idroom15={newdata[14].id}
            statusroom15={newdata[14].status}
            idroom16={newdata[15].id}
            statusroom16={newdata[15].status}
          />
        </Section>
        <Aside>
          <Redp>Продано: {sales?.length}</Redp>
          <Yellowp>Бронировано: {booking?.length}</Yellowp>
          <Bluep>Свободные: {free?.length}</Bluep>
        </Aside>
      </CardWrap>
    </div>
  );
};

export default Card;
const WrapperFloor = styled("div")`
  position: absolute;
  width: 20%;
  height: 20%;
  color: darkgreen;
  top: 10%;
  right: 23%;
  & > p {
    font-size: 2vw;
    position: absolute;
    z-index: 2;
  }
`;
const CardWrap = styled("div")`
  width: 100%;
  height: 80%;
  position: relative;
  margin: 0 auto;
`;
const Section = styled("div")`
  margin: 0 auto;
  width: 100%;
`;
const Aside = styled("aside")`
  position: absolute;
  top: 15%;
  right: 15%;
  border-radius: 2px solid;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  width: 30%;
  padding: 2%;
`;
const Redp = styled("p")`
  font-size: 2vw;
  color: red;
`;
const Yellowp = styled("p")`
  font-size: 2vw;
  color: orange;
`;
const Bluep = styled("p")`
  font-size: 2vw;
  color: blue;
`;
