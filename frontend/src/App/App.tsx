/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from '../features/main/Main';
import Event from '../features/event/Event';
import Layout from './Layout';
import Page404 from './Page404';
import Lawyers from '../features/lawyers/Lawyers';
import LawyerProfile from '../features/lawyerProfile/LawyersProfile';
import Authorization from '../features/admin/Authorization';
import AdminEvents from '../features/adminEvents/AdminEvents';
import AdminLawyers from '../features/adminLawyers/AdminLawyers';
import AdminFeedback from '../features/adminFeedback/AdminFeedback';
import LayoutAdmin from './LayoutAdmin';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/lawyers/:id" element={<LawyerProfile />} />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route element={<LayoutAdmin />}>
        <Route path="/admin" element={<Authorization />} />
        <Route path="/admin/event" element={<AdminEvents />} />
        <Route path="/admin/lawyers" element={<AdminLawyers />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
      </Route>
    </Routes>
  );
}

export default App;
