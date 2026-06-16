import Banner from '@/components/PublicComponents/Banner';
import HiringCompanies from '@/components/PublicComponents/HiringCompanies';
import LoginSignupButton from '@/components/PublicComponents/LoginSignupButton';
import PublicNavbar from '@/components/PublicComponents/Navbar';
import React from 'react';

const PublicHomePage = () => {
  return (
    <div>
      <PublicNavbar />
      <LoginSignupButton />
      <Banner />
      <HiringCompanies />
    </div>
  );
};

export default PublicHomePage;