export interface WorkspaceEvent {
  extendedProps?: any;
  id: string;
  title: string;
  start: string; // ISO format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS
  end?: string;
  type: "todo" | "deadline" | "meeting";
  description: string;
}

export const mockWorkspaceEvents: WorkspaceEvent[] = [
  {
    id: "e1",
    title: "⚡ Q3 Project Realignment",
    start: "2026-07-06T10:00:00",
    end: "2026-07-06T11:30:00",
    type: "meeting",
    description: "Synchronizing cross-departmental engineering roadmaps.",
  },
  {
    id: "e2",
    title: "🚨 PortalHub Code Submission",
    start: "2026-07-10T17:00:00",
    type: "deadline",
    description: "Final codebase review and asset locking window.",
  },
  {
    id: "e3",
    title: "🎉 Annual Global Hackathon",
    start: "2026-07-22",
    end: "2026-07-25",
    type: "todo",
    description: "Three days of prototyping and internal system builds.",
  },
  {
    id: "e4",
    title: "🛠️ Scheduled Server Patching",
    start: "2026-07-18T23:00:00",
    end: "2026-07-19T02:00:00",
    type: "meeting",
    description: "Essential DevOps core security upgrades.",
  },
];
