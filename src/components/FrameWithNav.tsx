import { type ReactNode, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Mail, Bot, MessageSquare, Contact, Settings, ListTodo, Gauge, ChevronDown } from 'lucide-react';
import * as React from "react";
import { LoongBreadCrumb } from "./LoongBreadCrumb.tsx";

interface FrameWithNavProps {
    children?: ReactNode;
}

interface NavItem {
    name: string;
    icon: React.ComponentType;
    path: string;
    children?: SubNavItem[];
}

interface SubNavItem {
    name: string;
    path: string;
}

const FrameWithNav: React.FC<FrameWithNavProps> = (props) => {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (path: string) => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }
        setActiveSubmenu(path);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setActiveSubmenu(null);
        }, 200); // 延迟 200ms
    };


    const navItems: NavItem[] = [
        { name: '总览', icon: Gauge, path: '/dashboard' },
        { name: '邮箱', icon: Mail, path: '/inbox',},
        { name: '智能体', icon: Bot, path: '/agents',},
        { name: '聊天', icon: MessageSquare, path: '/chat' },
        { name: '联系人', icon: Contact, path: '/contacts',},
        { name: '待办', icon: ListTodo, path: '/todos' },
        {
            name: '知识库',
            icon: ListTodo,
            path: '/knowledge',
            children: [
                { name: '全部文档', path: '/knowledge/all' },
                { name: '我的文档', path: '/knowledge/mine' },
            ]
        },
        {name: '设置', icon: Settings, path: '/settings',}
    ];

    return (
        <div className="bg-gray-4 px-8 flex flex-col h-full">
            <div className="bg-gray-1 flex items-center p-2 mt-4 rounded-md shadow-sm">
                {navItems.map((item) => (
                    <div
                        key={item.path}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(item.path)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `other-font flex items-center px-4 py-2 mx-1 rounded-md transition-colors ${
                                    isActive
                                        ? 'bg-accent-4 shadow-[0_0_6px_2px_var(--red-4)] border-accent-5'
                                        : 'hover:bg-accent-4 '
                                }`
                            }
                        >
                            <span>{item.name}</span>
                            {item.children && (
                                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeSubmenu === item.path ? 'rotate-180' : ''}`} />
                            )}
                        </NavLink>

                        {item.children && (
                            <div
                                className={`
                    absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 
                    border border-gray-200 transition-all duration-200 ease-out 
                    origin-top transform
                    ${activeSubmenu === item.path
                                    ? 'opacity-100 scale-y-100 translate-y-0'
                                    : 'opacity-0 scale-y-95 translate-y-1 pointer-events-none'
                                }
                `}
                            >
                                {item.children.map((subItem) => (
                                    <NavLink
                                        key={subItem.path}
                                        to={subItem.path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                                isActive ? 'bg-accent-4 text-accent-12' : 'text-gray-800'
                                            }`
                                        }
                                        onClick={() => setActiveSubmenu(null)}
                                    >
                                        {subItem.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col flex-1 ">
                <Outlet />
                <LoongBreadCrumb
                    links={[
                        { name: "总览", link: "/dashboard" },
                        { name: "邮件", link: "/inbox" }
                    ]}
                    currentName="邮件"
                />
                {props.children}
            </div>
        </div>
    );
}

export default FrameWithNav;