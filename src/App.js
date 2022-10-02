import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import МаinView from './pages/МаinView';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';
const CartView = React.lazy(() =>
  import(/* webpackChunkName: "CartView" */ './pages/CartView')
);

const CreateView = React.lazy(() =>
  import(/* webpackChunkName: "EditView" */ './pages/CreateView')
);
const EditView = React.lazy(() =>
  import(/* webpackChunkName: "EditView" */ './pages/EditView')
);
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<МаinView />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading cart...</div>}>
              <CartView />
            </Suspense>
          }
        />
        <Route
          path="edit/:id"
          element={
            <Suspense fallback={<div>Loading edit...</div>}>
              <EditView />
            </Suspense>
          }
        />
        <Route
          path="create"
          element={
            <Suspense fallback={<div>Loading not CreateView...</div>}>
              <CreateView />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading not found...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
