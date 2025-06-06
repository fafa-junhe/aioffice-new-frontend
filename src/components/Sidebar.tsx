import { useState, useEffect } from 'react';
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
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  // 在折叠状态下检测鼠标悬停
  useEffect(() => {
    if (isCollapsed && hovering) {
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  }, [isCollapsed, hovering]);

  const navItems = [
    { to: '/dashboard', icon: <DashboardIcon />, label: '仪表盘' },
    { to: '/inbox', icon: <EnvelopeClosedIcon />, label: '收件箱' },
    { to: '/chat', icon: <ChatBubbleIcon />, label: '聊天' },
    { to: '/agents', icon: <PersonIcon />, label: '智能体' },
    { to: '/todos', icon: <ListBulletIcon />, label: '待办' },
    { to: '/contacts', icon: <PersonIcon />, label: '联系人' },
  ];

  // 处理工具提示显示
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>, label: string) => {
    if (isCollapsed) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12,
      });
      setTooltipContent(label);
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
      <div
          className={`relative transition-all duration-300 ease-in-out ${
              isCollapsed ? 'w-20' : 'w-64'
          }`}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
      >
        {showTooltip && (
            <div
                className="absolute bg-gray-800 text-white text-sm py-1.5 px-3 rounded shadow-lg z-50"
                style={{
                  top: `${tooltipPosition.top}px`,
                  left: `${tooltipPosition.left}px`,
                  transform: 'translateY(-50%)'
                }}
            >
              {tooltipContent}
            </div>
        )}

        <NavigationMenu.Root
            className={`h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 flex flex-col shadow-lg transition-all duration-300 ease-in-out ${
                isCollapsed ? 'w-20' : 'w-64'
            }`}
        >
          <div className="mb-6 flex items-center justify-between relative h-12">
            <div className="flex items-center ">
              <div className="w-8 h-8 flex items-center justify-center ml-2">
                <img
                    src="/logo_22.png"
                    alt="logo"
                    className="w-full h-full object-contain"
                />
              </div>
              <h2
                  className={`text-2xl font-semibold text-gray-800 ml-5 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                      isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
                  }`}
              >
                灵睿智能
              </h2>
            </div>

            {/* 折叠按钮 - 位置固定 */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={isCollapsed ? "absolute -right-3.5 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg" : "absolute right-0 top-1/2 transform -translate-y-1/2 p-1.5 rounded-lg "}
            >
              {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </button>
          </div>

          {/* 导航菜单 - 图标绝对静止 */}
          <div className="flex-1 overflow-hidden">
            <NavigationMenu.List className="space-y-1">
              {navItems.map(({ to, icon, label }) => {
                const isActive = currentPath === to;
                return (
                    <NavigationMenu.Item key={to}>
                      <NavigationMenu.Link asChild>
                        <Link
                            to={to}
                            className={`flex items-center p-3 rounded-lg transition-all font-medium relative ${
                                isActive
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                            }`}
                            onMouseEnter={(e) => handleMouseEnter(e, label)}
                            onMouseLeave={handleMouseLeave}
                        >
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                        {icon}
                      </span>

                          <span
                              className={`ml-10 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                                  isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
                              }`}
                          >
                        {label}
                      </span>
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>
          </div>

          {/* 底部用户菜单 - 图标绝对静止 */}
          <div className="border-t pt-4 mt-4">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                  className={`flex items-center p-3 w-full rounded-lg hover:bg-gray-200 text-gray-700 font-medium transition relative ${
                      isCollapsed ? 'justify-center' : ''
                  }`}
                  onMouseEnter={(e) => handleMouseEnter(e, "用户设置")}
                  onMouseLeave={handleMouseLeave}
              >
                {/* 用户图标 - 位置固定不动 */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <AvatarIcon />
              </span>

                {/* 文字 - 只动文字 */}
                <span
                    className={`ml-10 transition-all duration-300 overflow-hidden whitespace-nowrap ${
                        isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
                    }`}
                >
                用户
              </span>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                  className="bg-white rounded-lg shadow-lg p-1 mt-2 min-w-[200px] z-50"
                  side={isCollapsed ? "right" : "top"}
                  align={isCollapsed ? "start" : "end"}
                  sideOffset={isCollapsed ? 10 : 5}
              >
                <DropdownMenu.Item asChild>
                  <Link
                      to="/settings"
                      className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition text-sm"
                  >
                    <GearIcon className="w-4 h-4" /> 设置
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
                    <ExitIcon className="w-4 h-4" /> 登出
                  </button>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </NavigationMenu.Root>
      </div>
  );
};