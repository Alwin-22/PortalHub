import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import AttendanceStats from "./features/dashboard/AttendanceStats";
import LeaveSection from "./features/leave/LeaveSeaction";
import TeamDirectory from "./features/directory/TeamDirectory";
import CompanyAnnouncements from "./features/announcements/CompanyAnnouncements";
import DashboardCharts from "./features/dashboard/DashboardCharts";
import UserProfile from "./features/profile/UserProfile";
import AIChatAssistant from "./components/shared/AIChatAssistant";
import WorkspaceCalendar from "./features/calendar/WorkspaceCalendar";
import DashboardAgendaWidget from "./features/dashboard/DashboardWidget";

// 🌟 IMPORT TOASTIFY CORE PLUGINS Cleanly
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔄 IMPORT YOUR MOCK ANNOUNCEMENTS DATA LAYER HERE
import { mockAnnouncements } from "./services/mockData";

function App() {
  // 🌟 Startup view default set to overview
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

  // 🌟 LAND ON DASHBOARD ON PAGE RELOAD (Cleaned up single block)
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      setActiveTab("overview");
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🌟 NATIVE FLUID THEME TRANSITION ENGINE
  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      setDarkMode((prev) => !prev);
      return;
    }
    document.startViewTransition(() => {
      setDarkMode((prev) => !prev);
    });
  };

  return (
    // 🌟 FIXED: Root container updated with your custom theme design tokens
    <div className="min-h-screen bg-app-canvas dark:bg-app-canvas-dark text-app-header dark:text-app-header-dark antialiased transition-colors duration-200">
      {/* Navbar receives global userName state and handles Tab routing redirects */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setActiveTab={setActiveTab}
        userName={userName}
      />

      <Sidebar
        activeTab={activeTab === "profile" ? "leave" : activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="pt-16 md:pl-64">
        <div className="mx-auto max-w-7xl p-6 md:p-8 space-y-8">
          <div className="mt-2">
            {/* 📊 OVERVIEW / DASHBOARD TAB VIEW */}
            {activeTab === "overview" && (
              <section className="animate-fadeIn space-y-6">
                {/* Clean Welcome Banner - Inside Dashboard Tab Only */}
                <div className="border-b border-app-border dark:border-app-border-dark pb-5 mb-6">
                  <h1 className="text-2xl font-bold tracking-tight text-app-header dark:text-app-header-dark md:text-3xl">
                    Welcome Back, {userName.split(" ")[0]}
                  </h1>
                  <p className="text-sm text-app-muted dark:text-app-muted-dark mt-1">
                    Here is a look at your company metrics and workspace updates
                    today.
                  </p>
                </div>

                <AttendanceStats />
                <DashboardCharts />
                <div className="lg:col-span-1">
                  <DashboardAgendaWidget />
                </div>
              </section>
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
          </div>
        </div>
      </main>

      {/* 🤖 FLOATING ACTION AI CORE CHAT ASSISTANT */}
      <AIChatAssistant />

      {/* 🌟 ROOT-MOUNTED STAGE FOR APP-WIDE TOAST RUNTIMES */}
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
