import "./style.css";
import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Header = styled.header`
  background-color: var(--secondary-bg);
  padding: 1vmin;
  position: relative;

  @media (max-width: 850px) {
    text-align: center;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: var(--main-bg);
  flex-grow: 1;
  padding: 1vh 1vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 5vh;
`;

const Footer = styled.footer`
  padding: 1vmin;
  background-color: var(--secondary-bg);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 125%;
`;

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainContainer>
          <Header>
            <StyledLink href={"/"}><h1>My URL shortener</h1></StyledLink>
          </Header>
          <Main>
            {children}
          </Main>
          <Footer>
            <p>
              All Rights Reserved by Arthur Fiolet&nbsp;
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-NC-SA 4.0
              </a>
              &nbsp;&copy;
            </p>
          </Footer>
        </MainContainer>
      </body>
    </html>
  );
}