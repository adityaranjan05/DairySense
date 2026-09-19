import { NavLink } from "react-router-dom";
import { Wheat, LayoutDashboard, Microscope, History, BarChart3, User, PhoneCall } from "lucide-react";

export default function SideBar() {
    const navLinks = [
        { to: "/", label: "Home", icon: LayoutDashboard },
        { to: "/test", label: "New Test", icon: Microscope, highlight: true },
        { to: "/history", label: "History", icon: History },
        { to: "/analytics", label: "Analytics", icon: BarChart3 },
        { to: "/profile", label: "Profile", icon: User }
    ];

    return (
        <>
            <div className="flex flex-col h-screen justify-between">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white shadow-md">
                            <Wheat className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                                <span>DairySense</span>
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md">
                                AI
                                </span>
                            </h1>
                            <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                                Smart Feed & Silage Testing
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                        Main Menu
                    </div>

                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            // onClick={onClose}
                            className={({ isActive }) =>
                            `flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                                isActive
                                ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                                : link.highlight
                                ? "text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                            }`
                            }
                        >
                            <Icon className="w-5 h-5 shrink-0" />
                            <span>{link.label}</span>
                            {link.highlight && (
                            <span className="ml-auto text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                                AI Test
                            </span>
                            )}
                        </NavLink>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-slate-100">
                    <div className="p-3 flex gap-2 bg-orange-500/10 border border-orange-300 rounded-2xl">
                        <div>
                            <PhoneCall className="w-5 h-5 text-orange-600"/>
                        </div>
                        <div>
                            <p className="text-[13px] font-medium">Kisan Cattle Helpline</p>
                            <p className="text-[13px] font-semibold">1800-180-1551</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}