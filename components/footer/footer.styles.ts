import styled from "@emotion/styled";
import { MotionProps } from "framer-motion";

export const TucumanText = styled.div<MotionProps>`
  height: 100%;
  align-items: center;
  color: ${(props: any) => props.theme.medium};
  display: flex;
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 0.688rem;
  font-weight: 700;
  justify-content: flex-end;
  white-space: nowrap;
  &:hover {
    cursor: url("/images/doge.png"), auto;
  }
  @media screen and (max-width: 840px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    justify-content: center;
    padding: 10px 30px 10px;
  }
  span {
    color: ${(props: any) => props.theme.primary};
    font-size: 0.7rem;
    display: inline-block;
    margin: 0 5px;
    position: relative;
    top: 2px;
  }
`;

export const GitHubText = styled.div`
  color: ${(props: any) => props.theme.medium};
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 0.688rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  @media screen and (max-width: 840px) {
    font-size: 1.1rem;
  }
`;

export const GitHubWrapper = styled.div<MotionProps>`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 640px) {
    height: auto;
    margin-bottom: 10px;
    padding: 10px 20px;
  }

  svg {
    width: 20px;
    height: auto;
    color: ${(props: any) => props.theme.medium};
    display: block;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    top: -1px;
    @media screen and (max-width: 840px) {
      width: 30px;
      margin-right: 12px;
    }
  }

  &:hover {
    cursor: pointer;
    ${GitHubText} {
      color: ${(props: any) => props.theme.primary};
    }
    svg {
      color: ${(props: any) => props.theme.primary};
    }
  }
`;

export const FooterContainer = styled.footer<MotionProps>`
  width: 100%;
  height: 80px;
  margin-top: auto;
  @media screen and (max-width: 640px) {
    height: auto;
    padding: 30px 0 60px;
  }
  .align--center {
    width: 100%;
    justify-content: space-between;
    a {
      width: auto;
      display: table;
    }

    @media screen and (max-width: 640px) {
      flex-flow: column;
    }
  }
`;
