// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import AttendanceStats from "./components/dashboard/AttendanceStats";

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
            </>
          )}

          {activeTab !== "overview" && (
            <div className="mt-2">
              <h1 className="text-2xl font-bold">PortalHub Route View</h1>
              <p className="text-sm text-app-muted mt-1">
                Active panel segment:{" "}
                <span className="font-mono text-blue-500 font-bold">
                  {activeTab}
                </span>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
