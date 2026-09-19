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

    return (
        <>
            <div className="max-w-6xl mx-auto space-y-6">
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
                            <span>Recent Tests</span>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard icon={Activity} value="42" label="Cattle" color="blue" unit="Cows" />
                    <StatCard icon={Microscope} value="18" label="Total Tests" color="emerald" unit="Tests" />
                    <StatCard icon={CheckCircle} value="14" label="Good Quality" color="emerald" unit="Safe" />
                    <StatCard icon={AlertTriangle} value="4" label="Attention Needed" color="amber" unit="Alerts" />
                </div>
                <QualityScore score={80}/>


            </div>
        </>
    );
}