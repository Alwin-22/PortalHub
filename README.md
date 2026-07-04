
# 📝 PortalHub: Employee Workspace Dashboard

A clean, responsive Employee Portal Hub dashboard built using **React 19**, **TypeScript**, and **Tailwind CSS v4**. This project was developed as a frontend take-home assignment, focusing on component reusability, maintainable file structure, and a solid user experience.

🚀 **Live Demo:** https://portalhubworkspace.netlify.app/
📂 **GitHub Repository:** https://github.com/Alwin-22/PortalHub

---

## 🛠️ Local Setup Instructions

Follow these commands in your terminal to clone, install, and run the project locally:

```bash
# 1. Clone the repository
git clone [https://github.com/Alwin-22/PortalHub.git](https://github.com/Alwin-22/PortalHub.git)
cd PortalHub

# 2. Install dependencies
npm install

# 3. Start the Vite local development server
npm run dev

```

To test a production build locally:

```bash
npm run build
npm run preview

```

---

## 🏗️ Folder Architecture

This project implements a **Feature-Based Folder Structure** instead of grouping files strictly by technical type (e.g., placing all CSS or all components in separate monolithic folders). This pattern makes it much easier to scale the application because everything related to a single domain feature lives together.

```text
src/
├── main.tsx                    # Application entry point
├── App.tsx                     # Global state manager & tab router
├── index.css                   # Global Tailwind design base rules
├── components/                 
│   ├── layouts/                # Core layout shell of the application
│   │   ├── layout.css          # Shared structural navbar & sidebar styles
│   │   ├── Navbar.tsx          
│   │   └── Sidebar.tsx         
│   └── shared/                 # Reusable cross-feature components
│       ├── aiChatAssistant.css 
│       └── AIChatAssistant.tsx 
├── features/                   # Standalone, isolated domain feature modules
│   ├── announcements/          
│   │   └── CompanyAnnouncements.tsx
│   ├── calendar/               
│   │   ├── workspaceCalendar.css 
│   │   └── WorkspaceCalendar.tsx
│   ├── dashboard/              
│   │   ├── dashboard.css       # Layout styles for stats matrices and trends
│   │   ├── AttendanceStats.tsx 
│   │   ├── DashboardCharts.tsx 
│   │   ├── dashboardWidget.css 
│   │   └── DashboardWidget.tsx 
│   ├── directory/              
│   │   ├── teamDirectory.css   
│   │   └── TeamDirectory.tsx   
│   ├── leave/                  
│   │   ├── leaveSection.css    
│   │   └── LeaveSeaction.tsx   # Feature runtime view entry point
│   └── profile/                
│       ├── userProfile.css     
│       └── UserProfile.tsx     
├── services/                   # Modular client data utilities & simulation engines
│   ├── aiServices.ts           # AI feature prompt payload abstraction rules
│   ├── calendarData.ts         
│   └── mockData.ts             # Global employee record arrays
└── types/                      
    └── index.ts                # TypeScript strict interface contracts

```

---

## 🤖 AI Tools & Collaboration Log

I utilized **Gemini** as an iterative coding partner throughout this assignment, treating the AI like a senior pair programmer to accelerate my learning and ensure high-quality code delivery.

* **UI Layout & Scaffolding:** Used AI to quickly generate semantic HTML structures and Tailwind layouts for the components, significantly reducing initial boilerplate time.
* **Code Review & Optimization:** Asked the AI to audit files to prune out unnecessary multi-line block comments and structural visual decorations, keeping the documentation clean and concise.
* **Debugging Tailwind v4 Compiler Rules:** Tailwind v4 handles custom CSS rules differently than v3. The AI helped resolve build warnings by migrating complex rules (like responsive variants and positional variables) out of pure `@apply` strings and into standard, native CSS declarations.

---

## 📊 Assumptions & Engineering Trade-offs

### Assumptions

* **Client-Side Routing is Sufficient:** Since this is a dashboard assignment centered on frontend fundamentals, a state-driven conditional rendering pattern (`activeTab === 'overview'`) inside `App.tsx` was used instead of pulling in a heavy router library like React Router.
* **Mock Data Emulation:** A localized, structured mock array file was assumed to perfectly simulate standard backend API payloads for evaluating the UI and state management.

### Trade-offs

* **Recharts vs. Custom Tailwind CSS Graphs:** Chosen to use `Recharts` for analytics graphs. While it adds an external package to the bundle, using a battle-tested library ensures cross-browser stability, accessible tooltips, and a more polished presentation than building from scratch in a limited window.
* **Separating Layout CSS from Inline Tailwind:** Structural layout properties (such as `position: fixed`, grid math, and screen widths) were moved into dedicated `.css` files, keeping padding, margins, and colors inline. While this breaks the "strictly inline" Tailwind philosophy, it makes the TSX components significantly easier to read, debug, and maintain.
* **Synchronous State Initialization:** Used synchronous `localStorage` checks inside the initial `useState` hooks to persist dark mode and the active tab on page refresh. This slightly intercepts the very first execution thread, but it completely avoids a jarring "flash of unstyled light mode content" when a user reloads the app in dark mode.

