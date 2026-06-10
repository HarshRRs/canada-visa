import db from "@/lib/db";
import { getSession } from "@/lib/auth";
import { sendTicket } from "@/app/actions/support";

export default async function ClientSupportPage() {
  const session = await getSession();

  const ticketsQuery = db.prepare("SELECT * FROM tickets WHERE client_id = ? ORDER BY created_at ASC");
  const tickets = ticketsQuery.all(session.id) as any[];

  return (
    <div className="space-y-8 flex flex-col h-full">
      <h2 className="text-2xl font-bold text-gray-900">Support Desk</h2>
      <p className="text-gray-500">Need help? Send a message to your dedicated visa agent.</p>

      <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-col min-h-[400px]">
        {/* Messages View */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
          {tickets.map((ticket) => (
            <div key={ticket.id} className={`flex ${ticket.sender_role === 'client' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md rounded-lg p-4 ${ticket.sender_role === 'client' ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-900'}`}>
                <p className="text-xs opacity-75 mb-1">{new Date(ticket.created_at).toLocaleString()}</p>
                <h4 className="font-semibold text-sm mb-1">{ticket.subject}</h4>
                <p className="text-sm">{ticket.message}</p>
              </div>
            </div>
          ))}
          {tickets.length === 0 && (
             <div className="text-center text-gray-500 mt-10">No messages yet. Send your first inquiry below.</div>
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
          <form action={sendTicket} className="flex gap-4">
            <input type="hidden" name="clientId" value={session.id} />
            <input type="hidden" name="senderRole" value="client" />
            <div className="flex-1 space-y-2">
              <input type="text" name="subject" placeholder="Subject" required className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm" />
              <textarea name="message" placeholder="Type your message..." required rows={3} className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-primary focus:border-primary sm:text-sm"></textarea>
            </div>
            <div className="flex items-end">
              <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-red-700">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
