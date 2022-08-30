import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login" />;
}
