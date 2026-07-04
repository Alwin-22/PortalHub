import { Sun, Moon, Menu, Bell } from "lucide-react";
import "./layouts.css";

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
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <header className="app-navbar">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburg Trigger */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Brand Link */}
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className="navbar-brand-btn"
          title="Go to Dashboard Overview"
        >
          <div className="navbar-brand-logo">H</div>
          <span className="navbar-brand-text">PortalHub</span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Light/Dark Toggle */}
        <button
          type="button"
          onClick={setDarkMode}
          className="navbar-action-btn"
        >
          {darkMode ? (
            <Sun className="h-4 w-4 text-amber-500" />
          ) : (
            <Moon className="h-4 w-4 text-slate-600" />
          )}
        </button>

        {/* Notification Icon */}
        <button type="button" className="navbar-action-btn">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        <div className="h-4 w-1px bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

        {/* User Profile Hook */}
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className="navbar-profile-btn"
        >
          <div className="navbar-profile-avatar">{initials || "EE"}</div>
          <div className="hidden sm:block pr-1.5">
            <span className="block text-xs font-semibold tracking-tight leading-none text-app-header dark:text-app-header-dark">
              {userName}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
