/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from '../features/main/Main';
import { loadEvents } from '../features/event/eventSlice';
import EventCard from '../features/event/EventCard';
import Layout from './Layout';
import Page404 from './Page404';
import Lawyers from '../features/lawyers/Lawyers';
import LawyerProfile from '../features/lawyerProfile/LawyersProfile';
import Authorization from '../features/admin/Authorization';
import AdminEvents from '../features/adminEvents/AdminEvents';
import AdminLawyers from '../features/adminLawyers/AdminLawyers';
import AdminFeedback from '../features/adminFeedback/AdminFeedback';
import LayoutAdmin from './LayoutAdmin';
import { loadLawyers } from '../features/lawyers/lawyerSlice';
import { useAppDispatch } from '../store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadLawyers());
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/events/:id" element={<EventCard />} />
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
