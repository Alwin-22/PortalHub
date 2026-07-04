import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Shield,
  Building,
  Phone,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import { toast } from "react-toastify";
import "./userProfile.css";

interface UserProfileProps {
  userName: string;
  onNameChange: (newName: string) => void;
}

export default function UserProfile({
  userName,
  onNameChange,
}: UserProfileProps) {
  const [formData, setFormData] = useState({
    name: userName,
    email: "jane.doe@company.com",
    phone: "+44 7700 900077",
    location: "London, UK",
    department: "Product Engineering",
    role: "Senior UX Researcher",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, name: userName }));
  }, [userName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    if (!formData.name.trim()) {
      toast.error("Full Name cannot be left blank.", {
        className: "font-medium text-sm rounded-xl shadow-md",
      });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please provide a valid email address.", {
        className: "font-medium text-sm rounded-xl shadow-md",
      });
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Mobile Number is required.", {
        className: "font-medium text-sm rounded-xl shadow-md",
      });
      return;
    }
    if (!formData.location.trim()) {
      toast.error("Office Location must be specified.", {
        className: "font-medium text-sm rounded-xl shadow-md",
      });
      return;
    }

    onNameChange(formData.name.trim());
    localStorage.setItem("employeeName", formData.name.trim());

    toast.success("Profile setting configurations saved!", {
      className: "font-medium text-sm rounded-xl shadow-md",
      icon: <span>👤</span>,
    });
  };

  const initials = formData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="profile-layout-container">
      {/* Premium Identity Header Banner Card */}
      <div className="profile-banner-card">
        <div className="banner-flex-layout">
          <div className="profile-avatar-initials">{initials || "EE"}</div>
          <div className="banner-identity-details">
            <h2 className="banner-name-heading">
              {formData.name}
              <BadgeCheck className="verification-badge" />
            </h2>
            <p className="banner-role-subtext">{formData.role}</p>
            <div className="banner-metadata-tags">
              <span className="metadata-tag">
                <Building className="tag-icon" /> {formData.department}
              </span>
              <span className="metadata-tag">
                <MapPin className="tag-icon" /> {formData.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-grid-layout">
        {/* Left Side Info Card */}
        <div className="sidebar-column">
          <div className="security-access-card">
            <h3 className="sidebar-section-title">Security Access Profile</h3>
            <div className="security-status-badge">
              <Shield className="security-icon" />
              <span>Standard Portal Member</span>
            </div>
          </div>
        </div>

        {/* Right Side Settings Form */}
        <div className="form-column">
          <form onSubmit={handleFormSubmit} className="settings-form-element">
            <h3 className="form-header-title">Personal Information Settings</h3>

            <div className="form-input-grid">
              <div className="input-field-group">
                <label className="input-field-label">
                  <User className="label-icon" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="profile-text-input"
                />
              </div>

              <div className="input-field-group">
                <label className="input-field-label">
                  <Mail className="label-icon" /> Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="profile-text-input"
                />
              </div>

              <div className="input-field-group">
                <label className="input-field-label">
                  <Phone className="label-icon" /> Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="profile-text-input"
                />
              </div>

              <div className="input-field-group">
                <label className="input-field-label">
                  <MapPin className="label-icon" /> Office Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="profile-text-input"
                />
              </div>
            </div>

            <div className="form-action-row">
              <button type="submit" className="form-submit-btn">
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
