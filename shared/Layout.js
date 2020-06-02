import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: collumn;
`;

const Header = styled.h1`
  padding-left: 1em;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header>Mlog</Header>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
