import { useState } from "react";
import APItesting from "./APITesting";
import APITestingMenu from "./APITestingMenu";
import styled from "styled-components";

const ApiTest = styled.div`
  h1 {
    padding-left: 10px;
    font-weight: bold;
    color: blueviolet;
  }
`;

const APITestinHome = () => {
  const [userApi, setUserApi] = useState("login");

  const apiSelector = (api) => {
    setUserApi(api);
  };
  return (
    <ApiTest>
      <h1>DgMentor API Testing</h1>
      <APITestingMenu onChange={apiSelector} />
      <APItesting selectedApi={userApi}></APItesting>
    </ApiTest>
  );
};
export default APITestinHome;
