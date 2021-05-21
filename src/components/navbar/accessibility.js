import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #6adf76;
  background-image: linear-gradient(to right, transparent 0%, #00c9ff 100%);

  transition: all 0.24s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #00c9ff;
  }

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;

export function Accessibility() {
  return (
    <AccessibilityContainer>
      <LoginButton>Register</LoginButton>
      <LoginButton>Login</LoginButton>
    </AccessibilityContainer>
  );
}
