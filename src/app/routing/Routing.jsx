import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPlayer from '../pages/AddPlayer';
import Play from '../pages/Play';
import Players from '../pages/Players';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="/players" element={<Players />} />
      <Route path="/add-player" element={<AddPlayer />} />
    </Routes>
  );
};

export default Routing;
