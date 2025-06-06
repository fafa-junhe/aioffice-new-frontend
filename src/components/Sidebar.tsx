import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  PersonIcon,
  ListBulletIcon,
  AvatarIcon,
  GearIcon,
  ExitIcon,
} from '@radix-ui/react-icons';

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: '/dashboard', icon: <DashboardIcon />, label: '仪表盘' },
    { to: '/inbox', icon: <EnvelopeClosedIcon />, label: '收件箱' },
    { to: '/chat', icon: <ChatBubbleIcon />, label: '聊天' },
    { to: '/agents', icon: <PersonIcon />, label: '智能体' },
    { to: '/todos', icon: <ListBulletIcon />, label: '待办' },
    { to: '/contacts', icon: <PersonIcon />, label: '联系人' },
  ];

  return (
      <NavigationMenu.Root className="w-64 h-screen bg-gray-100 p-4 flex flex-col shadow-lg">
        <div className="mb-6 relative">
          <img src="/logo_22.png" alt="logo" className="w-8 h-8 absolute left-2 top-1/2 -translate-y-1/2" />
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            灵睿智能
          </h2>
        </div>

        <div className="flex-1">
          <NavigationMenu.List className="space-y-1">
            {navItems.map(({ to, icon, label }) => {
              const isActive = currentPath === to;
              return (
                  <NavigationMenu.Item key={to}>
                    <NavigationMenu.Link asChild>
                      <Link
                          to={to}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all font-medium ${
                              isActive
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                          }`}
                      >
                        {icon}
                        <span>{label}</span>
                      </Link>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
        </div>

        <div className="border-t pt-4 mt-4">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-gray-200 text-gray-700 font-medium transition">
              <AvatarIcon />
              <span>用户</span>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-1 mt-2 min-w-[200px]">
              <DropdownMenu.Item asChild>
                <Link
                    to="/settings"
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition text-sm"
                >
                  <GearIcon /> 设置
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <button
                    className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100 rounded transition text-sm"
                    onClick={() => {
                      localStorage.removeItem('token');
                      window.location.href = '/login';
                    }}
                >
                  <ExitIcon /> 登出
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </NavigationMenu.Root>
  );
};
