// src/App.tsx
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/features/layouts/Navbar";
import Sidebar from "./components/features/layouts/Sidebar";
import AttendanceStats from "./components/features/dashboard/AttendanceStats";
import DashboardCharts from "./components/features/dashboard/DashboardCharts";
import LeaveSection from "./components/features/leave/LeaveSeaction";
import WorkspaceCalendar from "./components/features/calendar/WorkspaceCalendar";

function App() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "leave" | "team" | "announcements" | "profile" | "calendar"
  >("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName] = useState("Jane Doe");
  const [darkMode, setDarkMode] = useState(false);

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
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
