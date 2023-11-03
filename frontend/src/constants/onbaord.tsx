import React from 'react';
import OnboardingOne from '../assets/svgs/Onboarding_One';
import OnboardingTwo from '../assets/svgs/Onboarding_Two';
import OnboardingThree from '../assets/svgs/Onboarding_Three';
import OnboardingFour from '../assets/svgs/Onboarding_Four';
import {IOnboardProp} from '../types/constantT/onboard.type';

export const ONBOARD_DATA: IOnboardProp[] = [
  {
    image: <OnboardingOne />,
    heading: 'Welcome to City',
    subHeading: 'Use Recommendations with filters and a map to search',
  },
  {
    image: <OnboardingTwo />,
    heading: 'Explore Locations',
    subHeading: 'Find places to visit in real time, to explore the city',
  },
  {
    image: <OnboardingThree />,
    heading: 'Your Personal Guide',
    subHeading: 'Explore the food in the city',
  },
  {
    image: <OnboardingFour />,
    heading: 'Share your experience with Friends',
    subHeading: '',
  },
];
