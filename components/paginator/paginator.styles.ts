import styled from "@emotion/styled";

export const PaginatorContainer = styled.div`
  width: 100%;
  * {
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;
