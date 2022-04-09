import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% {
    opacity: 0.03;
  }
  50% {
    opacity: 0.08;
  }
  to {
    opacity: 0.03;
  }
`;

export const ShimmerEffect = styled.div`
  width: 100%;
  animation-name: ${shimmer};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  background: white;
  background-clip: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top 0;
  border-radius: 5px;
  flex: 0 0 auto;
  margin-bottom: 10px;
  text-align: center;
  z-index: 5;
  position: relative;
  &.circle {
    border-radius: 100%;
  }
  &.tag {
    width: 100px;
    height: 30px;
    margin: 0 5px;
  }
  &.img {
    width: 100%;
    height: 260px;
    display: flex;
    align-items: baseline;
    flex-flow: row;
    margin: 30px auto;
    overflow: hidden;
    padding: 25px;
    position: relative;
    @media screen and (max-width: 740px) {
      flex-flow: column;
    }
    &:before {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 100%;
      content: " ";
      flex: 0 0 auto;
      margin: 0 30px 0 0;
      z-index: 6;
      @media screen and (max-width: 740px) {
        margin: 0 0 20px 0;
      }
    }
    &:after {
      width: 80%;
      height: 30px;
      background: white;
      border-radius: 5px;
      content: " ";
      position: relative;
      top: -30px;
      @media screen and (max-width: 740px) {
        top: initial;
      }
    }
  }
  &.button {
    width: 140px;
    height: 40px;
    margin: 0 8px 5px;
    &:first-of-type {
      margin-left: 0;
      @media screen and (max-width: 460px) {
        margin-right: 0;
      }
    }
    &:last-of-type {
      margin-right: 0;
      @media screen and (max-width: 460px) {
        margin-left: 0;
      }
    }
  }
  &.text {
    &.h1 {
      width: 78.5%;
      height: 40px;
    }
    &.caption {
      width: 100%;
      min-width: 100px;
      height: 15px;
    }
  }
  &.dark {
    background: black;
  }
`;
