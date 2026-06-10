import { ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-lg text-gray-500">Effective Date: January 1, 2026</p>
      </div>

      <div className="prose prose-red max-w-none text-gray-700">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Canadian Visa Assist website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
        
        <h2>2. Description of Service</h2>
        <p>Canadian Visa Assist is a private consultancy. We provide paid assistance services for individuals applying for Canadian work visas. This includes document review, application preparation, and consulting.</p>

        <h2>3. Non-Affiliation</h2>
        <p><strong>We are an independent, private entity.</strong> We are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of Canada, Immigration, Refugees and Citizenship Canada (IRCC), or any official government agency. You have the right to apply directly to the government without using our services.</p>

        <h2>4. No Guarantees</h2>
        <p>While we strive to ensure your application is as strong as possible, the final decision rests solely with IRCC. We do not and cannot guarantee visa approval, job placement, or specific processing times.</p>

        <h2>5. User Responsibilities</h2>
        <p>You agree to provide accurate, current, and complete information during the application and eligibility assessment process. Providing false documents may lead to a permanent ban from applying to Canada.</p>

        <h2>6. Fees and Payments</h2>
        <p>Our fees cover our professional time, consulting, and preparation. Fees are transparently listed on our Pricing page. For refund terms, please see our dedicated Refund Policy.</p>
      </div>
    </div>
  );
}
