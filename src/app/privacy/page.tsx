import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-500">Your privacy and data security are our top priorities.</p>
      </div>

      <div className="prose prose-red max-w-none text-gray-700">
        <h2>1. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, or otherwise contacting us. This includes your name, email, phone number, work experience, educational background, and relevant immigration documents.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To assess your eligibility for various Canadian immigration programs.</li>
          <li>To fulfill and manage your orders and services.</li>
          <li>To deliver services to the user.</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. Documents are stored securely and access is restricted only to authorized personnel evaluating your case.</p>

        <h2>4. Sharing Your Information</h2>
        <p>We do not sell, rent, or trade your personal information with third parties. We only share information with government authorities (like IRCC) upon your explicit authorization to submit an application on your behalf.</p>
      </div>
    </div>
  );
}
