import { useRef, useState } from "react";
import Button from "../../../UI/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  h4 {
    color: #ffffff;
    transform: ${({ isValid }) =>
      isValid ? `translateX(-100%)` : `translateX(0%)`};
    text-align: center;
    transition: 0.3s ease-in-out;
  }
  button {
    margin: 10px 0 0 auto;
  }
`;

const LoginAPI = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const inputEmail = emailRef.current.value;
    const inputpassword = passwordRef.current.value;
    setInput({
      email: inputEmail,
      password: inputpassword,
    });

    if (
      emailRef.current.value.trim() === "" ||
      passwordRef.current.value.trim() === ""
    ) {
      props.handleInput(false);
    }
    if (
      emailRef.current.value.trim() !== "" &&
      passwordRef.current.value.trim() !== ""
    ) {
      props.handleInput(true);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  //Login Api//
  const loginHandler = () => {
    for (const key in input) {
      if (input[key].toString() === "") {
        console.log("false");
      }
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <Form isValid={props.isValid} onSubmit={handleOnSubmit}>
      <h3>Login</h3>{" "}
      <div className="input-field">
        <label>Username</label>
        <input ref={emailRef} type="text"></input>
      </div>
      <div className="input-field">
        <label>Password</label>
        <input ref={passwordRef} type="password"></input>
      </div>
      <Button type="submit">Login</Button>
      <h4>Some fields are empty ! </h4>
    </Form>
  );
};
export default LoginAPI;
