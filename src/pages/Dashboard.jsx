import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Microscope, Activity, CheckCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import StatCard from "../components/Dashboard/StatCard";
import QualityScore from "../components/Dashboard/QualityScore";

export default function Dashboard() {
    const [greeting, setGreeting] = useState("");
    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            if (hour < 12) {
                setGreeting("Good morning");
            }
            else if (hour < 17) {
                setGreeting("Good afternoon");
            }
            else {
                setGreeting("Good evening");
            }
        };
        updateGreeting();
        const timer = setInterval(updateGreeting , 60000);
        return () => clearInterval(timer);
    } ,[]);

    const navigate = useNavigate();

    const score = 74;
    
    let qualityStatus;
    let color;
    let secondaryColor;
    let feedingStatus;

    if (score > 80) {
        qualityStatus = "Good Conditions";
        color = "text-emerald-500";
        secondaryColor = "text-emerald-700";
        feedingStatus = "Safe to Feed";
    }
    else if (score > 50) {
        qualityStatus = "Action Needed";
        color = "text-orange-500";
        secondaryColor = "text-orange-700";
        feedingStatus = "Review Recommended";
    }
    else {
        qualityStatus = "Poor Conditions";
        color = "text-red-500";
        secondaryColor = "text-red-700";
        feedingStatus = "Check Before Feeding";
    }

    return (
        <>
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="rounded-2xl p-10 bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-950 shadow-xl text-white overflow-hidden">
                    <div className="max-w-xl relative z-10">
                        <h1 className="text-4xl font-extrabold tracking-tight">
                            {greeting}, Adiiiii!
                        </h1>
                        <p className="mt-2 text-base text-emerald-100 font-medium leading-relaxed">
                            Here's your feed quality overview. Get rapid AI-powered feed and silage quality analysis with nutritional, safety, and storage recommendations.
                        </p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => navigate("/test")}
                            className="bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 active:scale-98 group cursor-pointer"
                        >
                            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                                <Microscope className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                            </div>
                            <span>
                                Test Feed / Silage 
                            </span>
                            <ArrowRight className="w-5 h-5 text-emerald-800 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                        <Link
                            to="/history"
                            className="bg-emerald-800/80 hover:bg-emerald-800 text-white font-semibold text-sm px-5 py-3.5 rounded-2xl border border-emerald-600/50 hover:border-emerald-600 transition-all flex items-center gap-2"
                        >
                            <span>Recent Quality Tests</span>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard icon={Activity} value="42" label="Cattle" color="blue" unit="Cows" />
                    <StatCard icon={Microscope} value="18" label="Total Tests" color="emerald" unit="Tests" />
                    <StatCard icon={CheckCircle} value="14" label="Good Quality" color="emerald" unit="Safe" />
                    <StatCard icon={AlertTriangle} value="4" label="Attention Needed" color="amber" unit="Alerts" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-700 text-sm font-semibold tracking-wide">
                                QUALITY INDEX
                            </span>
                            <span className="text-green-900 bg-green-500/10 px-2 py-0.5 text-sm border border-green-500/20 rounded-2xl">
                                Farm Average
                            </span>
                        </div>
                        <h1 className="font-extrabold text-lg ">
                            Overall Feed Quality
                        </h1>
                        <p className="text-sm text-slate-500 ">
                            Based on historical nutritional & moisture metrics
                        </p>
                        <div className="flex justify-center mt-5">
                            <QualityScore score={score} />
                        </div>
                        <div className={`text-center mt-4 ${color} font-bold`}>
                            {qualityStatus}
                        </div>
                        <div className="flex justify-between mt-8 bg-slate-300/10 py-2 px-3 rounded-2xl border border-slate-300/40 items-center">
                            <span className="text-sm text-slate-700">
                                Safe Feeding Status:
                            </span>
                            <span className={`text-sm ${secondaryColor} font-bold`}>
                                {feedingStatus}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/test")}
                        className="bg-emerald-100/10 rounded-3xl p-6 border border-emerald-200 shadow-sm
                                flex flex-col justify-between h-full w-full text-left
                                hover:shadow-sm hover:shadow-emerald-500 hover:border-emerald-500
                                transition-all duration-150 cursor-pointer"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700 text-sm font-semibold tracking-wide">
                                    FEED TEST
                                </span>

                                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                                    <Microscope className="w-5 h-5" />
                                </div>
                            </div>

                            <h2 className="font-extrabold text-xl mt-4">
                                Test Feed
                            </h2>

                            <p className="text-sm text-slate-500 mt-2">
                                Check nutritional quality, moisture, adulteration and safety.
                            </p>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-emerald-700 font-semibold border-t border-emerald-500/20 pt-2">
                            Start Feed Test
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/test")}
                        className="bg-amber-100/10 rounded-3xl p-6 border border-amber-200 shadow-sm
                                flex flex-col justify-between h-full w-full text-left
                                hover:shadow-sm hover:shadow-amber-500 hover:border-amber-500
                                transition-all duration-150 cursor-pointer"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-700 text-sm font-semibold tracking-wide">
                                    SILAGE TEST
                                </span>

                                <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                                    <Activity className="w-5 h-5" />
                                </div>
                            </div>

                            <h2 className="font-extrabold text-xl mt-4">
                                Test Silage
                            </h2>

                            <p className="text-sm text-slate-500 mt-2">
                                Check fermentation, pH, moisture, spoilage and mould risk.
                            </p>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-amber-700 font-semibold border-t border-orange-500/20 pt-2">
                            Start Silage Test
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}