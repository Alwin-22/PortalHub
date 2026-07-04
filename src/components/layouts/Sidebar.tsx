// src/components/layouts/Sidebar.tsx
import {
  LayoutDashboard,
  Calendar,
  CalendarClock,
  Users,
  Megaphone,
} from "lucide-react";
import "./layout.css";

interface SidebarProps {
  activeTab:
    | "overview"
    | "leave"
    | "team"
    | "announcements"
    | "profile"
    | "calendar";
  setActiveTab: (
    tab:
      | "overview"
      | "leave"
      | "team"
      | "announcements"
      | "profile"
      | "calendar",
  ) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: "overview" as const },
    { icon: Calendar, label: "Calendar Schedule", id: "calendar" as const },
    { icon: CalendarClock, label: "Leave Requests", id: "leave" as const },
    { icon: Users, label: "Team Directory", id: "team" as const },
    { icon: Megaphone, label: "Announcements", id: "announcements" as const },
  ];

  return (
    <>
      {/* Mobile backdrop shade overlay */}
      {isOpen && (
        <div
          className="app-sidebar-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Sidebar Panel */}
      <aside className={`app-sidebar ${isOpen ? "app-sidebar-open" : ""}`}>
        <nav className="sidebar-nav-list">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`sidebar-nav-btn group ${isActive ? "sidebar-nav-btn-active" : "sidebar-nav-btn-inactive"}`}
              >
                {/* Active strip highlight indicator */}
                {isActive && <div className="sidebar-active-indicator" />}

                <item.icon
                  className={`h-4.5 w-4.5 transition-transform group-hover:scale-105 duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                />
                <span className="tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
