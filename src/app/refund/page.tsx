import { CreditCard } from "lucide-react";

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Refund Policy</h1>
        <p className="text-lg text-gray-500">100% Money-Back Guarantee Details</p>
      </div>

      <div className="prose prose-red max-w-none text-gray-700">
        <h2>1. The 100% Money-Back Guarantee</h2>
        <p>We are confident in our services. If your visa application is rejected due to a critical error made exclusively by our consulting team during the preparation or submission process, we offer a 100% refund of our consulting fees.</p>
        
        <h2>2. Exceptions to the Guarantee</h2>
        <p>The money-back guarantee does NOT apply under the following circumstances:</p>
        <ul>
          <li>If the rejection is due to the applicant providing false, misleading, or fraudulent information or documents.</li>
          <li>If the applicant fails to disclose previous visa rejections, criminal records, or medical conditions.</li>
          <li>If the rejection is based on subjective government assessments (e.g., the officer is not convinced the applicant will return to their home country).</li>
          <li>If government immigration policies change retroactively affecting the application.</li>
        </ul>

        <h2>3. Government Fees</h2>
        <p>Please note that any fees paid directly to the Government of Canada (IRCC) or third-party agencies (e.g., biometrics, medical exams, language testing) are strictly non-refundable under any circumstances.</p>

        <h2>4. Refund Request Process</h2>
        <p>To request a refund under our guarantee, you must provide us with the official refusal letter from IRCC within 30 days of receipt. Our quality assurance team will review the refusal letter to determine if the rejection was due to our error.</p>
      </div>
    </div>
  );
}
