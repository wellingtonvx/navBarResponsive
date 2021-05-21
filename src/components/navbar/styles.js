import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  flex: 1;
  align-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  margin-left: 1.5em;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  margin-right: 1.5em;
`;
