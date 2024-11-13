import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, PenSquare, BarChart2, MonitorPlay, FileText, Users, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const MenuItem = ({ icon: Icon, label, active, expanded, hasSubMenu, subItems, onClick }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    return (
        <div className="mb-1">
            <button
                onClick={() => {
                    onClick();
                    if (hasSubMenu) {
                        setIsSubMenuOpen(!isSubMenuOpen);
                    }
                }}
                className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    expanded ? "justify-start" : "justify-center",
                    active
                        ? "text-content-bg-green-active"
                        : "text-content-bg-green "
                )}
            >
                <Icon size={20} />
                {expanded && (
                    <>
                        <span className="flex-1 text-left">{label}</span>
                        {hasSubMenu && (
                            <ChevronDown
                                size={16}
                                className={cn(
                                    "transition-transform",
                                    isSubMenuOpen && "transform rotate-180"
                                )}
                            />
                        )}
                    </>
                )}
            </button>

            {expanded && hasSubMenu && isSubMenuOpen && (
                <div className="ml-9 mt-1 space-y-1">
                    {subItems?.map((item, index) => (
                        <button
                            key={index}
                            className="w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-green-600 rounded-lg hover:bg-gray-50"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Dashboard',
        },
        {
            icon: BookOpen,
            label: 'Exam',
            hasSubMenu: true,
            subItems: ['Create Exam', 'View Exams', 'Results']
        },
        {
            icon: PenSquare,
            label: 'Authoring',
            hasSubMenu: true,
            subItems: ['Create Content', 'My Content', 'Shared Content']
        },
        {
            icon: BarChart2,
            label: 'Evaluation',
            hasSubMenu: true,
            subItems: ['Pending', 'Completed', 'Statistics']
        },
        {
            icon: MonitorPlay,
            label: 'Exam Monitoring',
        },
        {
            icon: FileText,
            label: 'Report Analysis',
        },
        {
            icon: Users,
            label: 'Student List',
        },
    ];

    return (
        <div className="h-screen py-4 fixed flex">
            <div
                className={cn(
                    "flex flex-col flex-1 transition-all duration-300 bg-primary-bg-green rounded-[0.75rem] w-[200px]",
                    expanded ? "w-[200px]" : "w-16"
                )}
            >
                {/* Logo */}
                <div className={cn(
                    "flex items-center pl-2 pr-4 py-4 border-b bg-[#f9f7e8] m-[0.305rem] rounded-[calc(0.75rem-0.305rem)] ",
                    expanded ? "justify-start" : "justify-center"
                )}>
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-12 w-12"
                    />

                    {expanded && (
                        <span className="font-semibold text-content-green-dark text-xs">Amity University</span>
                    )}
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-2">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            icon={item.icon}
                            label={item.label}
                            hasSubMenu={item.hasSubMenu}
                            subItems={item.subItems}
                            active={activeItem === item.label}
                            expanded={expanded}
                            onClick={() => setActiveItem(item.label)}
                        />
                    ))}
                </nav>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg
                        className="text-green-500 w-full h-24"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0 Q50,100 100,0 L100,100 L0,100 Z"
                            fill="currentColor"
                            fillOpacity="0.1"
                        />
                        <circle
                            cx="80"
                            cy="50"
                            r="10"
                            fill="currentColor"
                            fillOpacity="0.1"
                        />
                    </svg>
                </div>
            </div></div>
    );
};

export default Sidebar;
