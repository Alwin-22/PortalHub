// src/components/layouts/Navbar.tsx
import { Sun, Moon, Menu, Bell } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: () => void;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setActiveTab: (
    tab:
      | "overview"
      | "leave"
      | "team"
      | "announcements"
      | "profile"
      | "calendar",
  ) => void;
  userName: string;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  setIsSidebarOpen,
  isSidebarOpen,
  setActiveTab,
  userName,
}: NavbarProps) {
  // Get the first letters of the user's name for a fallback profile icon
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <header className="fixed top-0 right-0 left-0 z-40 flex h-16 items-center justify-between border-b border-app-border dark:border-app-border-dark bg-app-surface/70 dark:bg-app-surface-dark/70 px-4 backdrop-blur-xl transition-all duration-200 md:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle Button */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="rounded-xl p-2 text-app-muted hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden cursor-pointer transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Brand Logo Identity Anchor */}
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          title="Go to Dashboard Overview"
        >
          <div className="h-8 w-8 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/20 group-hover:scale-102 transition-transform">
            H
          </div>
          <span className="text-sm font-semibold tracking-tight text-app-header dark:text-app-header-dark group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            PortalHub
          </span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Theme Light/Dark Mode Switcher */}
        <button
          type="button"
          onClick={setDarkMode}
          className="group relative rounded-xl p-2 text-app-muted dark:text-app-muted-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          {darkMode ? (
            <Sun className="h-4 w-4 text-amber-500" />
          ) : (
            <Moon className="h-4 w-4 text-slate-600" />
          )}
        </button>

        {/* Notifications Icon Button */}
        <button
          type="button"
          className="group relative rounded-xl p-2 text-app-muted dark:text-app-muted-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

        {/* User Profile Button Anchor */}
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className="group relative flex items-center gap-2.5 rounded-xl p-1 text-left outline-none hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all cursor-pointer"
        >
          <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-500 text-white font-semibold text-xs flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm transition-transform group-hover:scale-102">
            {initials || "EE"}
          </div>

          <div className="hidden sm:block pr-1.5">
            <span className="block text-xs font-semibold text-app-header dark:text-app-header-dark tracking-tight leading-none">
              {userName}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
