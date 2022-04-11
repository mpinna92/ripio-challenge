import styled from "@emotion/styled";
import { MotionProps } from "framer-motion";


export const ButtonWrapper = styled.a<MotionProps>`
  width: 38px;
  height: 38px;
  align-items: center;
  background: rgb(110, 0, 255);
  background: linear-gradient(
    222deg,
    rgba(110, 0, 255, 1) -10%,
    rgba(157, 83, 255, 1) 110%
  );
  border-radius: 100%;
  border: 2px solid ${(props: any) => props.theme.white}25;
  border-style: inset;
  display: flex;
  justify-content: center;
  margin: 0;
  position: relative;
  svg {
    width: 20px;
    height: auto;
    color: ${(props: any) => props.theme.white};
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &:hover {
    cursor: pointer;
  }
`;
