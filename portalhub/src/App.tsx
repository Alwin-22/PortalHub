// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";

function App() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "leave" | "team" | "announcements" | "profile" | "calendar"
  >("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName] = useState("Jane Doe");
  const [darkMode, setDarkMode] = useState(false);

  // Synchronize system layout dark mode state classes
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
      {/* Global Application Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        setActiveTab={setActiveTab}
        userName={userName}
      />

      {/* Global Modular View Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Core Dynamic Screen Content View Window Canvas */}
      <main className="pt-16 md:pl-64">
        <div className="mx-auto max-w-7xl p-6 md:p-8 space-y-8">
          <div className="mt-2">
            <h1 className="text-2xl font-bold">
              PortalHub Core Frame Initialized
            </h1>
            <p className="text-sm text-app-muted mt-1">
              Active tab routing channel:{" "}
              <span className="font-mono text-blue-500">{activeTab}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
