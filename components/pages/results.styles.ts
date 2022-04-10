import styled from "@emotion/styled";

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
