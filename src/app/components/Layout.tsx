import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navStructure = [
    { label: 'Home', path: '/' },
    {
      label: 'About the Order',
      path: '/about-the-order',
      children: [
        { label: 'The Supreme Council 33°', path: '/about-the-order/supreme-council' },
        { label: 'King Edward VII CoI', path: '/about-the-order/rose-croix-masonry' },
        { label: 'Who can join?', path: '/about-the-order/faq' },
      ],
    },
    {
      label: 'Wessex District',
      path: '/wessex-district',
      children: [
        { label: 'About the district', path: '/wessex-district' },
        { label: 'Centers', path: '/wessex-district/centers' },
        { label: 'Chapters', path: '/wessex-district/chapters' },
        { label: 'History', path: '/wessex-district/history' },
      ],
    },
    {
      label: 'Solent District',
      path: '/solent-district',
      children: [
        { label: 'About the district', path: '/solent-district' },
        { label: 'Centers', path: '/solent-district/centers' },
        { label: 'Chapters', path: '/solent-district/chapters' },
        { label: 'History', path: '/solent-district/history' },
      ],
    },
    { label: 'Latest News', path: '/latest-news' },
    { label: 'Events', path: '/events' },
    { label: 'Useful Links', path: '/useful-links' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]" style={{ fontFamily: "'Crimson Text', serif" }}>
      {/* Header Section */}
      <header className="bg-gradient-to-b from-[#6b1a1a] to-[#5a1515] text-white">
        {/* Banner */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-8 mb-4">
            {/* Emblem */}
            <div className="hidden md:block">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 10L35 25H45L40 10Z" fill="#C9A961" stroke="#C9A961" strokeWidth="1"/>
                <path d="M40 70L35 55H45L40 70Z" fill="#C9A961" stroke="#C9A961" strokeWidth="1"/>
                <ellipse cx="40" cy="30" rx="12" ry="8" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <ellipse cx="40" cy="50" rx="12" ry="8" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <path d="M28 30L15 20L20 35L28 30Z" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <path d="M52 30L65 20L60 35L52 30Z" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <path d="M28 50L15 60L20 45L28 50Z" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <path d="M52 50L65 60L60 45L52 50Z" fill="#1a1a1a" stroke="#C9A961" strokeWidth="1.5"/>
                <circle cx="40" cy="40" r="6" fill="#C9A961"/>
                <path d="M34 40L28 30M46 40L52 30M34 40L28 50M46 40L52 50" stroke="#C9A961" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* Title */}
            <Link to="/" className="text-center no-underline">
              <div className="bg-gradient-to-r from-[#8b2e2e] via-[#6b1a1a] to-[#8b2e2e] py-6 px-12 rounded-sm border border-[#C9A961]/30">
                <h1 className="text-5xl md:text-6xl mb-2" style={{ fontFamily: "'Pinyon Script', cursive", color: '#E8D4A0' }}>
                  The Supreme Council 33°
                </h1>
                <p className="text-3xl md:text-4xl tracking-widest" style={{ fontFamily: "'Pinyon Script', cursive", color: '#E8D4A0' }}>
                  Rose Croix
                </p>
                <div className="mt-4 pt-4 border-t border-[#C9A961]/30">
                  <p className="text-xs tracking-[0.3em] text-[#E8D4A0]" style={{ fontFamily: "'Cinzel', serif" }}>
                    DISTRICT OF HAMPSHIRE &
                  </p>
                  <p className="text-xs tracking-[0.3em] text-[#E8D4A0]" style={{ fontFamily: "'Cinzel', serif" }}>
                    ISLE OF WIGHT WESSEX
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-between py-3">
              <span className="text-sm">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center justify-center">
              {navStructure.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-3 text-sm hover:bg-[#6b1a1a] transition-colors duration-200 no-underline text-white ${
                      location.pathname === item.path ? 'bg-[#6b1a1a]' : ''
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <ul className="absolute left-0 top-full bg-[#2a2a2a] min-w-[220px] shadow-lg z-50 border-t-2 border-[#6b1a1a]">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            to={child.path}
                            className="block px-4 py-2 text-sm hover:bg-[#6b1a1a] transition-colors duration-200 no-underline text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <ul className="md:hidden pb-4">
                {navStructure.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm hover:bg-[#6b1a1a] transition-colors duration-200 no-underline text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="pl-6">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.path}
                              className="block px-4 py-2 text-xs hover:bg-[#6b1a1a] transition-colors duration-200 no-underline text-gray-300"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 shadow-sm">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#6b1a1a] to-[#5a1515] text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
              <a href="#" className="hover:text-[#E8D4A0] transition-colors no-underline text-white">
                District of Hampshire & Isle of Wight Wessex
              </a>
              <span className="text-gray-400">|</span>
              <Link to="/privacy-policy" className="hover:text-[#E8D4A0] transition-colors no-underline text-white">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/data-protection" className="hover:text-[#E8D4A0] transition-colors no-underline text-white">
                Data Protection Policy
              </Link>
            </div>
            <div className="text-gray-300 text-xs">
              Created by Marcel Mulders
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
