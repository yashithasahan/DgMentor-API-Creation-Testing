import { useRef, useState } from "react";
import Button from "../../../UI/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin: 10px 0 0 auto;
  }
`;

const RegisterAPI = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const inputEmail = emailRef.current.value;
    const inputpassword = passwordRef.current.value;
    setInput({
      email: inputEmail,
      password: inputpassword,
    });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Register API</h3>{" "}
      <div className="input-field">
        <label>Username</label>
        <input ref={emailRef} type="email"></input>
      </div>
      <div className="input-field">
        <label>Password</label>
        <input ref={passwordRef} type="password"></input>
      </div>
      <div className="input-field">
        <label>Confirm Password</label>
        <input ref={passwordRef} type="confirmpassword"></input>
      </div>
      <Button type="submit">Register</Button>
      <h1>{input.password}</h1>
    </Form>
  );
};
export default RegisterAPI;
