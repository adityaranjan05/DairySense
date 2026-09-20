import { Search, SlidersHorizontal, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function History () {
    const navigate = useNavigate();
    const tests = [
        {
            id: 1,
            name: "Feed Batch #14",
            type: "Feed",
            date: "20 Sep 2026",
            score: 84,
            status: "Good",
            storage: "21 days",
            protein: "18.4%",
            moisture: "11.2%",
            energy: "8.6 MJ",
            adulteration: "Not detected",
            fungalRisk: "Low",
        },
        {
            id: 2,
            name: "Maize Silage #12",
            type: "Silage",
            date: "18 Sep 2026",
            score: 91,
            status: "Excellent",
            storage: "34 days",
            ph: "3.8",
            moisture: "64%",
            fermentation: "Good",
            mouldRisk: "Low",
            spoilage: "Not detected",
        },
        {
            id: 3,
            name: "Dairy Feed #09",
            type: "Feed",
            date: "15 Sep 2026",
            score: 72,
            status: "Needs Attention",
            storage: "16 days",
            protein: "14.1%",
            moisture: "13.8%",
            energy: "7.4 MJ",
            adulteration: "Possible",
            fungalRisk: "Medium",
        },
        {
            id: 4,
            name: "Maize Silage #08",
            type: "Silage",
            date: "12 Sep 2026",
            score: 86,
            status: "Good",
            storage: "28 days",
            ph: "4.1",
            moisture: "61%",
            fermentation: "Good",
            mouldRisk: "Low",
            spoilage: "Not detected",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-extrabold">
                        Test History
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        View and review your previous feed and silage quality tests.
                    </p>
                </div>
                <button
                onClick={() => navigate("/test")}
                    className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition cursor-pointer"
                >
                    <PlusCircle className="w-4 h-4" /> Start New Test
                </button>
            </div>
            
            <div className="flex gap-3">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                        type="text"
                        placeholder="Search tests..."
                        className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <button
                    className="px-4 py-3 border border-slate-300 rounded-xl flex items-center gap-2 font-semibold hover:bg-slate-50 transition cursor-pointer"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filter
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {tests.map((test) => {
                    const isFeed = test.type === "Feed";

                    return (
                        <div
                            key={test.id}
                            className={`
                                group rounded-3xl border p-6 shadow-sm
                                bg-white transition-all duration-200
                                hover:shadow-lg hover:-translate-y-0.5
                                ${isFeed
                                    ? "border-emerald-200 hover:border-emerald-300"
                                    : "border-amber-200 hover:border-amber-300"
                                }
                            `}
                        >
                            <div className="flex justify-between gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`
                                                w-2 h-10 rounded-full
                                                ${isFeed ? "bg-emerald-500" : "bg-amber-500"}
                                            `}
                                        />
                                        <div>
                                            <h2 className="text-xl font-extrabold text-slate-800">
                                                {test.name}
                                            </h2>
                                            <span
                                                className={`
                                                    inline-block mt-1 px-2.5 py-1 rounded-lg
                                                    text-xs font-bold
                                                    ${isFeed
                                                        ? "bg-emerald-100 text-emerald-700"
                                                        : "bg-amber-100 text-amber-700"
                                                    }
                                                `}
                                            >
                                                {test.type} Test
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-slate-500">
                                        <span>
                                            <span className="font-semibold text-slate-600">
                                                Tested:
                                            </span>{" "}
                                            {test.date}
                                        </span>
                                        <span>
                                            <span className="font-semibold text-slate-600">
                                                Storage:
                                            </span>{" "}
                                            {test.storage}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                                        {isFeed ? (
                                            <>
                                                <div className="bg-emerald-50 rounded-xl p-3">
                                                    <p className="text-xs text-emerald-600 font-medium">
                                                        Protein
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.protein}
                                                    </p>
                                                </div>
                                                <div className="bg-blue-50 rounded-xl p-3">
                                                    <p className="text-xs text-blue-600 font-medium">
                                                        Moisture
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.moisture}
                                                    </p>
                                                </div>
                                                <div className="bg-purple-50 rounded-xl p-3">
                                                    <p className="text-xs text-purple-600 font-medium">
                                                        Energy
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.energy}
                                                    </p>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl p-3">
                                                    <p className="text-xs text-slate-500 font-medium">
                                                        Adulteration
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.adulteration}
                                                    </p>
                                                </div>
                                                <div className="bg-orange-50 rounded-xl p-3">
                                                    <p className="text-xs text-orange-600 font-medium">
                                                        Fungal Risk
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.fungalRisk}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="bg-amber-50 rounded-xl p-3">
                                                    <p className="text-xs text-amber-600 font-medium">
                                                        pH
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.ph}
                                                    </p>
                                                </div>
                                                <div className="bg-blue-50 rounded-xl p-3">
                                                    <p className="text-xs text-blue-600 font-medium">
                                                        Moisture
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.moisture}
                                                    </p>
                                                </div>
                                                <div className="bg-emerald-50 rounded-xl p-3">
                                                    <p className="text-xs text-emerald-600 font-medium">
                                                        Fermentation
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.fermentation}
                                                    </p>
                                                </div>
                                                <div className="bg-orange-50 rounded-xl p-3">
                                                    <p className="text-xs text-orange-600 font-medium">
                                                        Mould Risk
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.mouldRisk}
                                                    </p>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl p-3">
                                                    <p className="text-xs text-slate-500 font-medium">
                                                        Spoilage
                                                    </p>
                                                    <p className="font-bold text-slate-800 mt-1">
                                                        {test.spoilage}
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`
                                        min-w-[155px] rounded-2xl p-5
                                        flex flex-col justify-between items-end
                                        ${isFeed ? "bg-emerald-50" : "bg-amber-50"}
                                    `}
                                >
                                    <div className="text-right">
                                        <p className="text-xs font-semibold text-slate-500">
                                            QUALITY SCORE
                                        </p>
                                        <p
                                            className={`
                                                text-4xl font-black mt-1
                                                ${isFeed
                                                    ? "text-emerald-700"
                                                    : "text-amber-700"
                                                }
                                            `}
                                        >
                                            {test.score}
                                            <span className="text-sm text-slate-400">
                                                /100
                                            </span>
                                        </p>
                                        <span
                                            className={`
                                                inline-block mt-2 px-3 py-1.5
                                                rounded-full text-xs font-bold
                                                ${test.status === "Needs Attention"
                                                    ? "bg-red-100 text-red-700"
                                                    : test.status === "Excellent"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-blue-100 text-blue-700"
                                                }
                                            `}
                                        >
                                            ● {test.status}
                                        </span>
                                    </div>
                                    <button
                                        className={`
                                            text-sm font-bold transition-all cursor-pointer
                                            group-hover:translate-x-1
                                            ${isFeed
                                                ? "text-emerald-700 hover:text-emerald-900"
                                                : "text-amber-700 hover:text-amber-900"
                                            }
                                        `}
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}