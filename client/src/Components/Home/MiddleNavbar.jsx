import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { HiScissors } from "react-icons/hi2";
import { GiBookshelf } from "react-icons/gi";
import { FaGlassCheers, FaSimCard } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoDiceSharp } from "react-icons/io5";

const MiddleNavbar = () => {
  return (
    <div className="hidden lg:block sticky -top-[1px] z-50 bg-white shadow-md border-b-2">
      {/* Top line with gradient */}
      <div className="   h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500"></div>

      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center space-x-6 py-2">
        <div className="flex items-center space-x-6 flex-wrap justify-center">
          <NavItem icon={<MdShoppingCartCheckout />} text="It's a Boy" to="/its-a-boy" />
          <NavItem icon={<TbMoodKid />} text="Kiddush" to="/kiddush" />
          <NavItem icon={<HiScissors />} text="Upsherin" to="/upsherin" />
          <NavItem icon={<GiBookshelf />} text="Bar mitzvah" to="/bar-mitzvah" />
          <NavItem icon={<FaGlassCheers />} text="Tenoyim" to="/tenoyim" />
          <NavItem icon={<FaSimCard />} text="Bavarfan" to="/bavarfan" />
          <NavItem icon={<GiBigDiamondRing />} text="Wedding" to="/wedding" />
          <NavItem icon={<IoDiceSharp />} text="Sheva Bruches" to="/sheva-bruches" />
        </div>
      </div>
    
    </div>
  );
};

// Custom NavItem component for cleaner code and reusability
const NavItem = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-lg font-medium">{text}</span>
  </Link>
);

export default MiddleNavbar;
