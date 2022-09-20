import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';
import { Feed } from '../Feed/Feed';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatistica" element={<UserStats />} />
      </Routes>
    </section>
  );
}
