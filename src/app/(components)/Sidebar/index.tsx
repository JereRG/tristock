"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
    Archive,
    CircleDollarSign,
    Clipboard,
    Layout,
    LucideIcon,
    Menu,
    SlidersHorizontal,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive =
        pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href}>
            <div
                className={`cursor-pointer flex items-center ${
                    isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
                }
                    hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
                    isActive ? "bg-blue-200 text-white" : ""
                }
            }`}
            >
                <Icon className="w-6 h-6 !text-gray-700" />

                <span
                className={`${
                    isCollapsed ? "hidden" : "block"
                } font-medium text-gray-700`}
                >
                    {label}
                </span>
            </div>
        </Link>
    );
};

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col ${
        isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div
                className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
                isSidebarCollapsed ? "px-5" : "px-8"
                }`}
            >
                <Image
                    src="https://instagram.ftuc1-1.fna.fbcdn.net/v/t51.2885-19/451692535_1392336201462524_8536384679275078706_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftuc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=X-vKV2yjMR8Q7kNvgHzc1Yq&_nc_gid=a8dea14e52904e82a0cc44b7865c6508&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBc-AGa1dL0pzWchvIfbVs59LBa3DtoFLk6gVNTpdiwmg&oe=6700BE8F&_nc_sid=7a9f4b"
                    alt="tristock-logo"
                    width={27}
                    height={27}
                    className="rounded w-8"
                />
                <h1
                    className={`${
                        isSidebarCollapsed ? "hidden" : "block"
                    } font-extrabold text-2xl`}
                >
                    TRISTOCK
                </h1>

                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink
                    href="/dashboard"
                    icon={Layout}
                    label="Dashboard"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventario"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={Clipboard}
                    label="Productos"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Usuarios"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/settings"
                    icon={SlidersHorizontal}
                    label="Configuracion"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/expenses"
                    icon={CircleDollarSign}
                    label="Expensas"
                    isCollapsed={isSidebarCollapsed}
                />
            </div>

            {/* FOOTER */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
                <p className="text-center text-xs text-gray-500">&copy; 2024 Tricode</p>
            </div>
        </div>
    );
};

export default Sidebar;