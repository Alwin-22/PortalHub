// src/App.tsx
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import AttendanceStats from "./features/dashboard/AttendanceStats";
import DashboardCharts from "./features/dashboard/DashboardCharts";
import LeaveSection from "./features/leave/LeaveSeaction";
import WorkspaceCalendar from "./features/calendar/WorkspaceCalendar";
import CompanyAnnouncements from "./features/announcements/CompanyAnnouncements";
import { mockAnnouncements } from "./services/mockData";
import TeamDirectory from "./features/directory/TeamDirectory";
import UserProfile from "./features/profile/UserProfile";

function App() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "leave" | "team" | "announcements" | "profile" | "calendar"
  >("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // 👤 Centralized User State Engine
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("employeeName") || "Jane Doe";
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-app-canvas dark:bg-app-canvas-dark text-app-header dark:text-app-header-dark antialiased transition-colors duration-200">
      <Navbar
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setActiveTab={setActiveTab}
        userName={userName}
      />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="pt-16 md:pl-64">
        <div className="mx-auto max-w-7xl p-6 md:p-8 space-y-6">
          {activeTab === "overview" && (
            <>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Workspace Overview
                </h1>
                <p className="text-sm text-app-muted mt-1">
                  Real-time operational business insights
                </p>
              </div>
              <AttendanceStats />
              <DashboardCharts />
            </>
          )}
          {/* 📅 WORKSPACE CALENDAR VIEW */}
          {activeTab === "calendar" && (
            <section className="animate-fadeIn">
              <WorkspaceCalendar />
            </section>
          )}
          {/* 📅 LEAVE REQUESTS TAB VIEW */}
          {activeTab === "leave" && (
            <section className="animate-fadeIn">
              <LeaveSection />
            </section>
          )}
        </div>

        {/* 👥 TEAM DIRECTORY TAB VIEW */}
        {activeTab === "team" && (
          <section className="animate-fadeIn">
            <TeamDirectory />
          </section>
        )}

        {/* 📢 ANNOUNCEMENTS FEED TAB VIEW */}
        {activeTab === "announcements" && (
          <section className="animate-fadeIn max-w-4xl space-y-4">
            <div className="mb-4 border-b border-app-border dark:border-app-border-dark pb-4">
              <h2 className="text-xl font-bold text-app-header dark:text-app-header-dark tracking-tight">
                Latest Board Communications
              </h2>
              <p className="text-xs text-app-muted dark:text-app-muted-dark mt-0.5">
                Stay up to date with official corporate operational
                announcements.
              </p>
            </div>

            {mockAnnouncements.map((announcement) => (
              <CompanyAnnouncements
                key={announcement.id}
                id={announcement.id}
                title={announcement.title}
                content={announcement.content}
              />
            ))}
          </section>
        )}
        {/* 👤 USER SETTINGS PROFILE TAB VIEW */}
        {activeTab === "profile" && (
          <section className="animate-fadeIn">
            <UserProfile userName={userName} onNameChange={setUserName} />
          </section>
        )}
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme={darkMode ? "dark" : "light"}
        />
      </main>
    </div>
  );
}

export default App;
