import { Sparkles } from "lucide-react"

export default function NewTest () {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-2.5 items-center bg-green-100 w-fit px-3 py-1 rounded-2xl border border-green-200">
                <span>
                    <Sparkles className="w-5 h-5 text-green-700" />
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
        </div>
    )
}