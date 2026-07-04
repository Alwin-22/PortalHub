// src/features/leave/LeaveSection.tsx
import React, { useState } from "react";
import { initialLeaveBalance } from "../../../services/mockData";
import {
  Umbrella,
  ShieldAlert,
  Heart,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";

export default function LeaveSection() {
  const [balance, setBalance] = useState(initialLeaveBalance);
  const [leaveType, setLeaveType] = useState<"Annual" | "Sick" | "Personal">(
    "Annual",
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!startDate || !endDate || !reason) {
      toast.error("Please fill out all timeframe fields.", {
        className: "font-medium text-sm rounded-xl",
      });
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      toast.error(
        "Invalid Timeline: End date cannot be before the start date.",
        {
          className: "font-medium text-sm rounded-xl",
        },
      );
      return;
    }

    let balanceAvailable = false;
    if (leaveType === "Annual" && balance.annual > 0) balanceAvailable = true;
    if (leaveType === "Sick" && balance.sick > 0) balanceAvailable = true;
    if (leaveType === "Personal" && balance.personal > 0)
      balanceAvailable = true;

    if (!balanceAvailable) {
      toast.warn(`Action Denied: You have 0 days left in this category.`, {
        className: "font-medium text-sm rounded-xl",
      });
      return;
    }

    if (leaveType === "Annual") {
      setBalance((prev) => ({ ...prev, annual: prev.annual - 1 }));
    } else if (leaveType === "Sick") {
      setBalance((prev) => ({ ...prev, sick: prev.sick - 1 }));
    } else if (leaveType === "Personal") {
      setBalance((prev) => ({ ...prev, personal: prev.personal - 1 }));
    }

    toast.success(`${leaveType} leave request submitted for manager review!`, {
      className: "font-medium text-sm rounded-xl",
      icon: <span>📅</span>,
    });

    setStartDate("");
    setEndDate("");
    setReason("");
  };

  const balanceCards = [
    {
      id: "Annual",
      label: "Vacation Left",
      count: balance.annual,
      total: 25,
      color: "blue",
      icon: Umbrella,
    },
    {
      id: "Sick",
      label: "Medical Left",
      count: balance.sick,
      total: 10,
      color: "emerald",
      icon: Heart,
    },
    {
      id: "Personal",
      label: "Personal Left",
      count: balance.personal,
      total: 5,
      color: "purple",
      icon: ShieldAlert,
    },
  ] as const;

  return (
    <div className="grid gap-8 lg:grid-cols-3 items-start">
      {/* LEFT: Balance Presentation Panel */}
      <div className="lg:col-span-1 space-y-4">
        <div className="pb-1">
          <h3 className="text-sm font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider">
            Available Allowances
          </h3>
          <p className="text-xs text-app-muted dark:text-app-muted-dark mt-0.5">
            Your real-time dynamic balance updates
          </p>
        </div>

        {balanceCards.map((card) => {
          const Icon = card.icon;
          const pct = Math.max(0, (card.count / card.total) * 100);
          const themes = {
            blue: "text-blue-600 bg-blue-50/70 dark:bg-blue-950/20 dark:text-blue-400",
            emerald:
              "text-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/20 dark:text-emerald-400",
            purple:
              "text-purple-600 bg-purple-50/70 dark:bg-purple-950/20 dark:text-purple-400",
          }[card.color];

          return (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-2xl border border-app-border dark:border-app-border-dark bg-app-surface dark:bg-app-surface-dark p-5 shadow-xs group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${themes}`}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider">
                      {card.label}
                    </span>
                    <span className="text-xl font-bold text-app-header dark:text-app-header-dark tracking-tight">
                      {card.count}{" "}
                      <span className="text-xs font-medium text-app-muted">
                        / {card.total} days
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/60 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-linear-to-r ${
                    card.color === "blue"
                      ? "from-blue-500 to-indigo-500"
                      : card.color === "emerald"
                        ? "from-emerald-500 to-teal-500"
                        : "from-purple-500 to-indigo-500"
                  } rounded-full transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT: Modern Booking Window Engine */}
      <div className="lg:col-span-2 rounded-2xl border border-app-border dark:border-app-border-dark bg-app-surface dark:bg-app-surface-dark p-6 shadow-xs">
        <div className="mb-6 flex items-start gap-3.5 border-b border-app-border dark:border-app-border-dark pb-5">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-app-header dark:text-app-header-dark">
              Book Time Off
            </h3>
            <p className="text-xs text-app-muted dark:text-app-muted-dark mt-0.5">
              Select your absence category and customize your requested dates
              safely.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 🌟 RESTORED: Custom Buttons Category Track */}
          <div>
            <label className="block text-[11px] font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider mb-2.5">
              Absence Category
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["Annual", "Sick", "Personal"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setLeaveType(type)}
                  className={`relative rounded-xl py-3 text-xs font-semibold border transition-all cursor-pointer ${
                    leaveType === type
                      ? "bg-amber-400 border-transparent text-slate-950 shadow-xs"
                      : "bg-app-surface dark:bg-app-surface-dark border-app-border dark:border-app-border-dark text-app-muted dark:text-app-muted-dark hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider mb-2.5">
              Timeframe Window
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-50/50 dark:bg-slate-950/40 border border-app-border dark:border-app-border-dark p-3 rounded-xl">
              <div className="w-full bg-app-surface dark:bg-app-surface-dark border border-app-border dark:border-app-border-dark rounded-xl p-2.5 focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all shadow-2xs">
                <span className="block text-[10px] font-bold text-app-muted dark:text-app-muted-dark uppercase mb-0.5">
                  Start Date
                </span>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-transparent text-sm text-app-header dark:text-app-header-dark outline-hidden font-medium cursor-pointer dark:scheme-dark"
                />
              </div>

              <ArrowRight className="hidden sm:block h-4 w-4 text-app-muted shrink-0" />

              <div className="w-full bg-app-surface dark:bg-app-surface-dark border border-app-border dark:border-app-border-dark rounded-xl p-2.5 focus-within:ring-2 focus-within:ring-blue-500/10 focus-within:border-blue-500 transition-all shadow-2xs disabled:opacity-50">
                <span className="block text-[10px] font-bold text-app-muted dark:text-app-muted-dark uppercase mb-0.5">
                  End Date
                </span>
                <input
                  type="date"
                  min={startDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-transparent text-sm text-app-header dark:text-app-header-dark outline-hidden font-medium cursor-pointer dark:scheme-dark disabled:cursor-not-allowed"
                  disabled={!startDate}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-app-muted dark:text-app-muted-dark uppercase tracking-wider mb-2.5">
              Reason Notes
            </label>
            <input
              type="text"
              placeholder="Ex. Family trip context or scheduled medical examination..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full rounded-xl border border-app-border dark:border-app-border-dark bg-app-surface dark:bg-app-surface-dark p-3 text-sm text-app-header dark:text-app-header-dark placeholder-app-muted dark:placeholder-app-muted-dark outline-hidden focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all"
            />
          </div>

          {/* 🌟 RESTORED: Submit Request Button Configuration */}
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-linear-to-r dark:from-blue-600 dark:to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all cursor-pointer"
          >
            Confirm Request Submission
          </button>
        </form>
      </div>
    </div>
  );
}
