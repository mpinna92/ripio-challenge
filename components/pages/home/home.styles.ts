import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  @media screen and (max-width: 640px) {
    height: 200px;
    overflow: hidden;
  }
`;
