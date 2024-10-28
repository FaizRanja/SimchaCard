import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { TbMoodKid } from 'react-icons/tb';
import { HiScissors } from 'react-icons/hi2';
import { GiBookshelf } from 'react-icons/gi';
import { FaGlassCheers, FaSimCard } from 'react-icons/fa';
import { GiBigDiamondRing } from 'react-icons/gi';
import { IoDiceSharp, IoReorderThree } from 'react-icons/io5';

// Logo Component
const Logo = () => (
  <a href="/" className="flex items-center space-x-2 cursor-pointer">
    <img
      src="https://images.simchacard.com/assets/logo_with_text_home.png?width=250&format=auto"
      width="199"
      height="35"
      alt="SimchaCard Logo"
      className="h-[35px] mr-1"
    />
  </a>
);

// Custom NavItem component for cleaner code and reusability
const NavItem = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 my-2"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-lg font-medium">{text}</span>
  </Link>
);

// Mobile Dropdown Menu Component
const MobileMenu = ({ isOpen, isSimchasOpen, toggleSimchas }) => (
  <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-300`}>
    <div className="p-4">
      <button onClick={toggleSimchas} className="text-lg font-semibold text-gray-700 my-2 flex items-center">
        Simchas 
      </button>
      {isSimchasOpen && (
        <div className="ml-4">
          <NavItem icon={<MdShoppingCartCheckout />} text="It's a Boy" to="/its-a-boy" />
          <NavItem icon={<TbMoodKid />} text="Kiddush" to="/kiddush" />
          <NavItem icon={<HiScissors />} text="Upsherin" to="/upsherin" />
          <NavItem icon={<GiBookshelf />} text="Bar Mitzvah" to="/bar-mitzvah" />
          <NavItem icon={<FaGlassCheers />} text="Tenoyim" to="/tenoyim" />
          <NavItem icon={<FaSimCard />} text="Bavarfan" to="/bavarfan" />
          <NavItem icon={<GiBigDiamondRing />} text="Wedding" to="/wedding" />
          <NavItem icon={<IoDiceSharp />} text="Sheva Bruches" to="/sheva-bruches" />
        </div>
      )}
    </div>
   <div className='relative' >
   <div className="p-4">
      <a href="/videos" className="mx-2.5 py-1.5 text-sm font-semibold tracking-tight">
        Videos
      </a>
      <button aria-label="Contact Us" className="mx-2.5 py-1.5 text-sm font-semibold tracking-tight">
        Contact Us
      </button>
      <a href="/cards/status_posters" className="ml-5 py-1.5">
        <p className="font-semibold text-white bg-black text-sm py-1 rounded-full px-4 border-2 border-black hover:bg-white hover:text-black transition duration-300 ease-in-out">
          Free Cards
        </p>
      </a>
    </div>
   </div>
  </div>
);


// Navigation Links Component for Desktop View
const NavLinks = ({ toggleSimchas, isSimchasOpen }) => {
  return (
    <div className="lg:flex items-center hidden">
      <div
        className="relative"
        onMouseEnter={() => toggleSimchas(true)} // Open the dropdown on mouse enter
        onMouseLeave={() => toggleSimchas(false)} // Close the dropdown on mouse leave
      >
        <button className="relative text-sm font-semibold tracking-tight cursor-pointer mx-2.5 py-1.5">
          Simchas
        </button>
        {isSimchasOpen && (
          <div
            className="absolute top-full left-0 bg-white shadow-md p-4 border rounded-md z-10"
            // Remove onMouseLeave from here
            onMouseEnter={() => toggleSimchas(true)} // Keep the dropdown open when hovering over it
            // We won't use onMouseLeave here, as it should not close on leaving button
          >
            <NavItem icon={<MdShoppingCartCheckout />} text="It's a Boy" to="/its-a-boy" />
            <NavItem icon={<TbMoodKid />} text="Kiddush" to="/kiddush" />
            <NavItem icon={<HiScissors />} text="Upsherin" to="/upsherin" />
            <NavItem icon={<GiBookshelf />} text="Bar Mitzvah" to="/bar-mitzvah" />
            <NavItem icon={<FaGlassCheers />} text="Tenoyim" to="/tenoyim" />
            <NavItem icon={<FaSimCard />} text="Bavarfan" to="/bavarfan" />
            <NavItem icon={<GiBigDiamondRing />} text="Wedding" to="/wedding" />
            <NavItem icon={<IoDiceSharp />} text="Sheva Bruches" to="/sheva-bruches" />
          </div>
        )}
      </div>

      <a href="/videos" className="mx-2.5 py-1.5 text-sm font-semibold tracking-tight">
        Videos
      </a>
      <button aria-label="Contact Us" className="mx-2.5 2xl:mx-4 py-1.5 text-sm 2xl:text-base font-semibold tracking-tight">
        Contact Us
      </button>
      <a href="/cards/status_posters" className="ml-5 py-1.5">
        <p className="font-semibold text-white bg-black text-sm py-1 rounded-full px-4 border-2 border-black hover:bg-white hover:text-black transition duration-300 ease-in-out">
          Free Cards
        </p>
      </a>
    </div>
  );
};




// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSimchasOpen, setIsSimchasOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSimchas = () => setIsSimchasOpen(!isSimchasOpen);

  return (
    <header className="z-[70] max-w-full sticky top-0 lg:relative">
      <div className="bg-white text-black box-content border-b-2 lg:border-b-0 border-gray-300 shadow-md">
        <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4 relative">
          <Logo />
          <NavLinks toggleSimchas={toggleSimchas} isSimchasOpen={isSimchasOpen} />
          <button onClick={toggleMenu} className="lg:hidden p-2">
            <IoReorderThree className="text-2xl text-gray-700" aria-label="Open Menu" />
          </button>
        </nav>
        <MobileMenu isOpen={isOpen} isSimchasOpen={isSimchasOpen} toggleSimchas={toggleSimchas} />
      </div>
    </header>
  );
};

export default Navbar;
