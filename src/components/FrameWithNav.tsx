import type { ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {Mail, Bot, MessageSquare, Contact, Settings, ListTodo, CompassIcon, Gauge} from 'lucide-react';
import {DashboardIcon} from "@radix-ui/react-icons";

interface FrameWithNavProps {
  children?: ReactNode;
}

const FrameWithNav: React.FC<FrameWithNavProps> = (props) => {
  const navItems = [
    { name: '总览', icon: Gauge, path: '/dashboard' },
    { name: '邮箱', icon: Mail, path: '/inbox' },
    { name: '智能体', icon: Bot, path: '/agents' },
    { name: '聊天', icon: MessageSquare, path: '/chat' },
    { name: '联系人', icon: Contact, path: '/contacts' },
    { name: '待办', icon: ListTodo, path: '/todos' },
    { name: '设置', icon: Settings, path: '/settings' }
  ];

  return (
    <div className="bg-gray-4 px-8 flex flex-col h-full">
      <div className="bg-gray-1 flex items-center p-2 my-4 rounded-md shadow-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `other-font flex items-center px-4 py-2 mx-1 rounded-md transition-colors ${
                isActive 
                  ? 'bg-accent-4 shadow-[0_0_6px_2px_var(--red-4)] border-accent-5'
                  : 'hover:bg-accent-4 '
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-2" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      
      <div className=" flex-1 overflow-auto">
        <Outlet />
        {props.children}
      </div>
    </div>
  );
}

export default FrameWithNav;
