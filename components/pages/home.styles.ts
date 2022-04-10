import styled from "@emotion/styled";

export const ErrorMsg = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.error};
  font-size: 0.8rem;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;
  padding-left: 30px;
  text-align: left;
  position: absolute;
  bottom: -25px;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
  @media screen and (max-width: 840px) {
    padding-left: 30px;
  }
`;

export const InputText = styled.div`
  width: 100%;
  color: ${(props: any) => props.theme.white};
  font-size: 0.96rem;
  font-weight: 300;
  margin: 0 auto 20px;
  text-align: center;
  @media screen and (max-width: 840px) {
    height: auto;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 auto 25px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  box-shadow: 0px 0px 0px 4px ${(props: any) => props.theme.medium}65;
  border-radius: 30px;
  color: ${(props: any) => props.theme.bg};
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 0.938rem;
  font-weight: 700;
  padding: 0 55px 0 30px;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus,
  &:focus-within,
  &.active {
    box-shadow: 0px 0px 0px 8px ${(props: any) => props.theme.medium}65;
  }
  &::placeholder {
    opacity: 1;
    color: ${(props: any) => props.theme.lightGray};
    font-weight: 400;
  }

  @media screen and (max-width: 840px) {
    height: 55px;
    padding: 0 60px 0 20px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .main--button {
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 3px;
    @media screen and (max-width: 840px) {
      width: 50px;
      height: 50px;
      svg {
        width: 25px;
      }
      &:hover {
        svg {
          left: 50%;
        }
      }
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 100px;
  text-align: center;
  position: relative;
  @media screen and (max-width: 840px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 640px) {
    margin: 0 auto 100px;
  }
`;

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 90%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
