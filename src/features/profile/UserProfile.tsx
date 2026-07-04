import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Shield,
  Building,
  MapPin,
  Phone,
  BadgeCheck,
} from "lucide-react";
import { toast } from "react-toastify";
import "./userProfile.css";

interface UserProfileProps {
  userName: string;
  onNameChange: (newName: string) => void;
}

const COUNTRY_CODES = [
  { code: "+44", label: "UK (+44)" },
  { code: "+1", label: "US/CA (+1)" },
  { code: "+91", label: "IN (+91)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+33", label: "FR (+33)" },
  { code: "+49", label: "DE (+49)" },
];

export default function UserProfile({
  userName,
  onNameChange,
}: UserProfileProps) {
  const [countryCode, setCountryCode] = useState("+44");
  const [formData, setFormData] = useState({
    name: userName,
    email: "jane.doe@company.com",
    phone: "7700900077",
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

    const toastConfig = {
      className: "font-medium text-sm rounded-xl shadow-md",
    };

    const cleanedName = formData.name.trim();
    if (!cleanedName) {
      toast.error("Full Name cannot be left blank.", toastConfig);
      return;
    }
    if (cleanedName.length < 2) {
      toast.error("Full Name must be at least 2 characters long.", toastConfig);
      return;
    }
    const nameRegex = /^[a-zA-Z\s\-']{2,}$/;
    if (!nameRegex.test(cleanedName)) {
      toast.error("Full Name contains invalid characters.", toastConfig);
      return;
    }

    const cleanedEmail = formData.email.trim();
    if (!cleanedEmail) {
      toast.error("Email Address cannot be left blank.", toastConfig);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanedEmail)) {
      toast.error("Please provide a valid email address.", toastConfig);
      return;
    }

    const cleanedPhone = formData.phone.replace(/\s+/g, "");
    if (!cleanedPhone) {
      toast.error("Mobile Number is required.", toastConfig);
      return;
    }
    const digitRegex = /^\d{10}$/;
    if (!digitRegex.test(cleanedPhone)) {
      toast.error("Mobile number must be exactly 10 digits.", toastConfig);
      return;
    }

    const cleanedLocation = formData.location.trim();
    if (!cleanedLocation) {
      toast.error("Office Location must be specified.", toastConfig);
      return;
    }
    if (cleanedLocation.length < 3) {
      toast.error(
        "Office Location must be at least 3 characters.",
        toastConfig,
      );
      return;
    }

    const fullPhoneNumber = `${countryCode} ${cleanedPhone}`;

    onNameChange(cleanedName);
    localStorage.setItem("employeeName", cleanedName);
    localStorage.setItem("employeePhone", fullPhoneNumber);

    toast.success("Profile setting configurations saved!", {
      ...toastConfig,
      icon: <span>👤</span>,
    });
  };

  const initials = formData.name
    .split(" ")
    .filter(Boolean)
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
                <Building className="tag-icon" />
                {formData.department}
              </span>
              <span className="metadata-tag">
                <MapPin className="tag-icon" />
                {formData.location}
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

              {/* Mobile Number Container - Fixed to take full width of the form grid row */}
              <div className="input-field-group sm:col-span-2">
                <label className="input-field-label">
                  <Phone className="label-icon" /> Mobile Number
                </label>
                <div className="phone-input-group">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="profile-text-input phone-country-select"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <option
                        key={item.code}
                        value={item.code}
                        className="bg-app-surface dark:bg-app-surface-dark"
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phone"
                    maxLength={10}
                    placeholder="7700900077"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="profile-text-input phone-number-input"
                  />
                </div>
              </div>

              {/* Office Location Container - Spans full width for clean uniformity */}
              <div className="input-field-group sm:col-span-2">
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
