import { useState } from 'react';
import { Bell, Moon, Sun, User } from 'lucide-react';

export default function TopBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-gray-3 z-10 flex items-center justify-between px-4 py-2 shadow-md">
      <div className="flex items-center">
        <img src="/logo_22.png" alt="Logo" className="h-8 mr-4" />
        <p className="other-font text-xl">灵睿办公</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon />}
        </button>
        
        <button className="p-2 rounded-full relative">
          <Bell />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <User className="" />
          <span className="">用户名</span>
        </div>
      </div>
    </div>
  );
}
