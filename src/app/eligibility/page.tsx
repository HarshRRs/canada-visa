import EligibilityChecker from "@/components/forms/EligibilityChecker";

export const metadata = {
  title: "Check Your Eligibility | Canadian Work Visa",
  description: "Complete this free assessment to find the best visa pathway for you.",
};

export default function EligibilityPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Visa Eligibility Assessment
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Find out if you qualify for a Canadian Work Visa and employment opportunities.
          </p>
        </div>
        <EligibilityChecker />
      </div>
    </div>
  );
}
