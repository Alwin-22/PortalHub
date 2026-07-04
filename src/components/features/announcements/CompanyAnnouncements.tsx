import { useState } from "react";
import { fetchAISummary } from "../../../services/aiServices";
import { Sparkles, Loader2, Bot, HelpCircle } from "lucide-react";

interface CompanyAnnouncementsProps {
  id: string;
  title: string;
  content: string;
}

export default function CompanyAnnouncements({
  id,
  title,
  content,
}: CompanyAnnouncementsProps) {
  const [summary, setSummary] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const result = await fetchAISummary(id);
      setSummary(result);
    } catch (error) {
      console.error("AI Summarization failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xs border border-slate-200/60 dark:border-slate-800/80 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0 mt-0.5">
          <HelpCircle className="h-4 w-4" />
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
            {content}
          </p>
        </div>
      </div>

      {/* Action Controller Layer */}
      <div className="mt-4 pl-9">
        {!summary && !loading && (
          <button
            onClick={handleSummarize}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs cursor-pointer focus:outline-hidden"
          >
            <Sparkles className="h-3 w-3" /> Summarize with AI
          </button>
        )}

        {/* Polished Native Rotation Loader */}
        {loading && (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>AI is parsing communication deck...</span>
          </div>
        )}

        {/* AI Output Deck Container */}
        {summary && (
          <div className="p-4 bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/10 dark:border-emerald-900/40 rounded-xl animate-fadeIn">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <Bot className="h-3.5 w-3.5" /> Summary
            </h4>
            <ul className="mt-2.5 list-disc pl-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              {summary.map((bullet, index) => (
                <li key={index} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
