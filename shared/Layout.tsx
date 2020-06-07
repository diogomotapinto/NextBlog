import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: collumn;
`;

const Header = styled.h1`
  display: inline-block;
  margin-top: 0;
  &:hover {
    color: cornflowerblue;
  }
`;

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>Blog</Header>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
