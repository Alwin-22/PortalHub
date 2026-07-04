import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const attendanceTrendData = [
  { day: "Mon", Present: 92, Remote: 5, OnLeave: 3 },
  { day: "Tue", Present: 95, Remote: 3, OnLeave: 2 },
  { day: "Wed", Present: 88, Remote: 8, OnLeave: 4 },
  { day: "Thu", Present: 94, Remote: 4, OnLeave: 2 },
  { day: "Fri", Present: 91, Remote: 6, OnLeave: 3 },
];

const leaveBreakdownData = [
  { name: "Annual Leave", value: 14, color: "#10b981" }, // Emerald 500
  { name: "Sick Leave", value: 7, color: "#3b82f6" }, // Blue 500 (Fixed quotes & value here!)
  { name: "Personal Leave", value: 3, color: "#f59e0b" }, // Amber 500
];

// Premium Custom HTML Tooltip Generator
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 p-3 shadow-lg backdrop-blur-md">
        <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">{label} Breakdown</p>
        <div className="space-y-1">
          {payload.map((item: any, idx: number) => (
            <div key={idx} className="flex items-center gap-4 text-[11px] font-medium">
              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color || item.stroke }} />
                {item.name}:
              </span>
              <span className="font-semibold text-slate-900 dark:text-white ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* AREA CHART: Weekly Team Attendance */}
      <div className="lg:col-span-2 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-200/60 dark:border-slate-800/80">
        <div className="mb-5">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Company Attendance Trends (%)
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            Daily breakdown of workforce presence channels
          </p>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={attendanceTrendData}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorRemote" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="4 4"
                className="stroke-slate-100 dark:stroke-slate-800/60"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                stroke="#94a3b8"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                dy={8}
                className="font-medium text-slate-400"
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                dx={-8}
                className="font-medium text-slate-400"
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                name="Present"
                dataKey="Present"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPresent)"
              />
              <Area
                type="monotone"
                name="Remote"
                dataKey="Remote"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRemote)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🍩 PIE CHART: Personal Leave Breakdown */}
      <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Available Leave Portfolio
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            Distribution of remaining allocated days
          </p>
        </div>

        <div className="h-44 w-full relative flex items-center justify-center my-3">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={leaveBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={72}
                paddingAngle={4}
                dataKey="value"
              >
                {leaveBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} className="outline-hidden" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              24
            </span>
            <span className="text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mt-0.5">
              Total Days
            </span>
          </div>
        </div>

        {/* Dynamic Legend Vector List */}
        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/60 pt-4">
          {leaveBreakdownData.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-xs font-medium">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="tracking-tight">{item.name}</span>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {item.value} Days
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}