import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Camera, Upload } from "lucide-react";
import { useState } from "react";

export default function SampleUpload() {
    const [image, setImage] = useState(null);
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const isSilage = type === "silage";
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div>
                <h1 className="text-4xl font-extrabold">
                    {isSilage ? "Silage Quality Test" : "Feed Quality Test"}
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Upload a clear sample photo for AI-powered quality analysis.
                </p>
            </div>

            <div className="border border-slate-200 flex justify-between items-center p-3 rounded-2xl shadow-md">
                <button
                    className="flex items-center gap-1 group text-xs"
                    onClick={() => navigate('/test')}
                >
                    <ArrowLeft className="h-4 w-4 text-slate-500 group-hover:text-slate-950 transition-all duration-75" />
                    <span className="text-slate-500 group-hover:text-slate-950 transition-all duration-75">
                        Back
                    </span>
                </button>
                <div className="text-xs font-semibold">
                    Step 1 of 3: Sample Capture
                </div>
                <div className="text-xs text-green-700 font-semibold px-3 py-1 bg-green-300/20 rounded-xl">
                    {isSilage ? "SILAGE" : "FEED"}
                </div>
            </div>

            <div className="border border-slate-200 space-y-6 p-6 rounded-2xl shadow-md">
                <div>
                    <h2 className="text-3xl font-extrabold">
                        Analyze Your Sample
                    </h2>
                    <p className="text-sm mt-1">
                        Capture or upload a clear photo of your {" "} {isSilage ? "silage" : "feed"} sample for rapid optical analysis.
                    </p>
                </div>
                {/* <div
                    className="border-2 border-dashed border-emerald-300 rounded-2xl p-6 flex flex-col space-y-4 justify-center items-center bg-emerald-50/50 hover:bg-emerald-100/30 transition-all duration-150"
                >
                    <div className="p-3 bg-emerald-200/50 rounded-2xl shadow-md">
                        <Camera className="text-emerald-800 h-8 w-8" />
                    </div>
                    <p className="text-lg font-bold">
                        Capture or Upload Sample Photo
                    </p>
                    <p className="max-w-sm text-sm text-slate-500 text-center">
                        Hold camera 15-20 cm above sample. Ensure adequate daylight illumination.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <label className="border py-4 px-8 border-emerald-300 bg-emerald-700 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-800 transition">
                            <span className="font-semibold flex gap-2 text-white">
                                <Camera />Take Photo
                            </span>
                            <input
                                type="file"
                                accept="image/*"
                                capture="environment"
                                className="hidden"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                        <label className="border py-4 px-8 bg-white border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition">
                            <span className="flex gap-2 items-center font-semibold text-slate-700">
                                <Upload className="w-5 h-5"/>Upload Photo
                            </span>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                    </div>
                </div> */}
                { image ? (
                    <div className="border-2 border-emerald-300 rounded-2xl p-4 bg-emerald-50/50">
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Selected sample"
                            className="w-full h-80 object-cover rounded-xl"
                        />
                    </div>
                ) : (
                    <div
                        className="border-2 border-dashed border-emerald-300 rounded-2xl p-6 flex flex-col space-y-4 justify-center items-center bg-emerald-50/50 hover:bg-emerald-100/30 transition-all duration-150"
                    >
                        <div className="p-3 bg-emerald-200/50 rounded-2xl shadow-md">
                            <Camera className="text-emerald-800 h-8 w-8" />
                        </div>

                        <p className="text-lg font-bold">
                            Capture or Upload Sample Photo
                        </p>

                        <p className="max-w-sm text-sm text-slate-500 text-center">
                            Hold camera 15-20 cm above sample. Ensure adequate daylight illumination.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4">

                            <label className="border py-4 px-8 border-emerald-300 bg-emerald-700 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-800 transition">
                                <span className="font-semibold flex gap-2 text-white">
                                    <Camera />Take Photo
                                </span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    capture="environment"
                                    className="hidden"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </label>

                            <label className="border py-4 px-8 bg-white border-slate-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition">
                                <span className="flex gap-2 items-center font-semibold text-slate-700">
                                    <Upload className="w-5 h-5" />
                                    Upload Photo
                                </span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </label>

                        </div>
                    </div>
                )}

                <div className="border-t border-slate-500/30">
                    <div className="mt-3">
                        <h2 className="text-xs text-slate-600 font-bold">
                            SAMPLE INFORMATION (MINIMAL)
                        </h2>
                        <div className="flex gap-4 mt-4">
                            <div className="flex-1">
                                <label className="text-xs font-bold">
                                    Batch Name
                                </label>
                                <input
                                    type="text"
                                    placeholder={
                                        isSilage ? "e.g. Silage Batch #14" : "e.g. Feed Batch #14"
                                    }
                                    className="w-full mt-1 text-sm font-semibold border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="text-xs font-bold">
                                    Storage Age/ Duration
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 21 days"
                                    className="w-full mt-1 border text-sm font-semibold border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex-1">
                                <label className="text-xs font-bold">
                                    Field notes (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Harvested during light rain."
                                    className="w-full mt-1 border text-sm font-semibold border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-10">
                            <button
                                className="flex gap-2 items-center font-bold bg-emerald-700 p-4 rounded-2xl shadow-lg text-white hover:bg-emerald-800 cursor-pointer transition-all duration-150 active:scale-95 group"
                            >
                                Start AI Quality Analysis <ArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}