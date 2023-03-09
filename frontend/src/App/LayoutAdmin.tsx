import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterAdmin from './FooterAdmin';
import HeaderAdmin from './HeaderAdmin';

function LayoutAdmin(): JSX.Element {
  return (
    <div className="App">
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
}

export default LayoutAdmin;
