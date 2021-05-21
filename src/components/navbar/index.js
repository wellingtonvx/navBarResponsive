import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLInks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

import {
  LeftSection,
  RightSection,
  MiddleSection,
  NavBarContainer,
} from "./styles";

export function NavBar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavBarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>

      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>

      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavBarContainer>
  );
}
