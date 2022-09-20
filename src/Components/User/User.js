import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';
import { Home } from '../Home';

export function User({ children }) {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStats />} />
      </Routes>
    </section>
  );
}
