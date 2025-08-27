"use client";

import { useState } from "react";
import {
  Home,
  Settings,
  User,
  ChevronDown,
  LogOut,
  Shield,
  Bell,
  Sliders
} from "lucide-react";

export default function SidebarWithSubmenu() {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Sidebar</h2>
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
            >
              <Home size={20} />
              <span>Dashboard</span>
            </a>
          </li>

          {/* Settings with Submenu */}
          <li>
            <button
              onClick={() => setOpenSettings(!openSettings)}
              className="flex w-full items-center justify-between p-2 rounded hover:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <Settings size={20} />
                <span>Settings</span>
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openSettings ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Submenu with icons */}
            {openSettings && (
              <ul className="ml-8 mt-2 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                  >
                    <Sliders size={16} />
                    <span>General</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                  >
                    <Shield size={16} />
                    <span>Security</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded hover:bg-gray-700"
                  >
                    <Bell size={16} />
                    <span>Notifications</span>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Profile */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
            >
              <User size={20} />
              <span>Profile</span>
            </a>
          </li>

          {/* Logout */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
        <p>This is the main content area with submenu + icons in the sidebar.</p>
      </main>
    </div>
  );
}
