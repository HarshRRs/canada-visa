import db from "@/lib/db";
import { getSession } from "@/lib/auth";
import { FileText, CheckCircle } from "lucide-react";

export default async function ClientDashboard() {
  const session = await getSession();

  const updatesQuery = db.prepare("SELECT * FROM process_updates WHERE client_id = ? ORDER BY created_at DESC");
  const updates = updatesQuery.all(session.id) as any[];

  const docsQuery = db.prepare("SELECT * FROM documents WHERE client_id = ?");
  const documents = docsQuery.all(session.id) as any[];

  return (
    <div className="space-y-8">
      {/* Process Tracking */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Visa Process Tracker</h2>
        <div className="bg-white shadow sm:rounded-lg border border-gray-200 p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              {updates.map((update, updateIdx) => (
                <li key={update.id}>
                  <div className="relative pb-8">
                    {updateIdx !== updates.length - 1 ? (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center ring-8 ring-white">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-900 font-medium">{update.update_text}</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={update.created_at}>{new Date(update.created_at).toLocaleDateString()}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {updates.length === 0 && (
                <li className="text-gray-500">No updates yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Documents & Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white shadow rounded-lg border border-gray-200 p-4 flex items-center gap-4">
              <div className="p-3 bg-red-50 text-primary rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{doc.file_name}</p>
                <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">View Document</a>
              </div>
            </div>
          ))}
          {documents.length === 0 && (
            <p className="text-gray-500">No documents available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
