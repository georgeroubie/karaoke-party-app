import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Play from '../pages/Play';

// Lazy load components
const AddPlayer = lazy(() => import('../pages/AddPlayer'));
const Info = lazy(() => import('../pages/Info'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Sing = lazy(() => import('../pages/Sing'));

const Loader = ({ children }) => <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;

const Routing = () => (
  <Routes>
    <Route path="/" element={<Play />} />
    <Route
      path="/add-player"
      element={
        <Loader>
          <AddPlayer />
        </Loader>
      }
    />
    <Route
      path="/info"
      element={
        <Loader>
          <Info />
        </Loader>
      }
    />
    <Route
      path="/sing"
      element={
        <Loader>
          <Sing />
        </Loader>
      }
    />
    <Route
      path="*"
      element={
        <Loader>
          <NotFound />
        </Loader>
      }
    />
  </Routes>
);

export default Routing;
