import { RotatingSquare } from "react-loader-spinner";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <WrapperSpinner>
      <RotatingSquare
        height="150"
        width="150"
        color="#0b363c"
        ariaLabel="rotating-square-loading"
        strokeWidth="2"
        visible={true}
      />
    </WrapperSpinner>
  );
};
export default LoadingSpinner;
const WrapperSpinner = styled.div`
  position: fixed;
  width: 100%;
  top: 89px;
  z-index: 10;
  height: 100%;
  background-color: #dfdadaed;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
