import db from "@/lib/db";
import { sendTicket } from "@/app/actions/support";

export default async function AdminSupportPage() {
  // Get all clients who have sent tickets or who exist
  const clientsQuery = db.prepare("SELECT * FROM users WHERE role = 'client'");
  const clients = clientsQuery.all() as any[];

  return (
    <div className="space-y-8 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900">Support Inbox</h2>

      <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-lg flex overflow-hidden min-h-[500px]">
        {/* Client List */}
        <div className="w-1/3 border-r border-gray-200 bg-gray-50 overflow-y-auto">
          <ul className="divide-y divide-gray-200">
            {clients.map(client => (
              <li key={client.id} className="p-4 hover:bg-gray-100 cursor-pointer">
                <h4 className="font-semibold text-gray-900">{client.name}</h4>
                <p className="text-xs text-gray-500">{client.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Client Messages */}
        <div className="flex-1 flex flex-col p-6 items-center justify-center text-gray-500">
          <p>Please select a client from the list to view their messages.</p>
          <p className="text-sm mt-2">Note: For this prototype, all messages are viewed together below if you reply manually. In a full system, you would click a client to load their specific chat history.</p>
        </div>
      </div>
    </div>
  );
}
