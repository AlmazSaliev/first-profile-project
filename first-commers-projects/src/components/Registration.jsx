import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { SignupEnter } from "../store/slice/SignUp";

const Registration = () => {
  const dispatch = useDispatch();
  const [gmail, setGmail] = useState("");
  const [password1, setPassword] = useState("");

  const getGmailHandler = (e) => {
    setGmail(e.target.value);
  };

  const getPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const goToNextPages = () => {
    if (gmail === "dyikan@gmail.com" && password1 === "123456") {
      dispatch(SignupEnter.Signup({ name: gmail, password: password1 }));
    }
  };
  return (
    <Wrapper>
      <StyledForm onSubmit={goToNextPages}>
        <h3>РЕГИСТРАЦИЯ</h3>
        <Input
          type="text"
          value={gmail}
          onChange={getGmailHandler}
          placeholder="логин"
        />
        <Input
          type="password"
          value={password1}
          onChange={getPasswordHandler}
          placeholder="пароль"
        />
        <Button onClick={goToNextPages} variant="contained">
          Регистрация
        </Button>
      </StyledForm>
    </Wrapper>
  );
};
export default Registration;
const Wrapper = styled("div")`
  width: 100%;
  padding: 15px;
`;
const StyledForm = styled("form")`
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid #0b363c;
  max-width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    height: 35px;
    padding: 10px;
    font-family: "Roboto", sans-serif;
  }
  button {
    &:hover {
      color: #fff;
    }
  }
  h3 {
    color: #0b363c;
    font-family: "Roboto", sans-serif;
  }
`;
