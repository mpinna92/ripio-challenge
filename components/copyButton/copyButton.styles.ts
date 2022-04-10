import styled from "@emotion/styled";

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
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
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
    opacity: 1;
    cursor: pointer;
    @media screen and (max-width: 992px) {
      opacity: 0.5;
    }
  }
  &.active {
    opacity: 1;
    pointer-events: none;
    &::after {
      top: -23px;
      opacity: 1;
    }
  }
`;
