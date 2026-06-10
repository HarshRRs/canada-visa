import { getSession, logoutAction } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, LogOut, FileText } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session || session.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-800">
          <span className="text-xl font-bold flex items-center gap-2">🍁 Admin Panel</span>
        </div>
        <div className="flex-1 py-6 space-y-1 px-3">
          <Link href="/admin" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
            <LayoutDashboard className="w-5 h-5 mr-3 text-gray-400" /> Dashboard
          </Link>
          <Link href="/admin/clients" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
            <Users className="w-5 h-5 mr-3 text-gray-400" /> Manage Clients
          </Link>
          <Link href="/admin/support" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
            <FileText className="w-5 h-5 mr-3 text-gray-400" /> Support Inbox
          </Link>
        </div>
        <div className="p-4 border-t border-gray-800">
          <form action={logoutAction}>
            <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800 text-red-400 w-full">
              <LogOut className="w-5 h-5 mr-3" /> Sign Out
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center px-8 justify-between">
          <h1 className="text-lg font-semibold text-gray-900">Canadian Visa Admin</h1>
          <div className="text-sm text-gray-500">Logged in as {session.email}</div>
        </header>
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
