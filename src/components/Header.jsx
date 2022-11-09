import React from "react";
import { HeaderStyled, Nav, Logo, Image } from "./Header.styled";
import { Button } from "./Button.styled";
import { Container } from "./Container.styled";
import { Flex } from "./Flex.styled";

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
