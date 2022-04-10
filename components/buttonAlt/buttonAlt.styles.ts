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
  margin: 0 auto;
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
`;
