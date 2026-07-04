// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "leave" | "team" | "announcements" | "profile" | "calendar"
  >("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName] = useState("Jane Doe");
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode class with HTML document root
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
      {/* Global Application Top Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setActiveTab={setActiveTab}
        userName={userName}
      />

      {/* Dynamic Screen Workspace Content View */}
      <main className="pt-16">
        <div className="mx-auto max-w-7xl p-6 md:p-8 space-y-8">
          <div className="mt-2">
            <h1 className="text-2xl font-bold">PortalHub Frame Initialized</h1>
            <p className="text-sm text-app-muted mt-1">
              Active tab routing view:{" "}
              <span className="font-mono text-blue-500 font-bold">
                {activeTab}
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
