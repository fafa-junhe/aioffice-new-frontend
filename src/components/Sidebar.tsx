import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { 
  DashboardIcon, 
  EnvelopeClosedIcon, 
  ChatBubbleIcon, 
  PersonIcon, 
  ListBulletIcon,
  AvatarIcon,
  GearIcon,
  ExitIcon
} from '@radix-ui/react-icons';

export const Sidebar = () => {
  return (
    <NavigationMenu.Root className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
      <div className="flex-1">
      <NavigationMenu.List className="space-y-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <DashboardIcon /> 仪表盘
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/inbox" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <EnvelopeClosedIcon /> 收件箱
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/chat" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <ChatBubbleIcon /> 聊天
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/agents" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <PersonIcon /> 智能体
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/todos" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <ListBulletIcon /> 待办
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link 
              to="/contacts" 
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-200"
            >
              <PersonIcon /> 联系人
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="flex items-center gap-2 p-2 rounded hover:bg-gray-200">
          <AvatarIcon /> 用户
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white rounded shadow-lg p-1 min-w-[200px]">
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 rounded">
            <Link to="/settings" className="flex items-center gap-2">
              <GearIcon /> 设置
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 hover:bg-gray-100 rounded">
            <button 
              className="flex items-center gap-2 w-full"
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
    </NavigationMenu.Root>
  );
};
