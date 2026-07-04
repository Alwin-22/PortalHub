import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { toast } from "react-toastify";
import { mockWorkspaceEvents } from "../../../services/calendarData";
import "../calendar/workspaceCalendar.css";

export default function WorkspaceCalendar() {
  const handleEventClick = (info: any) => {
    if (info.view.type === "listMonth") return;
    const desc = info.event.extendedProps.description || "No notes.";
    toast.info(`ℹ️ ${info.event.title}: ${desc}`, { position: "top-center" });
  };

  const mapEventStyles = (events: typeof mockWorkspaceEvents): any[] => {
    const colorMap: Record<string, string> = {
      meeting: "calendar-event-pill cursor-pointer",
      deadline: "calendar-event-pill cursor-pointer",
      todo: "calendar-event-pill cursor-pointer",
    };

    return events.map((e) => ({
      ...e,
      // Pass clean layout parameters to FullCalendar properties
      classNames: [colorMap[e.type] || colorMap.meeting],
      // Put custom variables explicitly inside extendedProps
      extendedProps: {
        ...e.extendedProps,
        category: e.type,
        description: e.description,
      },
    }));
  };

  return (
    <div className="rounded-2xl border border-slate-300/80 dark:border-slate-800/90 bg-app-surface dark:bg-slate-950 p-6 shadow-sm transition-colors duration-200">
      {/* View Header */}
      <div className="mb-6 flex items-center gap-3.5 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-lg select-none">
          📅
        </div>
        <div>
          <h3 className="text-base font-bold text-app-header dark:text-app-header-dark tracking-tight">
            Workspace Schedule
          </h3>
          <p className="text-xs text-app-muted dark:text-app-muted-dark mt-0.5">
            Manage your personal tasks, operational deadlines, and live team
            meetings.
          </p>
        </div>
      </div>

      {/* FullCalendar Wrapper Container */}
      <div className="calendar-container text-app-header dark:text-app-header-dark text-sm font-medium">
        <FullCalendar
          plugins={[dayGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,listMonth",
          }}
          buttonText={{ today: "Today" }}
          events={mapEventStyles(mockWorkspaceEvents)}
          eventClick={handleEventClick}
          height="auto"
          nowIndicator={true}
          eventDisplay="block"
          viewClassNames={(arg) => {
            return arg.view.type === "dayGridMonth"
              ? "is-month-grid"
              : "is-list-grid";
          }}
          eventDidMount={(info) => {
            // Correctly access via extendedProps now
            const cat = info.event.extendedProps.category;
            if (cat) info.el.setAttribute("data-type", cat);
          }}
        />
      </div>
    </div>
  );
}
