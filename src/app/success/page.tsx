import Link from "next/link";
import { CheckCircle, Home, Mail } from "lucide-react";

export const metadata = {
  title: "Application Received | Canadian Work Visa",
  description: "Your application has been received successfully.",
};

export default function SuccessPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Application Received Successfully
          </h1>
          
          <div className="text-gray-600 mb-8 space-y-4 text-lg">
            <p>
              Thank you for submitting your application.
            </p>
            <p>
              Our team will review your profile and uploaded documents. Once the review process is completed, a representative will contact you with the next steps, including payment instructions and required documentation updates if necessary.
            </p>
            <p className="font-medium text-gray-900">
              Please monitor your email and phone for further communication.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
