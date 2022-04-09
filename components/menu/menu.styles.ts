import styled from "@emotion/styled";

export const BranImg = styled.img`
  width: 170px;
  height: auto;
  display: block;
  @media screen and (max-width: 840px) {
    width: 200px;
  }
  @media screen and (max-width: 640px) {
    width: 230px;
  }
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
  margin: 0 auto auto;
  @media screen and (max-width: 840px) {
    height: auto;
    padding: 40px 0 0;
  }
  @media screen and (max-width: 640px) {
    height: auto;
    max-width: 90%;
    padding: 40px 0;
  }
`;
