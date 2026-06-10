import db from "@/lib/db";

export default async function AdminDashboard() {
  const submissionsQuery = db.prepare("SELECT * FROM submissions ORDER BY created_at DESC LIMIT 50");
  const submissions = submissionsQuery.all() as any[];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Eligibility Submissions</h2>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {submissions.length === 0 ? (
            <li className="p-8 text-center text-gray-500">No submissions yet.</li>
          ) : (
            submissions.map((sub) => (
              <li key={sub.id} className="p-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-primary truncate">
                    {sub.name} <span className="text-gray-500 font-normal">({sub.email})</span>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {sub.status}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex sm:gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <strong>Country:</strong> {sub.country}
                    </p>
                    <p className="flex items-center text-sm text-gray-500">
                      <strong>Category:</strong> {sub.category}
                    </p>
                    <p className="flex items-center text-sm text-gray-500">
                      <strong>Exp:</strong> {sub.experience} yrs
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{new Date(sub.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
