import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ImgApartments, Rooms } from "../constants";
import {
  DeleteApartment,
  GetAllApartment,
  PostApartment,
} from "../store/slice/AllDataApartment";
import Button from "./UI/Button";
import Input from "./UI/Input";

const ProjectInnerPage = () => {
  const { apartment, statusoneapartment } = useSelector(
    (store) => store.allapartmnet
  );
  const idproject = useLocation();
  const id = idproject.pathname.split("/");
  const title = ImgApartments.find((i) => i.id === +id[2]);
  const data = Rooms.find((i) => i.id === +id[4]);
  const [radio, setRadio] = useState({
    status: "",
    sales: false,
    booking: false,
  });
  const [values, setValues] = useState({
    buyerName: "",
    phoneNamber: "",
    date: "",
    pay: "",
  });
  const needapartment = apartment?.filter((i) => {
    if (
      i.roomId === `${id[4]}` &&
      i.floorId === `${id[3]}` &&
      i.projectId === `${id[2]}`
    ) {
      return i;
    }
    return null;
  });
  const needstatus = needapartment?.find((i) => i.status === "продано");
  const dispatch = useDispatch();

  const getValuesHandler = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const radioButtonHandler = (e) => {
    if (e.target.name === "sales") {
      setRadio({
        sales: !radio.sales,
        status: e.target.value,
      });
    }
    if (e.target.name === "booking") {
      setRadio({
        booking: !radio.booking,
        status: e.target.value,
      });
    }
  };

  const deleteHandler = (id) => {
    dispatch(DeleteApartment(id));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      PostApartment({
        projectId: id[2],
        floorId: id[3],
        roomId: id[4],
        name: values.buyerName,
        date: values.date,
        price: values.pay,
        phoneNumber: values.phoneNamber,
        status: radio.status,
      })
    );
    setValues({
      buyerName: "",
      phoneNamber: "",
      date: "",
      pay: "",
    });
    setRadio({
      sales: false,
      booking: false,
    });
  };

  useEffect(() => {
    dispatch(GetAllApartment());
    window.scroll(0, 0);
  }, [dispatch, statusoneapartment]);
  return (
    <Wrapper>
      <LinkRout>
        <Link to="/projects">Проекты</Link> / <Link to={-1}>{title.title}</Link>
      </LinkRout>
      <Div>
        <p>{title.title}</p>
        <p>{id[3]}-й этаж</p>
        <p>квартира № {id[4]}</p>
        <span> </span>
      </Div>
      <WrapImage>
        <img width="50%" src={data.image} alt="" />
      </WrapImage>
      {needstatus?.status !== "продано" && (
        <WrapForm onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                name="sales"
                type="radio"
                checked={radio.sales}
                value="продано"
                onChange={radioButtonHandler}
                id="1"
              />
              <label htmlFor="1">Продать</label>
            </div>
            <div>
              <input
                name="booking"
                type="radio"
                checked={radio.booking}
                value="бронировано"
                onChange={radioButtonHandler}
                id="2"
              />
              <label htmlFor="2">Бронь</label>
            </div>
          </div>
          <Input
            name="buyerName"
            onChange={getValuesHandler}
            placeholder="Ф. И. О."
            value={values.buyerName}
          />
          <Input
            name="phoneNamber"
            onChange={getValuesHandler}
            placeholder="Телефон:"
            value={values.phoneNamber}
          />
          <Input
            name="date"
            onChange={getValuesHandler}
            type="date"
            value={values.date}
            placeholder="Дата"
          />
          <Input
            name="pay"
            onChange={getValuesHandler}
            placeholder="Оплата"
            value={values.pay}
          />
          <Button type="submit" variant="contained">
            Сохранить
          </Button>
        </WrapForm>
      )}
      <WrapResult>
        <table>
          <tbody>
            <tr>
              <th>№</th>
              <th>Ф. И. О.</th>
              <th>Телефон</th>
              <th>Оплата</th>
              <th>Дата</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
            {needapartment?.map((el, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.phoneNumber}</td>
                <td>{el.price}</td>
                <td>{el.date?.slice(0, 10)}</td>
                <td>{el.status}</td>
                <td>
                  <Button
                    variant="deleted"
                    onClick={() => {
                      deleteHandler(el._id);
                    }}
                  >
                    Удалить
                  </Button>
                  {/* <Button
                    variant="outlined"
                    onClick={(e) => {
                      setSelectedUser(el)
                      setValues({...el, [e.target.name]: el.values})
                    }}>
                    Редактировать
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </WrapResult>
    </Wrapper>
  );
};
export default ProjectInnerPage;
const LinkRout = styled("div")`
  position: absolute;
  & > a {
    text-decoration: none;
    color: #002102;
    border-bottom: 0.4vh solid #002102;
    text-transform: capitalize;
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
const Wrapper = styled("div")`
  margin: auto;
  margin-top: 280px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  @media screen and (max-width: 700px) {
    margin-top: 200px;
  }
`;
const Div = styled("div")`
  position: absolute;
  top: 160px;
  display: flex;
  gap: 20px;
  width: 90%;
  color: darkslategray;
  font-weight: 500;
  font-size: 2vw;
  text-transform: capitalize;
  justify-content: center;
  & > span {
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #013301a0;
    top: 50px;
    box-shadow: 0px 5px 13px 2px #013301;
    @media screen and (max-width: 700px) {
      top: 30px;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 4vw;
  }
`;
const WrapImage = styled("div")`
  margin: 35px auto;
  max-width: 400px;
  text-align: center;
  img {
    width: 100%;
  }
`;
const WrapForm = styled("form")`
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  border: 1px solid #0b363c;
  max-width: 400px;
  height: 450px;
  border-radius: 10px;
  label {
    color: #0b363c;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div > div {
    display: flex;
  }
  > div > div:last-of-type > input {
    accent-color: #fbff00;
    margin-right: 10px;
  }
  > div > div:first-of-type > input {
    accent-color: red;
    margin-right: 10px;
  }
  > input {
    height: 35px;
    padding: 10px;
    font-family: "Roboto", sans-serif;
    margin-top: 10%;
    border: 1px solid #0b363c;
  }
  button {
    width: 100%;
    margin-top: 10%;
    &:hover {
      color: #fff;
    }
  }
`;
const WrapResult = styled("div")`
  overflow: auto;
  width: 90%;
  height: 400px;
  margin: 130px auto 0 auto;
  table {
    border-collapse: collapse;
    width: 100%;
    @media screen and (max-width: 700px) {
      width: 800px;
    }
    tbody tr th,
    td {
      padding: 10px;
      border: 1px solid #0b363c;
    }
  }
  th {
    text-align: left;
  }
  tr > td > button {
    font-size: 12px;
    height: 25px;
  }
`;
