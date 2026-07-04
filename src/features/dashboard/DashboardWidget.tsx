// src/features/dashboard/DashboardWidget.tsx
import { mockWorkspaceEvents } from "../../services/calendarData";
import "./dashboardWidget.css";

export default function DashboardAgendaWidget() {
  const badgeColors = {
    todo: "badge-todo",
    deadline: "badge-deadline",
    meeting: "badge-meeting",
  };

  return (
    <div className="agenda-widget-container">
      {/* Widget Header Area */}
      <div className="agenda-widget-header">
        <h4 className="agenda-widget-title">📅 Upcoming Agenda</h4>
      </div>

      {/* Agenda Main List */}
      <div className="agenda-list-wrapper">
        {mockWorkspaceEvents.slice(0, 3).map((event) => (
          <div key={event.id} className="agenda-list-item">
            {/* Left Content Column Cluster */}
            <div className="item-left-cluster">
              {/* Type Status Badge */}
              <span
                className={`type-status-badge ${
                  badgeColors[event.type as keyof typeof badgeColors] || ""
                }`}
              >
                {event.type}
              </span>

              {/* Event Metadata */}
              <div className="event-metadata-block">
                <p className="event-title-text">{event.title}</p>
                <p className="event-description-text">{event.description}</p>
              </div>
            </div>

            {/* Right Date Stamp Pin */}
            <span className="event-date-stamp">
              {new Date(event.start).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
