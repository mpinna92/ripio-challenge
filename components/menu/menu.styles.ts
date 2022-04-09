import styled from "@emotion/styled";

export const BranImg = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const BrandWrapper = styled.div`
  width: auto;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.65;
  }
`;

export const MenuContainer = styled.nav`
  width: 100%;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: auto;
`;
