import styled from "@emotion/styled";

export const Jesus = styled.img`
  width: 100%;
  max-width: 130px;
  height: auto;
  margin: 0 auto 10px;
`;

export const ErrorText = styled.div`
  width: 100%;
  max-width: 280px;
  color: ${(props: any) => props.theme.white};
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0 auto 30px;
  text-align: center;
  span {
    font-weight: 600;
    color: ${(props: any) => props.theme.primary};
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column;
`;
