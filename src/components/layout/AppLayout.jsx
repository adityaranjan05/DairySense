import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function AppLayout({ children }) {
    return (
        <div className="flex h-screen">
            <div className="w-72 shrink-0 border-r border-slate-200">
                <SideBar />
            </div>
            <div className="flex flex-1 flex-col min-w-0">
                <TopBar />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}