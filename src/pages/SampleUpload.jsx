import { useSearchParams } from "react-router-dom";

export default function SampleUpload() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const isSilage = type === "silage";

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

        </div>
    );
}