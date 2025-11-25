import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-lg bg-[#0a0e27] flex items-center justify-center">
                <span className="text-white font-bold text-sm">TN</span>
              </div>
            </div>
            <div className="text-white font-bold text-xl tracking-tight">
              TO THE<br />NEW
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setWhoWeAreOpen(true)}
              onMouseLeave={() => setWhoWeAreOpen(false)}
            >
              <button className="text-white flex items-center gap-1 hover:text-cyan-400 transition-colors">
                Who we are <ChevronDown size={16} />
              </button>
              {whoWeAreOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-48">
                  <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100 rounded text-gray-800">
                    About Us
                  </Link>
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button className="text-white flex items-center gap-1 hover:text-cyan-400 transition-colors">
                What we do <ChevronDown size={16} />
              </button>
              {whatWeDoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl p-4 w-48">
                  <Link to="/services" className="block px-4 py-2 hover:bg-gray-100 rounded text-gray-800">
                    Services
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blogs" className="text-white hover:text-cyan-400 transition-colors">
              Blogs
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/contact-us">
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-medium">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;