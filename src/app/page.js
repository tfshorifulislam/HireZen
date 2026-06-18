import Automatejob from '@/components/PublicComponents/Automatejob';
import Banner from '@/components/PublicComponents/Banner';
import FeaturingJobs from '@/components/PublicComponents/FeaturingJobs';
import HiringCompanies from '@/components/PublicComponents/HiringCompanies';
import HowDifferentHireZen from '@/components/PublicComponents/HowDifferentHireZen';
import JobSeekerBanner from '@/components/PublicComponents/JobSeekerBanner';

import React from 'react';

const PublicHomePage = () => {
  return (
    <div>
      <Banner />
      <HiringCompanies />
      <Automatejob />
      <FeaturingJobs />
      <HowDifferentHireZen/>
      <JobSeekerBanner/>
    </div>
  );
};

export default PublicHomePage;