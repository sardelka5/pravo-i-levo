import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../features/main/Footer';
import Header from '../features/main/Header';

function Layout(): JSX.Element {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
