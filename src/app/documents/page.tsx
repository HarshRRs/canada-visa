import DocumentUploadPortal from "@/components/forms/DocumentUploadPortal";
import { CheckSquare } from "lucide-react";

export const metadata = {
  title: "Required Documents | Canadian Work Visa",
  description: "Securely upload your required documents for your Canadian work visa application.",
};

export default function DocumentsPage() {
  const documents = [
    { title: "Valid Passport", desc: "Must be valid for at least 6 months beyond your intended stay." },
    { title: "Resume/CV", desc: "Updated with current contact information and work history." },
    { title: "Educational Certificates", desc: "Degrees, diplomas, and transcripts." },
    { title: "Experience Letters", desc: "From previous and current employers." },
    { title: "Passport Size Photograph", desc: "Recent, meeting standard visa requirements." },
    { title: "Police Clearance", desc: "From all countries lived in for 6+ months." },
    { title: "Medical Report", desc: "From a panel-approved physician." },
    { title: "Bank Statements", desc: "Proof of funds (last 6 months)." },
    { title: "Language Test Results", desc: "IELTS, CELPIP, or TEF (if available/required)." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Required Documentation
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Please prepare the following documents to ensure a smooth application process. You can upload them securely below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-b pb-4">
              <CheckSquare className="w-5 h-5 mr-2 text-primary" />
              Document Checklist
            </h2>
            <ul className="space-y-4">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                    <p className="text-xs text-gray-500">{doc.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <DocumentUploadPortal />
          </div>
        </div>
      </div>
    </div>
  );
}
