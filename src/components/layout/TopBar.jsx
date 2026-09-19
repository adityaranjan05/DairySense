import {
  Bell,
  Languages,
  PlusCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-base font-bold text-slate-900 tracking-tight leading-tight">
                        Good Morning, Adiiiii!
                    </h2>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex p-1.5 items-center gap-1.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                        >
                            <Languages className="w-4 h-4 text-emerald-700" />
                            <span>EN</span>
                        </button>

                        <button
                            type="button"
                            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
                        >
                            <Bell className="w-5 h-5" />
                        </button>

                        <button
                            type="button"
                            onClick={() => navigate("/test")}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition shadow-sm"
                        >
                            <PlusCircle className="w-4 h-4" />
                            <span>New Test</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}