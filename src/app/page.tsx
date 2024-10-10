import LayoutGrid from '../components/LayoutGrid/LayoutGrid';
import Badge from '../components/Badge/Badge';
import goutham from '../assets/goutham.jpeg';
import yesh from '../assets/yeshwanth.jpeg';
import nikhil from '../assets/nikhil.jpeg';
// import EmailBar from '../components/EmailBar';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8">
      {/* <EmailBar /> */}
      <div className="flex justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Signal Recruitment</h2>
      </div>
        <LayoutGrid>
          <Badge name="Goutham Govada" role="CEO | Co-Founder | Mechanical Engineer | Quality Assurance Specialist" image={goutham.src} link="https://calendly.com/goutham-gov" />
          <Badge name="Yesh Devabhaktuni" role="CSO | Co-Founder | Full Stack Developer | Data Scientist" image={yesh.src} link="https://calendly.com/yeshthedev/30min" />
          <Badge name="Nikhil Anjuri" role="CTO | Co-Founder | Full Stack Developer | Backend Engineer" image={nikhil.src} link="https://calendly.com/yeshthedev/30min" />
        </LayoutGrid>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="text-xs">
          Copright @ 2023
        </div>
      </footer>
    </div>
  );
}
