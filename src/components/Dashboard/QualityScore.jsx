

export default function QualityScore({ score }) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 100) * circumference;
    let color;

    if (score > 80) {
        color = "text-emerald-500";
    }
    else if (score > 50) {
        color = "text-orange-500";
    }
    else {
        color = "text-red-600";
    }


    return (
        <div className="flex flex-col">
            <div className="relative w-40 h-40">
                <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-slate-200"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className={`${color}`}
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-slate-900">
                        {score}
                    </span>

                    <span className="text-[12px] text-slate-500">
                        OUT OF 100
                    </span>
                </div>
            </div>
{/* 
            <div className={`mt-4 font-bold ${color}`}>
                {qualityStatus}
            </div>

            <div className="flex justify-between">
                <span>Safe Feeding Status:</span>
                <span>{qualityStatus}</span>
            </div> */}
        </div>
    );
}