import { useState } from "react";
import { mockEmployees } from "../../../services/mockData";
import { Search, Filter, Mail } from "lucide-react";
import "./teamDirectory.css";


export default function TeamDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredEmployees = mockEmployees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDept === "All" || employee.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="directory-container">
      {/* Header & Controls Area */}
      <div className="directory-header">
        <div>
          <h3 className="directory-title">Team Directory</h3>
          <p className="directory-subtitle">
            Find and connect with company team members instantly.
          </p>
        </div>

        <div className="controls-group">
          {/* Search Input Box */}
          <div className="input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search name or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Department Filter Dropdown */}
          <div className="input-wrapper">
            <Filter className="filter-icon" />
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="select-dropdown"
            >
              <option value="All" className="dark:bg-slate-900">
                All Departments
              </option>
              <option value="Engineering" className="dark:bg-slate-900">
                Engineering
              </option>
              <option value="Design" className="dark:bg-slate-900">
                Design
              </option>
              <option value="Product" className="dark:bg-slate-900">
                Product
              </option>
            </select>
            <div className="select-arrow" />
          </div>
        </div>
      </div>

      {/* Conditional Content Region */}
      {filteredEmployees.length === 0 ? (
        <div className="empty-state">
          No team members match your filtering parameters.
        </div>
      ) : (
        <div className="directory-grid">
          {filteredEmployees.map((employee) => (
            <div key={employee.id} className="employee-card group">
              {/* Avatar Wrapper */}
              <div className="avatar-wrapper">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="avatar-image"
                />
                <span
                  className={`status-indicator ${
                    employee.status === "Active"
                      ? "bg-emerald-500"
                      : employee.status === "Remote"
                        ? "bg-blue-500"
                        : "bg-amber-500"
                  }`}
                />
              </div>

              {/* Identity & Department Tags */}
              <div className="employee-details">
                <h4 className="employee-name">{employee.name}</h4>
                <p className="employee-role">{employee.role}</p>
                <div className="department-tag">{employee.department}</div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="action-mail-btn"
                title={`Contact ${employee.name.split(" ")[0]}`}
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
