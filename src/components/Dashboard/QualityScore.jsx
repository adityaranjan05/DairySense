export default function QualityScore({ score }) {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 100) * circumference;

    return (
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
                    className="text-emerald-500"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-900">
                    {score}
                </span>

                <span className="text-[12px] text-slate-500">
                    OUT OF 100
                </span>
            </div>
        </div>
    );
}