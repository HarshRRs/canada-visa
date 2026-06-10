import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Legal Disclaimer</h1>
        <p className="text-lg text-gray-500">Important Information Regarding Our Services</p>
      </div>

      <div className="prose prose-red max-w-none text-gray-700">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-yellow-700 font-semibold m-0">
            Canadian Visa Assist is a private entity and is NOT affiliated with the Government of Canada.
          </p>
        </div>

        <h2>No Affiliation with Government</h2>
        <p>Canadian Visa Assist is a private, non-government business dedicated to assisting individuals with their Canadian immigration journey. We are not the official government of Canada, Immigration, Refugees and Citizenship Canada (IRCC), nor are we a law firm.</p>
        <p>You can apply for a Canadian visa directly and entirely on your own through the official Government of Canada website at <strong>canada.ca</strong>. Our services exist for those who prefer professional guidance and support through the complex application process for a fee.</p>

        <h2>No Guarantee of Approval</h2>
        <p>The final authority on all immigration applications lies solely with the immigration officers of IRCC. While our team uses their expertise to maximize the strength of your application, we cannot and do not guarantee visa approvals. Any claims of guaranteed entry to Canada by any agency should be treated with extreme caution.</p>

        <h2>Professional Advice</h2>
        <p>The information provided on this website is for general informational purposes only and does not constitute legal advice. While we strive to keep information up-to-date, immigration laws and policies change frequently.</p>
      </div>
    </div>
  );
}
