import Link from "next/link";
import { Check, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Pricing & Fees | Canadian Work Visa",
  description: "Transparent pricing for our professional immigration assistance services.",
};

export default function PricingPage() {
  const features = [
    "Eligibility Review & Profile Assessment",
    "Document Verification & Formatting",
    "Application Strategy & Preparation",
    "Employer Matching Assistance",
    "Interview Preparation Guide",
    "Dedicated Client Support Agent",
    "Pre-arrival Guidance"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Visa Assistance
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Get expert guidance throughout your entire journey to work in Canada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 border-b border-gray-200 bg-gray-50">
              <div className="flex justify-center items-baseline mb-4 text-primary font-bold">
                <span className="text-sm font-semibold text-gray-500 mr-2 uppercase tracking-wide">Advance Processing Fee</span>
              </div>
              <div className="flex justify-center items-baseline text-6xl font-extrabold text-gray-900">
                $499
                <span className="ml-1 text-2xl font-medium text-gray-500">USD</span>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Canadian Work Visa Assistance Package Includes:</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 rounded-md shadow">
                <Link
                  href="/eligibility"
                  className="flex items-center justify-center px-5 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-red-700 transition-colors"
                >
                  Proceed to Application
                </Link>
              </div>

              <div className="mt-6 flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                <ShieldAlert className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm text-red-800 leading-relaxed">
                  <strong>Important Notice:</strong> We do not offer unrealistic guarantees such as guaranteed visas or guaranteed jobs. Your application success depends on your qualifications, employer requirements, and final decision by the Canadian Immigration authorities (IRCC). The fee is for our professional preparation and consulting services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
