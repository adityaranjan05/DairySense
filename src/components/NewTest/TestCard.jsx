import { ArrowRight } from "lucide-react";

export default function TestCard({
    icon: Icon,
    title,
    description,
    label,
    color,
    onClick
}) {
    const colors = {
        emerald: {
            icon: "bg-emerald-600 text-slate-100",
            arrow: "bg-emerald-500/20 text-emerald-700",
            arrowHover:"group-hover:bg-emerald-700 group-hover:text-white",
            hover: "hover:border-emerald-300",
            text: "text-emerald-700",
            border: "border-emerald-500",
            title: "bg-emerald-500/20 text-emerald-900",
            titleHover: "group-hover:text-emerald-800",
            cardHover: "hover:bg-emerald-100/20",
        },
        amber: {
            icon: "bg-amber-600 text-slate-100",
            arrow: "bg-amber-500/20 text-amber-700",
            arrowHover:"group-hover:bg-amber-700 group-hover:text-white",
            hover: "hover:border-amber-300",
            text: "text-amber-700",
            border: "border-amber-500",
            title: "bg-amber-500/20 text-amber-900",
            titleHover: "group-hover:text-amber-800",
            cardHover: "hover:bg-amber-100/20",
        },
    };

    const theme = colors[color];

    return (
        <button
            type="button"
            onClick={onClick}
            className={`group w-full h-full min-h-[450px] p-8 rounded-3xl
                bg-white ${theme.cardHover} border ${theme.border} shadow-md
                flex flex-col justify-between text-left
                ${theme.hover}
                hover:shadow-xl transition-all cursor-pointer`}
        >
            <div>
                <div className={`p-4 rounded-3xl ${theme.icon} w-fit`}>
                    <Icon className="w-8 h-8 group-hover:scale-105 transition-transform" />
                </div>
                <div className={`${theme.title} w-fit px-3 mt-3 rounded-xl justify-between`}>
                    <span className="mt-3 text-sm font-bold tracking-wide">
                        {title.toUpperCase()}
                    </span>
                </div>

                <h2 className={`font-extrabold text-2xl mt-6 ${theme.titleHover}`}>
                    {title}
                </h2>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {description}
                </p>
                <div>

                </div>
            </div>

            <div className={`mt-6 pt-4 items-center gap-2 ${theme.text} font-bold border-t border-slate-500/20 flex justify-between`}>
                {label}
                <ArrowRight className={`w-9 h-9 p-1.5 rounded-3xl  ${theme.arrow} ${theme.arrowHover} group-hover:translate-x-2 transition-transform duration-200`} />
            </div>
        </button>
    );
}