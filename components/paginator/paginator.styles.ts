import styled from "@emotion/styled";

export const PaginatorContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  * {
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;
