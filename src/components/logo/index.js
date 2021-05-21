import { LogoImg, LogoText, LogoWrapper } from "./style";

import logoImg from "../../assets/logo_narnia.png";

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logoImg} alt="Logo" />
      </LogoImg>
      <LogoText>As Cronicas de Narnia</LogoText>
    </LogoWrapper>
  );
}
