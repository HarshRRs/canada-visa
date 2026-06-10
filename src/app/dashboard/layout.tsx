import { getSession, logoutAction } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, LogOut, Home, MessageSquare } from "lucide-react";

export default async function ClientDashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session || session.role !== "client") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold flex items-center gap-2 text-primary">🍁 Client Portal</span>
        </div>
        <div className="flex-1 py-6 space-y-1 px-3">
          <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-primary text-gray-700">
            <Home className="w-5 h-5 mr-3 text-gray-400" /> My Dashboard
          </Link>
          <Link href="/dashboard/support" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 hover:text-primary text-gray-700">
            <MessageSquare className="w-5 h-5 mr-3 text-gray-400" /> Support Desk
          </Link>
        </div>
        <div className="p-4 border-t border-gray-200">
          <form action={logoutAction}>
            <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-red-50 text-gray-700 w-full transition-colors">
              <LogOut className="w-5 h-5 mr-3 text-gray-400" /> Sign Out
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center px-8 justify-between border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">Welcome back, {session.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="w-5 h-5" />
            {session.email}
          </div>
        </header>
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
