"use client";
import React, { useState } from 'react';
import { MdComment, MdSettings, MdAttachMoney, MdPerson, MdMenu, MdClose, MdEdit } from 'react-icons/md'; // Material Design icons
import { usePathname, useRouter } from 'next/navigation';

interface Route {
    label: string;
    icon: React.ElementType;  
    route: string;
}

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const routes: Route[] = [
        { label: 'Your protocol', icon: MdPerson, route: '/dashboard/your-protocol' },
        { label: 'Billing history', icon: MdAttachMoney, route: '/dashboard/billing-history' },
        { label: 'Provide Feedback', icon: MdComment, route: '/dashboard/provide-feedback' },
        { label: 'Settings', icon: MdSettings, route: '/dashboard/settings' },

    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = (route: string) => {
        router.push(route);
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen bg-gray-100 p-6 w-64 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static z-40`} style={{ paddingTop: '4rem' }}>
                <div className="flex justify-end md:hidden">
                    <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900">
                        <MdClose size={24} /> 
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                    {routes.map((route, index) => (
                        <div
                            key={index}
                            onClick={() => handleLinkClick(route.route)}
                            className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-200 ${pathname === route.route ? 'text-red-500 bg-red-100' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                            <route.icon size={24} className="mr-3" />
                            <span className="text-lg font-semibold">{route.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto relative z-30">
                <div className="md:hidden mb-4">
                    <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900">
                        <MdMenu size={24} />
                    </button>
                </div>
                {/* Profile Settings Section */}
                {/* <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold">Profile Settings</h2>
                        <p className="text-gray-600">Manage your profile information</p>
                    </div>
                    {/* <button className="text-red-500">
                        <MdEdit size={24} /> Edit 
                    </button> */}
                
                {children}
            </div>
        </div>
    );
};

export default Layout;
