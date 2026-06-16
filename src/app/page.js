import LoginSignupButton from '@/components/PublicComponents/LoginSignupButton';
import PublicNavbar from '@/components/PublicComponents/Navbar';
import React from 'react';

const PublicHomePage = () => {
  return (
    <div>
      <PublicNavbar />
      <LoginSignupButton />
    </div>
  );
};

export default PublicHomePage;