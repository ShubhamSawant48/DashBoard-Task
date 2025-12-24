import {
  Home,
  MessageSquare,
  Activity,
  Settings,
  Lock,
  LogOut
} from "lucide-react"; 

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="w-56 min-h-screen bg-[#2f7d6d] text-white flex flex-col rounded-r-3xl px-6 py-6">

      <div className="flex items-center gap-2 mb-10">
        <img src={logo} alt="logo" className="w-20 h-20 ml-7" />
      </div>

      <ul className="space-y-6 text-sm">
        <li className="flex items-center gap-3 opacity-90">
            <Home size={18} />
            <span>Dashboard</span>
        </li>

        <li className="flex items-center gap-3 opacity-90">
          <MessageSquare size={18} />
          <span>Messages</span>
        </li>

        <li className="flex items-center gap-3 opacity-90">
          <Activity size={18} />
          <span>Report</span>
        </li>

        <li className="flex items-center gap-3 opacity-90">
          <Settings size={18} />
          <span>Setting</span>
        </li>

        <li className="flex items-center gap-3 opacity-90">
          <Lock size={18} />
          <span>Privacy</span>
        </li>
      </ul>

      <button className="mt-auto bg-white text-[#2f7d6d] flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium hover:cursor-pointer">
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
};

export default NavBar;
