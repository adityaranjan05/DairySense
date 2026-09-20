export default function StatCard ({ icon: Icon, value, label, color, unit }) {
    const colors = {
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-700",
            border: "border-l-blue-500",
        },
        emerald: {
            bg: "bg-emerald-100",
            text: "text-emerald-700",
            border: "border-l-emerald-500",
        },
        amber: {
            bg: "bg-amber-100",
            text: "text-amber-700",
            border: "border-l-amber-500",
        },
    };
    return (
        <div className={`rounded-2xl border-l-4 ${colors[color].border} bg-white p-5 transition-all duration-150 shadow-md hover:shadow-lg z-10`}>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">{label} Count</span>
                    <span className={`${colors[color].bg} ${colors[color].text} p-2 rounded-lg`}>
                        <Icon className="w-5 h-5" />
                    </span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                        {value}
                    </span>
                    <span className="text-sm">
                        {unit}
                    </span>
                </div>
            </div>
        </div>
    )
}