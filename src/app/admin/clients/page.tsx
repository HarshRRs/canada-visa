import db from "@/lib/db";
import { createClient, addProcessUpdate } from "@/app/actions/admin";

export default async function AdminClientsPage() {
  const usersQuery = db.prepare("SELECT * FROM users WHERE role = 'client' ORDER BY id DESC");
  const clients = usersQuery.all() as any[];

  return (
    <div className="space-y-8">
      <div className="bg-white shadow sm:rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Create Paid Client Account</h3>
          <p className="text-sm text-gray-500 mb-6">Create an account for a client who has completed their payment. They will use these credentials to log in.</p>
          
          <form action={async (formData) => {
            "use server";
            await createClient(formData);
          }} className="space-y-4 max-w-xl">
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Name</label>
              <input type="text" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Email (Login ID)</label>
              <input type="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Temporary Password</label>
              <input type="text" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Ticket / Receipt URL (Optional)</label>
              <input type="text" name="ticketUrl" placeholder="https://..." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Create Client Account
            </button>
          </form>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Existing Clients</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {clients.map((client) => {
               const processQuery = db.prepare("SELECT * FROM process_updates WHERE client_id = ? ORDER BY created_at DESC LIMIT 1");
               const latestUpdate = processQuery.get(client.id) as any;

               return (
                <li key={client.id} className="p-4 sm:px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{client.name}</h4>
                      <p className="text-sm text-gray-500">{client.email}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-100">
                    <p className="text-sm text-gray-700 font-medium mb-2">Latest Status: {latestUpdate?.update_text || "No updates"}</p>
                    <form action={async (formData) => {
                      "use server";
                      await addProcessUpdate(formData);
                    }} className="flex gap-2">
                      <input type="hidden" name="clientId" value={client.id} />
                      <input type="text" name="updateText" placeholder="Add new process update..." required className="block w-full border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                      <button type="submit" className="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                        Update
                      </button>
                    </form>
                  </div>
                </li>
               );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
