import { Sparkles, Microscope, Activity, Info } from "lucide-react"
import TestCard from "../components/NewTest/TestCard"
import { useNavigate } from "react-router-dom"

export default function NewTest () {
    const navigate = useNavigate();

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-2.5 items-center bg-green-100 w-fit px-3 py-1 rounded-2xl border border-green-200">
                <span>
                    <Sparkles className="w-4 h-4 text-green-700" />
                </span>
                <span className="text-sm font-bold text-green-800">
                    Rapid Cattle Nutrition Testing
                </span>
            </div>

            <div>
                <h1 className="text-4xl font-extrabold">
                    What would you like to test?
                </h1>
                <p className="mt-1 text-sm">
                    Select the sample category below to begin computer vision & quality parameter analysis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <TestCard
                    icon={Microscope}
                    title="Feed Test"
                    description="Check nutritional quality, moisture, adulteration and safety."
                    label="Analyze Feed Sample"
                    color="emerald"
                    onClick={() => navigate("/test/upload?type=feed")}
                />

                <TestCard
                    icon={Activity}
                    title="Silage Test"
                    description="Check fermentation, pH, moisture, spoilage and mould risk."
                    label="Analyze Silage Sample"
                    color="amber"
                    onClick={() => navigate("/test/upload?type=silage")}
                />

            </div>

            <div className="flex gap-3 bg-green-200/30 border border-green-500/30 p-3 rounded-2xl">
                <Info className="w-4 h-4 mt-1 shrink-0" />
                <span>
                    <span className="font-bold">Farmer Tip:</span> Take sample photos in bright natural daylight. Avoid harsh shadows or flash reflections on wet silage surfaces for maximum AI accuracy.
                </span>
            </div>
        </div>
    )
}