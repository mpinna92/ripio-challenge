import styled from "@emotion/styled";
import { MotionProps } from "framer-motion";

export const Status = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 3px;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 600;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  &.success {
    background-color: ${(props: any) => props.theme.success};
    color: ${(props: any) => props.theme.successDark};
  }
  &.error {
    width: 35px;
    background-color: ${(props: any) => props.theme.error};
  }
`;

export const CardItem = styled.div<MotionProps>`
  width: 100%;
  align-items: center;
  display: flex;
  font-weight: 400;
  font-size: 1.05rem;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props: any) => props.theme.lightGray}15;
  b {
    color: ${(props: any) => props.theme.primary};
    font-weight: 400;
    font-family: ${(props: any) => props.theme.fonts.SpaceMono};
    margin-right: 10px;
    white-space: nowrap;
  }
  span {
    width: 100%;
    color: ${(props: any) => props.theme.white};
    font-weight: 300;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ResultCard = styled.div<MotionProps>`
  width: 100%;
  margin-bottom: 50px;
  border-radius: 15px;
  border: 2.5px solid ${(props: any) => props.theme.primary}30;
  border-bottom: 8px solid ${(props: any) => props.theme.primary}30;
  box-shadow: 12px 12px 16px 0 rgba(100, 93, 110, 0.07),
    -8px -8px 16px 0 rgba(100, 93, 110, 0.07);
  background-color: transparent;
  padding: 30px;
`;

export const ResultList = styled.div<MotionProps>`
  width: 100%;
  margin: 0 auto;
`;

export const ResultsWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  width: 100%;
  margin: 30px auto 20px;
  @media screen and (max-width: 992px) {
    max-width: 90%;
  }

  .paginator {
    &.top {
      @media screen and (max-width: 840px) {
        margin: 40px auto 15px;
      }
    }
    &.bottom {
      margin: -10px auto 40px;
    }
  }
`;

export const TotalResults = styled.div<MotionProps>`
  width: 100%;
  color: ${(props: any) => props.theme.white};
  font-size: 1rem;
  @media screen and (max-width: 840px) {
    font-size: 1.2rem;
    margin-bottom: 0;
    text-align: center;
  }
  span {
    color: ${(props: any) => props.theme.light};
    font-weight: 600;
  }
`;

export const PaginatorWrapper = styled.div<MotionProps>`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  line-height: initial;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 30px;
  
  @media screen and (max-width: 840px) {
    flex-flow: column;
    margin: 0 auto 10px;
  }
`;

export const NoTsxText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.white};
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
  margin: 0 auto 40px;
  @media screen and (max-width: 840px) {
    line-height: 2.1rem;
  }
`;

export const NoTsxWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .home--button {
    margin: 0 auto;
  }
`;
