import Automatejob from '@/components/PublicComponents/Automatejob';
import Banner from '@/components/PublicComponents/Banner';
import FeaturingJobs from '@/components/PublicComponents/FeaturingJobs';
import PublicFooter from '@/components/PublicComponents/Footer';
import HiringCompanies from '@/components/PublicComponents/HiringCompanies';
import HowDifferentHireZen from '@/components/PublicComponents/HowDifferentHireZen';
import JobSeekerBanner from '@/components/PublicComponents/JobSeekerBanner';
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
      <Automatejob />
      <FeaturingJobs />
      <HowDifferentHireZen/>
      <JobSeekerBanner/>
      <PublicFooter />
    </div>
  );
};

export default PublicHomePage;