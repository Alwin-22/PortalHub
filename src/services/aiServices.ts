// src/services/aiServices.ts

const MOCK_SUMMARIES: Record<string, string[]> = {
  a1: [
    "Company focus is shifting to hyper-focus on AI-driven interfaces for Q3 2026.",
    "The legacy client dashboard will be completely deprecated by late August.",
    "Sprint planning is shifting to a bi-weekly cadence; daily standups remain at 9:30 AM.",
  ],
  a2: [
    "The 4th-floor pantry has been completely upgraded.",
    "Free fresh fruit, yogurt, and cold brew on tap are now available to all staff.",
  ],
  a3: [
    "Annual Global Hackathon 2026 registration is open from July 22nd to July 24th.",
    "Cross-departmental teams are capped at a maximum of 4 participants.",
    "Winning teams receive cash rewards, dedicated R&D laboratory periods, and codebase insertion rights.",
  ],
  a4: [
    "Essential DevOps infrastructure database migration scheduled for Saturday, July 4th.",
    "Maintenance window runs between 11:00 PM and Sunday 2:00 AM BST.",
    "Internal testing grounds, authentication paths, and CI/CD routers will experience temporary offline breaks.",
  ],
  a5: [
    "Subsidized remote-work allocation parameters expanded to include ergonomic seating and monitor screens.",
    "All expense documentation records must be uploaded into the billing system by the 25th of each month.",
  ],
  a6: [
    "Five incoming junior engineers are joining the Product Engineering groups this week.",
    "Onboarding schedules are active across the next ten business days over chat handles.",
  ],
};

/**
 * Simulates an asynchronous call to an AI model to summarize text.
 */
export const fetchAISummary = (announcementId: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const summary = MOCK_SUMMARIES[announcementId] || [
        "Key structural parameters are currently being computed by the LLM core.",
        "Please check back shortly for the automated executive summary module.",
      ];
      resolve(summary);
    }, 1200); // 1.2 second simulated delay
  });
};
