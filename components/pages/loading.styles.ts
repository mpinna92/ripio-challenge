import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { MotionProps } from "framer-motion";

const pulseBlue = keyframes`
  0% {
    transform: scale(0.95) translateX(-50%);
    box-shadow: 0 0 0 0 rgba(0, 225, 255, 0.4);
  }
  
  70% {
    transform: scale(1) translateX(-50%);
    box-shadow: 0 0 0 900px rgba(0, 225, 255, 0);
  }
  
  100% {
    transform: scale(0.95) translateX(-50%);
    box-shadow: 0 0 0 0 rgba(0, 225, 255, 0);
  }  
`;

export const Blob = styled.div`
  width: 500px;
  height: 500px;
  background: rgba(52, 172, 224, 1);
  box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
  border-radius: 100%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 2;
  bottom: -500px;
  left: 50%;

  /* Animation */
  animation-name: ${pulseBlue};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const floatingCoin = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }   
`;

export const CoinImg = styled.img`
  width: 100%;
  max-width: 90px;
  height: auto;
  margin: 0 auto;
  z-index: 2;
  position: relative;

  /* Animation */
  animation-name: ${floatingCoin};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }   
`;

export const EthImg = styled.img`
  width: 100%;
  max-width: 45px;
  height: auto;
  margin: 0 auto;
  z-index: 3;
  position: relative;
  top: 10px;
  /* Animation */
  animation-name: ${floating};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const LoadingAnimation = styled.div<MotionProps>`
  width: 100%;
  max-width: 400px;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 1.5rem;
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  line-height: 2rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
  flex-flow: column;
  position: relative;
  top: -30px;
`;

export const LoadingText = styled.div<MotionProps>`
  width: 90%;
  max-width: 400px;
  color: ${(props: any) => props.theme.white};
  font-size: 1.5rem;
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  line-height: 2rem;
  text-align: center;
`;

export const LoadingContent = styled.div<MotionProps>`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(115, 9, 255);
  background: linear-gradient(
    218deg,
    rgba(170, 0, 255, 0.15) -100%,
    rgba(2, 0, 10, 1) 52%,
    rgba(170, 0, 255, 0.25) 380%
  );
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props: any) => props.theme.bg};
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
`;
