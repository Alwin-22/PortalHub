// src/components/dashboard/AttendanceStats.tsx
import { Users, Clock, UserCheck } from "lucide-react";
import "./dashboard.css";

export default function AttendanceStats() {
  return (
    <div className="dashboard-grid">
      {/* Active Headcount Card */}
      <div className="stats-card">
        <div className="stats-header">
          <span className="stats-label">Active Staff</span>
          <div className="stats-icon-wrapper">
            <Users className="h-5 w-5" />
          </div>
        </div>
        <div className="stats-value">12 / 15</div>
      </div>

      {/* On Leave Card */}
      <div className="stats-card">
        <div className="stats-header">
          <span className="stats-label">On Leave Today</span>
          <div className="stats-icon-wrapper">
            <Clock className="h-5 w-5" />
          </div>
        </div>
        <div className="stats-value">2</div>
      </div>

      {/* Present Rate Card */}
      <div className="stats-card">
        <div className="stats-header">
          <span className="stats-label">Attendance Rate</span>
          <div className="stats-icon-wrapper">
            <UserCheck className="h-5 w-5" />
          </div>
        </div>
        <div className="stats-value">80%</div>
      </div>
    </div>
  );
}
