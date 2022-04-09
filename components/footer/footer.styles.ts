import styled from "@emotion/styled";

export const TucumanText = styled.div`
  height: 80%;
  align-items: center;
  color: ${(props: any) => props.theme.medium};
  display: flex;
  font-family: ${(props: any) => props.theme.fonts.SpaceMono};
  font-size: 0.688rem;
  font-weight: 700;
  justify-content: flex-end;
  white-space: nowrap;
  span {
    color: ${(props: any) => props.theme.primary};
    font-size: 0.7rem;
    display: inline-block;
    margin: 0 5px;
    position: relative;
    top: 2px;
  }
  &:hover {
    cursor: url("/images/doge.png"), auto;
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
`;

export const GitHubWrapper = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    width: 20px;
    height: auto;
    color: ${(props: any) => props.theme.medium};
    display: block;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
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

export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  margin-top: auto;

  .align--center {
    width: 100%;
    justify-content: space-between;
    a {
      width: auto;
      display: table;
    }
  }
`;
