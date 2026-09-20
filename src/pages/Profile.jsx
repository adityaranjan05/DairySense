import { User, MapPin, Phone, Languages, Building2, Beef } from "lucide-react";

export default function Profile() {
    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-4xl font-extrabold">
                    My Profile
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Manage your personal and farm information.
                </p>
            </div>

            {/* User Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-5">

                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <User className="w-9 h-9 text-green-700" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold">
                            Dairy Farmer
                        </h2>

                        <p className="text-sm text-slate-500">
                            DairySense User
                        </p>
                    </div>

                </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <h2 className="text-lg font-bold mb-5">
                    Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex gap-3">
                        <User className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Full Name
                            </p>
                            <p className="font-medium">
                                Your Name
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Phone className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Phone
                            </p>
                            <p className="font-medium">
                                +91 XXXXX XXXXX
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <MapPin className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Location
                            </p>
                            <p className="font-medium">
                                Karnataka, India
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Languages className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Language
                            </p>
                            <p className="font-medium">
                                English
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Farm Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">

                <h2 className="text-lg font-bold mb-5">
                    Farm Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="flex gap-3">
                        <Building2 className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Farm Name
                            </p>
                            <p className="font-medium">
                                My Dairy Farm
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Beef className="w-5 h-5 text-green-700" />

                        <div>
                            <p className="text-xs text-slate-500">
                                Number of Cattle
                            </p>
                            <p className="font-medium">
                                42
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}