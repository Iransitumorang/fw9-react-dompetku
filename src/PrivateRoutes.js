import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

import AddNumber from './pages/AddNumber';
import ManageNumber from './pages/ManageNumber';
import ProtectedRoute from './auth/ProtectedRoute';

function PrivateRoutes() {
  return (
    <Router>
        <Routes>
          <ProtectedRoute path="/AddNumber" element={<AddNumber />}></ProtectedRoute>
          <ProtectedRoute path="/ManageNumber" element={<ManageNumber />}></ProtectedRoute>
        </Routes>
    </Router>
  )
}

export default PrivateRoutes