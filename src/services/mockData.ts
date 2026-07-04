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

export interface Announcement {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  isLongMemo: boolean;
}

export const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Senior Frontend Engineer",
    department: "Engineering",
    email: "sarah.j@company.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    status: "Active",
  },
  {
    id: "2",
    name: "Alex Rivera",
    role: "UI/UX Designer",
    department: "Design",
    email: "alex.r@company.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    status: "Remote",
  },
  {
    id: "3",
    name: "David Kim",
    role: "Product Manager",
    department: "Product",
    email: "david.k@company.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    status: "On Leave",
  },
];

export const initialLeaveBalance: LeaveBalance = {
  annual: 14,
  sick: 7,
  personal: 3,
};

export const mockAnnouncements: Announcement[] = [
  {
    id: "a1",
    title: "Q3 Product Strategy Realignment",
    author: "Operations Team",
    date: "2026-07-01",
    content:
      "As we enter the third quarter of 2026, our overarching mission is pivoting slightly to place hyper-focus on AI-driven interfaces. Consequently, we are deprecating the legacy client dashboard by late August.",
    isLongMemo: true,
  },
];
