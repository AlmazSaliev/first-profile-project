import React from "react";
import styled from "styled-components";

function Input({ type, onChange, value, ...props }) {
  return (
    <StyledInput type={type} onChange={onChange} value={value} {...props} />
  );
}

export default Input;
const StyledInput = styled("input")`
  width: 100%;
`;
