import LayoutGrid from '../components/LayoutGrid/LayoutGrid';
import Badge from '../components/Badge/Badge';
import goutham from '../assets/goutham.jpeg';
import yesh from '../assets/yeshwanth.jpeg';
import nikhil from '../assets/nikhil.jpeg';
import '../components/Badge/Badge.css';
// import EmailBar from '../components/EmailBar';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8">
      {/* <EmailBar /> */}
      <div className="flex justify-center items-center">
        <h2 className="logo-style text-2xl md:text-4xl">Signal Recruitment</h2>
      </div>
        <LayoutGrid>
          <Badge name="Goutham Govada" role="CEO | Co-Founder | Mechanical Engineer | Quality Assurance Specialist" image={goutham.src} link="https://calendly.com/goutham-gov" />
          <Badge name="Yesh Devabhaktuni" role="CSO | Co-Founder | Full Stack Developer | Data Scientist" image={yesh.src} link="https://calendly.com/yeshthedev/30min" />
          <Badge name="Nikhil Anjuri" role="CTO | Co-Founder | Full Stack Developer | Backend Engineer" image={nikhil.src} link="https://calendly.com/yeshthedev/30min" />
        </LayoutGrid>
        <footer className="relative w-full py-4 mt-auto">
          <div className="text-center text-white">
            Copyright © 2024
          </div>
        </footer>
    </div>
  );
}
