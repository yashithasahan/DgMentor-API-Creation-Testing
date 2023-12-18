import styled from "styled-components";
import Button from "../../UI/Button";
import { useState } from "react";

const ApiMenu = styled.div`
  display: flex;
  overflow: hidden;
  overscroll-behavior: contain;
  button {
    margin: 10px;
  }
`;

const apis = [
  "login",
  "register",
  "userCreation",
  "userDelete",
  "courseCreation",
  "courseUpdate",
  "courseDelte",
];

const APITestingMenu = (props) => {
  const changeApiHandler = (api) => {
    console.log("clciked");
    props.onChange(api);
  };
  return (
    <ApiMenu>
      {apis.map((api, index) => (
        <Button key={index} onClick={() => changeApiHandler(api)}>
          {api}
        </Button>
      ))}
    </ApiMenu>
  );
};
export default APITestingMenu;
