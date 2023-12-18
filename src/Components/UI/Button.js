import styled from "styled-components";

const CustomButton = styled.button`
  height: 38px;
  color: #ffffff;
  box-shadow: none;
  background-color: #f28d35;
  border: none;
  border-radius: 4px;
  padding: 0 20px 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);

    cursor: pointer;
  }
  &:active {
    background-color: darkorange;
  }
`;

const Button = (props) => {
  return (
    <CustomButton onClick={props.onClick} type={props.type}>
      {props.children}
    </CustomButton>
  );
};

export default Button;
