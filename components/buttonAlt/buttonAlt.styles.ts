import styled from "@emotion/styled";

export const ButtonWrapper = styled.a`
  width: 100%;
  max-width: 250px;
  min-width: 180px;
  height: 40px;
  align-items: center;
  background: ${(props: any) => props.theme.primary};
  border-radius: 30px;
  color: ${(props: any) => props.theme.white};
  display: flex;
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 0.9rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  margin: 0 ;
  padding: 0 10px;
  position: relative;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  @media screen and (max-width: 840px) {
    height: 45px;
    min-width: 200px;
    max-width: 250px;
    font-size: 1rem;
  }

  &.onlyText {
    width: auto;
    min-width: initial;
    max-width: initial;
    height: auto;
    background-color: transparent;
    border-radius: 0;
    border-bottom: 1px solid ${(props: any) => props.theme.primary};
    color: ${(props: any) => props.theme.primary};
    font-size: 0.8rem;
    padding: 0 5px 5px;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.25;
  }
`;
