import { CheckCircle2, Users, Clock, ArrowUpRight } from "lucide-react";

export default function AttendanceStats() {
  const stats = [
    {
      label: "Your Status Today",
      value: "Checked In",
      subtext: "09:02 AM Timestamp",
      icon: CheckCircle2,
      color:
        "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30",
    },
    {
      label: "Monthly Attendance Rate",
      value: "98.4%",
      subtext: "+0.5% from last month",
      icon: Clock,
      color:
        "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30",
      badge: true,
    },
    {
      label: "Team Attendance",
      value: "18 / 20 Present",
      subtext: "2 On Leave today",
      icon: Users,
      color:
        "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="rounded-2xl border border-app-border dark:border-app-border-dark bg-app-surface dark:bg-app-surface-dark p-5 shadow-xs flex items-center justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
          >
            <div className="space-y-1.5">
              <span className="block text-[11px] font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider">
                {stat.label}
              </span>
              <h3 className="text-xl font-bold text-app-header dark:text-app-header-dark tracking-tight flex items-center gap-2">
                {stat.value}
                {stat.badge && (
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <ArrowUpRight className="h-2.5 w-2.5" /> 0.5%
                  </span>
                )}
              </h3>
              <p className="text-xs text-app-muted dark:text-app-muted-dark font-medium">
                {stat.subtext}
              </p>
            </div>

            <div
              className={`p-3 rounded-xl border transition-all duration-200 ${stat.color} group-hover:scale-102`}
            >
              <Icon className="h-4.5 w-4.5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
