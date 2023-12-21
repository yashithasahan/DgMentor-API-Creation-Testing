import styled from "styled-components";

import LoginAPI from "./APIForms/loginAPI";
import RegisterAPI from "./APIForms/RegisterAPI";
import GetAllCourse from "./APIForms/GetAllCourse";
import { useState } from "react";
import CreateCourse from "./APIForms/CreateACourse";

const FormCard = styled.div`
  padding: 30px 30px 60px 30px;
  display: flex;
  background-color: ${({ isFormValid }) =>
    isFormValid ? `blueviolet` : "rgb(255,0,0,0.8)"};
  border-radius: 15px;
  flex-direction: column;

  width: 50%;
  margin: 100px auto 100px;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 780px) {
    width: 80%;
  }
  h3 {
    color: #ffffff;
  }

  p {
    text-align: center;
    font-weight: bold;
  }
  .input-field {
    display: flex;
    margin: 5px 0 5px 0;
    justify-content: space-between;
    align-items: center;

    label {
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      padding-right: 10px;
    }
    input {
      width: 80%;
      height: 1.25rem;
      border: 1px solid whitesmoke;

      border-radius: 4px;
      box-shadow: none;
    }
    input:hover {
      border: 1px solid blue;
    }
    input:focus {
      border: 1px solid darkblue;
      outline: none;
    }
  }
`;

const APItesting = (props) => {
  const [isInputValid, setIsInputValid] = useState(true);

  return (
    <FormCard isFormValid={isInputValid}>
      {props.selectedApi === "login" && (
        <LoginAPI handleInput={setIsInputValid} isValid={isInputValid} />
      )}
      {props.selectedApi === "register" && <RegisterAPI />}
      {props.selectedApi === "getAllcourses" && <GetAllCourse />}
      {props.selectedApi === "courseCreation" && (
        <CreateCourse handleInput={setIsInputValid} isValid={isInputValid} />
      )}
    </FormCard>
  );
};

export default APItesting;
