import {
  type Employee,
  type LeaveBalance,
  type Announcement,
} from "../types/index";

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
  {
    id: "4",
    name: "Emily Watson",
    role: "DevOps Architect",
    department: "Engineering",
    email: "emily.w@company.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    status: "Active",
  },
  {
    id: "5",
    name: "Marcus Chen",
    role: "Lead Product Designer",
    department: "Design",
    email: "marcus.c@company.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    status: "Active",
  },
  {
    id: "6",
    name: "Aisha Rahman",
    role: "Backend Engineer",
    department: "Engineering",
    email: "aisha.r@company.com",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    status: "Remote",
  },
  {
    id: "7",
    name: "Liam O'Connor",
    role: "Data Scientist",
    department: "Engineering",
    email: "liam.o@company.com",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
    status: "Remote",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    role: "Technical Product Manager",
    department: "Product",
    email: "sophia.m@company.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    status: "Active",
  },
  {
    id: "9",
    name: "James Wilson",
    role: "QA Automation Lead",
    department: "Engineering",
    email: "james.w@company.com",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    status: "On Leave",
  },
  {
    id: "10",
    name: "Chloe Harrison",
    role: "Visual Researcher",
    department: "Design",
    email: "chloe.h@company.com",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    status: "Active",
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
      "As we enter the third quarter of 2026, our overarching company mission is pivoting slightly to place hyper-focus on AI-driven interfaces. Consequently, we are deprecating the legacy client dashboard by late August. All cross-functional engineering pods are requested to synchronize their roadmaps with the Core Architecture team. Daily standups will remain at 9:30 AM, but sprint planning will shift to a bi-weekly cadence to accommodate broader system integration timelines.",
    isLongMemo: true,
  },
  {
    id: "a2",
    title: "Office Upgrade: Free Healthy Snacks!",
    author: "HR Dept",
    date: "2026-06-30",
    content:
      "The 4th-floor pantry is now fully stocked with fresh fruit, yogurt, and cold brew on tap. Feel free to swing by and refuel during the day!",
    isLongMemo: false,
  },
  {
    id: "a3",
    title: "Annual Global Hackathon 2026 Registration Open",
    author: "Engineering Council",
    date: "2026-06-28",
    content:
      "Registration is officially open for our cross-departmental Hackathon running from July 22nd to July 24th. This year's core themes focus on developer productivity metrics, visual UI consistency engines, and internal system automations. Teams can consist of up to 4 members, and we strongly encourage mixing engineering, design, and product talent. Winners will receive cash prizes, dedicated R&D lab time, and corporate tech-stack implementation tokens.",
    isLongMemo: true,
  },
  {
    id: "a4",
    title: "Upcoming Scheduled Server Maintenance Window",
    author: "DevOps Core",
    date: "2026-06-25",
    content:
      "Please note that the internal testing environments, CI/CD pipeline arrays, and the mock employee directory portal databases will undergo essential security infrastructure patches this Saturday, July 4th, between 11:00 PM and Sunday 2:00 AM BST. Expect minor system disruptions and temporary authentication dropouts during this brief database migration window.",
    isLongMemo: true,
  },
  {
    id: "a5",
    title: "New Remote-Work Expense Policy Framework",
    author: "Finance Team",
    date: "2026-06-22",
    content:
      "We are updating our home-office subsidy guidelines starting next month. The core adjustments expand coverage to include ergonomic posture seating upgrades and certified workspace monitor setups. Make sure all corporate reimbursement submissions are uploaded through the system ledger by the 25th of each month.",
    isLongMemo: false,
  },
  {
    id: "a6",
    title: "Welcoming Our Summer Engineering Cohort",
    author: "Talent Acquisition",
    date: "2026-06-18",
    content:
      "Please join us in giving a warm welcome to our five new incoming junior developers joining the Product Engineering pods this week! They will be moving through onboarding pathways over the next ten days, so feel free to reach out and say hello via internal chat handles.",
    isLongMemo: false,
  },
];
