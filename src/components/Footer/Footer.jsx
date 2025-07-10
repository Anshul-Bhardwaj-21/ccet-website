import React, { useState, useEffect } from 'react';
import './Footer.tailwind.css';

// Hook to detect if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

// Reusable FooterCard component with Tailwind
function FooterCard({ title, links }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleOpen = () => {
    if (isMobile) setIsOpen((prev) => !prev);
  };

  const showLinks = !isMobile || isOpen;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs mb-6 flex flex-col items-center relative">
      <button
        className="bg-orange-400 text-black font-bold text-lg w-full py-2 mb-4 flex items-center justify-between px-4 focus:outline-none" style={{ borderRadius: '0 12px 0 12px' }}

        onClick={toggleOpen}
        aria-expanded={showLinks}
      >
        <span>{title}</span>
        <span className="ml-2">{isMobile ? (showLinks ? '▲' : '▼') : ''}</span>
      </button>
      {showLinks && (
        <ul className="flex flex-col gap-2 w-full">
          {links.map((item, i) => (
            <li key={i} className="w-full">
              <a
                href={item.url}
                className="block text-center text-blue-900 font-medium bg-gray-100 hover:bg-orange-100 rounded-lg py-2 transition-all duration-150 shadow-sm border border-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Footer component
function Footer() {
  const sections = [
    {
      title: 'Explore',
      links: [
        { name: 'Library', url: 'https://ccet.ac.in/library/' },
        { name: 'Sports', url: 'https://ccet.ac.in/sportsFacility.php' },
        { name: 'Hostel', url: 'https://ccet.ac.in/hostel.php' },
        { name: 'IIRC', url: 'https://ccet.ac.in/iirc.php' },
        { name: 'IPRC', url: 'https://ccet.ac.in/iprc.php' },
        { name: 'Innovation Cell', url: 'https://ccet.ac.in/innovation_cell.php' },
        { name: 'Computer Center', url: 'https://ccet.ac.in/computerCenter.php' },
        { name: 'Research and Consultancy', url: 'https://ccet.ac.in/research.php' },
        { name: 'NCC', url: 'https://ccet.ac.in/ncc.php' },
        { name: 'NSS', url: 'https://ccet.ac.in/nss.php' },
      ],
    },
    {
      title: 'Important Links',
      links: [
        { name: 'PU', url: 'https://puchd.ac.in/' },
        { name: 'UPSC', url: 'https://upsc.gov.in/' },
        { name: 'AICTE', url: 'https://www.aicte-india.org/' },
        { name: 'UGC', url: 'https://www.ugc.gov.in/' },
        { name: 'DST', url: 'https://dst.gov.in/' },
        { name: 'MHRD', url: 'http://mhrd.gov.in/' },
        { name: 'JEE', url: 'https://jeemain.nta.nic.in/' },
        { name: 'KYC', url: 'https://www.india.gov.in/content/know-your-college/' },
        { name: 'BIS', url: 'https://www.bis.gov.in/' },
        { name: 'CRIKC', url: 'https://crikc.puchd.ac.in/' },
        { name: 'NKN', url: 'http://nkn.in/' },
        { name: 'NPTEL', url: 'https://nptel.ac.in/' },
        { name: 'NISCAIR', url: 'http://op.niscair.res.in/' },
        { name: 'GATE', url: 'https://ccet.ac.in/gate21.php' },
        { name: 'DRDO', url: 'https://drdo.gov.in/drdo/' },
        { name: 'CHD ADMIN', url: 'https://chandigarh.gov.in/' },
      ],
    },
    {
      title: 'Info',
      links: [
        { name: 'E-News Letter', url: 'https://www.ccet.ac.in/pdf/ENewsLetter/Newsletter%20July-Dec%202021.pdf' },
        { name: 'Notices', url: 'https://ccet.ac.in/notices.php' },
        { name: 'Forms', url: 'https://ccet.ac.in/forms.php' },
        { name: 'Tenders', url: 'https://ccet.ac.in/tender.php' },
        { name: 'NIRF', url: 'https://ccet.ac.in/pdf/NIRF%20Report%202023.pdf' },
      ],
    },
    {
      title: 'Departments',
      links: [
        { name: 'Computer Science and Engineering', url: 'https://ccet.ac.in/CSE-overview.php' },
        { name: 'Electronics and Communication Engineering', url: 'https://ccet.ac.in/ECE-overview.php' },
        { name: 'Mechanical Engineering', url: 'https://ccet.ac.in/MECH-overview.php' },
        { name: 'Civil Engineering', url: 'https://ccet.ac.in/CIVIL-overview.php' },
        { name: 'Applied Sciences', url: 'https://ccet.ac.in/AS-overview.php' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-blue-900 to-blue-950 pt-16 pb-0 px-2 mt-12 rounded-t-3xl relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-[90vw] max-w-4xl">
          <div className="bg-orange-400 text-black font-bold text-3xl md:text-4xl text-center py-4 rounded-b-3xl shadow-lg border-4 border-white">Quick Links</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 pt-16 pb-8">
          {sections.map((section, idx) => (
            <FooterCard key={idx} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-black to-gray-700 text-white text-center py-6 px-2 mt-4 rounded-t-2xl shadow-lg">
        <p className="mb-2">© 2025, CCET, All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg">
          <a href="https://ccet.ac.in/index.php" className="underline hover:text-orange-300" rel="noopener noreferrer">Home</a>
          <span>|</span>
          <a href="https://ccet.ac.in/Webmasters.php" className="underline hover:text-orange-300" rel="noopener noreferrer">Webmasters</a>
          <span>|</span>
          <a href="https://ccet.ac.in/antiRagging.php" className="underline hover:text-orange-300" rel="noopener noreferrer">Anti-Ragging</a>
          <span>|</span>
          <a href="https://ccet.ac.in/privacyPolicy.php" className="underline hover:text-orange-300" rel="noopener noreferrer">Privacy Policy</a>
          <span>|</span>
          <a href="https://ccet.ac.in/contact.php" className="underline hover:text-orange-300" rel="noopener noreferrer">Quick Inquiry</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;