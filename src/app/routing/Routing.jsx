import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Play from '../pages/play';
import RoutingLoader from './Loader';

// Lazy load pages
const AddPlayer = lazy(() => import('../pages/add-player'));
const Info = lazy(() => import('../pages/info'));
const NotFound = lazy(() => import('../pages/not-found'));
const Sing = lazy(() => import('../pages/sing'));
const CompleteDonation = lazy(() => import('../pages/donation/Complete'));
const CancelDonation = lazy(() => import('../pages/donation/Cancel'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route
        path="/add-player"
        element={
          <RoutingLoader>
            <AddPlayer />
          </RoutingLoader>
        }
      />
      <Route
        path="/info"
        element={
          <RoutingLoader>
            <Info />
          </RoutingLoader>
        }
      />
      <Route
        path="/sing"
        element={
          <RoutingLoader>
            <Sing />
          </RoutingLoader>
        }
      />
      <Route
        path="/complete-donation"
        element={
          <RoutingLoader>
            <CompleteDonation />
          </RoutingLoader>
        }
      />
      <Route
        path="/cancel-donation"
        element={
          <RoutingLoader>
            <CancelDonation />
          </RoutingLoader>
        }
      />
      <Route
        path="*"
        element={
          <RoutingLoader>
            <NotFound />
          </RoutingLoader>
        }
      />
    </Routes>
  );
};

export default Routing;
