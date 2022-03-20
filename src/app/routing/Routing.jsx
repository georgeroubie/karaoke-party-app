import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPlayer from '../pages/AddPlayer';
import NotFound from '../pages/NotFound';
import Play from '../pages/Play';
import Players from '../pages/Players';
import Settings from '../pages/Settings';

const Routing = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Play />} />
    <Route path="/players" element={<Players />} />
    <Route path="/add-player" element={<AddPlayer />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export default Routing;
