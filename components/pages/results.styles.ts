import styled from "@emotion/styled";

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

export const Copy = styled.div`
  width: 32px;
  height: 32px;
  align-items: center;
  border-radius: 100%;
  border: 1px solid ${(props: any) => props.theme.primary};
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  position: relative;
  &::after {
    width: auto;
    align-items: center;
    background-color: ${(props: any) => props.theme.primary};
    border-radius: 4px;
    color: ${(props: any) => props.theme.white};
    content: attr(data-tooltip);
    display: flex;
    flex: 0 0 auto;
    font-size: 0.65rem;
    justify-content: center;
    opacity: 0;
    padding: 3px 5px;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -20px;
  }
  svg {
    width: 14px;
    height: auto;
    color: ${(props: any) => props.theme.primary};
    position: relative;
    top: -1px;
    left: 1px;
    g {
      path {
        stroke: ${(props: any) => props.theme.primary};
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
  &.active {
    pointer-events: none;
    &::after {
      top: -23px;
      opacity: 1;
    }
  }
`;

export const CardItem = styled.div`
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

export const ResultCard = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border-radius: 15px;
  border: 2.5px solid ${(props: any) => props.theme.primary}30;
  border-bottom: 8px solid ${(props: any) => props.theme.primary}30;
  box-shadow: 12px 12px 16px 0 rgba(100, 93, 110, 0.07),
    -8px -8px 16px 0 rgba(100, 93, 110, 0.07);
  background-color: transparent;
  padding: 30px;
`;

export const ResultList = styled.div`
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
`;

export const TotalResults = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.white};
  font-size: 1rem;
`;

export const PaginatorWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  line-height: initial;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 20px;
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
`;
