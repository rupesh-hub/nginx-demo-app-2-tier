import { Link } from "react-router-dom";
import { Home, FileText, Mail, UserCircle } from "lucide-react";
import { Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <div className="bg-gray-900 flex justify-between max-w-7xl mx-auto p-4 px-6 mt-4 rounded-full text-white border-2 border-gray-300">
        <div>
            <Link to="/" className="flex gap-2 justify-center items-center cursor-pointer">
              <Settings size={24} />
            </Link>
  
        </div>
        <div>
          <ul>
            <li className="flex gap-4 justify-center items-center">
              <Link to="/" className="flex gap-2 justify-center items-center cursor-pointer">
                <Home size={24} />
                <span>Home</span>
              </Link>
              <Link to="/about" className="flex gap-2 justify-center items-center cursor-pointer">
                <UserCircle size={24} />
                <span>About</span>
              </Link>
              <Link to="/contact" className="flex gap-2 justify-center items-center cursor-pointer">
                <Mail size={24} />
                <span>Contact</span>
              </Link>
              <Link to="/blogs" className="flex gap-2 justify-center items-center cursor-pointer">
                <FileText size={24} />
                <span>Blogs</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
