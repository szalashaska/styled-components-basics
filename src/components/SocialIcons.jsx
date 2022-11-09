import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SoiclaIconsStyled } from "./SocialIcons.styled";

import React from "react";

function SocialIcons() {
  return (
    <SoiclaIconsStyled>
      <li>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </li>
    </SoiclaIconsStyled>
  );
}

export default SocialIcons;
