import {
    BarChart3,
    CheckCircle2,
    AlertTriangle,
    FlaskConical,
    TrendingUp,
    PlusCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Analytics() {
    const navigate = useNavigate();
    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-emerald-700" />
                        </div>

                        <h1 className="text-3xl font-extrabold text-slate-900">
                            Analytics
                        </h1>
                    </div>

                    <p className="text-sm text-slate-500">
                        Track your feed and silage testing results and quality trends.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/test")}
                    className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                    <PlusCircle className="w-4 h-4" />
                    Start New Test
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Total Tests
                            </p>
                            <p className="text-3xl font-extrabold text-slate-900 mt-2">
                                24
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Tests completed
                            </p>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <FlaskConical className="w-5 h-5 text-emerald-700" />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Good Quality
                            </p>
                            <p className="text-3xl font-extrabold text-emerald-700 mt-2">
                                18
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                75% of all tests
                            </p>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                        </div>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">
                                Need Review
                            </p>
                            <p className="text-3xl font-extrabold text-orange-600 mt-2">
                                6
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Requires attention
                            </p>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-orange-600" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">
                            Quality Overview
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Distribution of recent sample quality results.
                        </p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-slate-700">
                            Good
                        </span>
                        <span className="font-bold text-emerald-700">
                            75%
                        </span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-600 rounded-full"
                            style={{ width: "75%" }}
                        />
                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-slate-700">
                            Moderate
                        </span>
                        <span className="font-bold text-amber-600">
                            17%
                        </span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{ width: "17%" }}
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-slate-700">
                            Poor
                        </span>
                        <span className="font-bold text-red-600">
                            8%
                        </span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-red-500 rounded-full"
                            style={{ width: "8%" }}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">
                        Recent Tests
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Latest feed and silage quality assessments.
                    </p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="text-left px-6 py-3 font-semibold text-slate-500">
                                    Sample
                                </th>
                                <th className="text-left px-6 py-3 font-semibold text-slate-500">
                                    Type
                                </th>
                                <th className="text-left px-6 py-3 font-semibold text-slate-500">
                                    Quality
                                </th>
                                <th className="text-left px-6 py-3 font-semibold text-slate-500">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-semibold text-slate-800">
                                    Maize
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    Feed
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Good
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    Sep 20, 2026
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-semibold text-slate-800">
                                    Corn Silage
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    Silage
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Good
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-slate-500">
                                    Sep 19, 2026
                                </td>

                            </tr>


                            <tr className="hover:bg-slate-50">

                                <td className="px-6 py-4 font-semibold text-slate-800">
                                    Grass
                                </td>

                                <td className="px-6 py-4 text-slate-500">
                                    Feed
                                </td>

                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        Review
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-slate-500">
                                    Sep 18, 2026
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">

                <div className="flex gap-3">

                    <div className="w-9 h-9 shrink-0 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-emerald-700" />
                    </div>

                    <div>
                        <h3 className="font-bold text-emerald-900">
                            Quality Insight
                        </h3>

                        <p className="text-sm text-emerald-800 mt-1">
                            Most recent samples are currently classified as good
                            quality. Samples marked for review should be checked
                            before being used for cattle feed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}