"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, User, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [role, setRole] = useState("Guest");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);

    const handleStorageChange = () => {
      const updatedRole = localStorage.getItem("userRole");
      if (updatedRole) setRole(updatedRole);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    if (!isHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  };

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
  ];

  return (
    <header className="w-full flex flex-col shadow-md font-sans">
      {/* Top Utility Strip */}
      <div className="bg-[#002244] text-white text-xs py-1 px-4 flex justify-between items-center border-b-[3px] border-[#FF9933]">
        <div className="flex space-x-4">
          <a href="#main-content" className="hover:underline focus:underline outline-none">
            Skip to Main Content
          </a>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Screen Reader Access</span>
        </div>
        <div className="flex space-x-3 items-center">
          <button className="hover:bg-[#003366] px-1 rounded">A-</button>
          <button className="hover:bg-[#003366] px-1 rounded">A</button>
          <button className="hover:bg-[#003366] px-1 rounded">A+</button>
          <div className="w-px h-3 bg-gray-400 mx-1"></div>
          <button
            onClick={toggleHighContrast}
            className="w-4 h-4 bg-black border border-white rounded-full ml-1"
            title="High Contrast"
          ></button>
          <button
            onClick={toggleHighContrast}
            className="w-4 h-4 bg-white border border-black rounded-full"
            title="Normal Contrast"
          ></button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white text-[#003366] px-4 sm:px-8 py-3 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-[#003366] p-2 rounded-full text-white">
            <MapPin size={28} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#003366]">LandSaathi</h1>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">
              National Land Acquisition & Management System
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {role !== "Guest" && (
            <nav className="hidden md:flex space-x-6 mr-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-semibold pb-1 border-b-2 transition-colors ${
                    pathname.startsWith(link.path)
                      ? "border-[#FF9933] text-[#003366]"
                      : "border-transparent text-gray-600 hover:text-[#003366]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          {role !== "Guest" && (
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-gray-600 hover:text-[#003366] focus:outline-none"
              >
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-50 overflow-hidden">
                  <div className="bg-[#003366] text-white px-4 py-2 font-semibold text-sm">
                    Recent Alerts
                  </div>
                  <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <p className="text-xs font-semibold text-[#003366]">Stage Change</p>
                      <p className="text-sm text-gray-600 mt-1">LA-UP-JHS-2026-014 moved to 'Possession Taken'</p>
                      <p className="text-[10px] text-gray-400 mt-1">10 mins ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <p className="text-xs font-semibold text-red-600">Delayed</p>
                      <p className="text-sm text-gray-600 mt-1">LA-MH-PUN-2026-088 exceeding stage timeline limit</p>
                      <p className="text-[10px] text-gray-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 text-center px-4 py-2 border-t border-gray-100">
                    <button className="text-xs font-semibold text-[#003366] hover:underline">View All</button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center space-x-2 border-l border-gray-300 pl-6">
            <div className="bg-gray-100 p-1.5 rounded-full text-gray-500">
              <User size={20} />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500 font-medium">Logged in as</p>
              <p className="text-sm font-bold text-[#003366]">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
