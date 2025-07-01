import React from 'react';
import Header from '../components/partials/Header';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout font-poppins">
      <Header />  {/* Navbar intégré ici */}
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
