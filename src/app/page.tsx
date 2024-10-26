'use client';
import LayoutGrid from '../components/LayoutGrid/LayoutGrid';
import Badge from '../components/Badge/Badge';
import goutham from '../assets/goutham.jpeg';
import yesh from '../assets/yeshwanth.jpeg';
import nikhil from '../assets/nikhil.jpeg';
import '../components/Badge/Badge.css';
import TransparentTabs from '@/components/SimplePanel/SimplePanel';
import { useState } from 'react';
import About from '@/views/about/about';
import { Tabs } from '@/constants/types';
import HowItWorks from '../views/howItWorks/howItWorks';
// import EmailBar from '../components/EmailBar';

export default function Home() {
  const [currentTab, setCurrentTab] = useState<Tabs>('how-it-works');
  return (
    <>
      <div className="items-center justify-items-center min-h-screen">
        {/* <EmailBar /> */}
        <div className="flex justify-center items-center width-100">
          <h2 className="logo-style text-2xl md:text-4xl">Signal Recruitment</h2>
        </div>
        <TransparentTabs currentTab={currentTab} setTab={setCurrentTab}/>
        {currentTab === 'about' && 
          <About />
        }
        {currentTab === 'contact' &&
          <LayoutGrid>
            <Badge name="Goutham Govada" role="CEO | Co-Founder | Mechanical Engineer | Quality Assurance Specialist" image={goutham.src} link="https://calendly.com/goutham-gov" linkedInLink={"https://www.linkedin.com/in/ggovada/"} />
            <Badge name="Yesh Devabhaktuni" role="CSO | Co-Founder | Full Stack Developer | Data Scientist" image={yesh.src} link="https://calendly.com/yeshthedev/30min" linkedInLink={"https://www.linkedin.com/in/yeshwanth-devabhaktuni-47739088/"} />
            <Badge name="Nikhil Anjuri" role="CTO | Co-Founder | Full Stack Developer | Backend Engineer" image={nikhil.src} link="https://calendly.com/yeshthedev/30min" linkedInLink={"https://www.linkedin.com/in/nikhilanjuri/"} />
          </LayoutGrid>
        }
        {currentTab === 'how-it-works' && 
          <HowItWorks />
        }
        <footer className="relative w-full py-4 mt-auto">
          <div className="text-center text-white">
            Copyright © 2024
          </div>
        </footer>
      </div>
    </>
  );
}
