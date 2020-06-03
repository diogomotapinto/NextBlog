import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: collumn;
`;

const Header = styled.h1`
  padding-left: 1em;
`;

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>Mlog</Header>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
