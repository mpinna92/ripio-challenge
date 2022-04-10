import styled from "@emotion/styled";

export const TotalPages = styled.div`
  font-size: 1rem;
  color: ${(props: any) => props.theme.white};
  white-space: nowrap;
  margin: 0 25px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
`;

export const PaginatorContainer = styled.div`
  width: auto;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
