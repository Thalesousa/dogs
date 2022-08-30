import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { User } from './Components/User/User';
import { UserStorage } from './Context/UserContext';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}
