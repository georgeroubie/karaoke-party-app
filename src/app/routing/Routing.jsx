import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Play from '../pages/play';

// Lazy load components
const AddPlayer = lazy(() => import('../pages/add-player'));
const Info = lazy(() => import('../pages/info'));
const NotFound = lazy(() => import('../pages/not-found'));
const Sing = lazy(() => import('../pages/sing'));
const CompleteDonation = lazy(() => import('../pages/donation/Complete'));
const CancelDonation = lazy(() => import('../pages/donation/Cancel'));

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
      path="/complete-donation"
      element={
        <Loader>
          <CompleteDonation />
        </Loader>
      }
    />
    <Route
      path="/cancel-donation"
      element={
        <Loader>
          <CancelDonation />
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
