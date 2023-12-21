import styled from "styled-components";
import Button from "../../UI/Button";
// import { useState } from "react";

const ApiMenu = styled.div`
  display: flex;
  overflow: hidden;
  overscroll-behavior: contain;
  button {
    margin: 10px;
  }
`;

const apis = [
  // "login x",
  // "register x",
  // "userCreation x",
  // "userDelete x",
  "getAllcourses",
  "courseCreation",
  "getSingleCourse",

  "courseUpdate",
  "courseDelete",
];

const APITestingMenu = (props) => {
  const changeApiHandler = (api) => {
    console.log("clciked");
    console.log(api)
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
