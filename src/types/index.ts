export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  avatar: string;
  status: "Active" | "Remote" | "On Leave";
}

export interface LeaveBalance {
  annual: number;
  sick: number;
  personal: number;
}

export interface LeaveRequest {
  id: string;
  startDate: string;
  endDate: string;
  leaveType: "Annual" | "Sick" | "Personal";
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  isLongMemo?: boolean;
}
