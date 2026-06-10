import Link from "next/link";
import { Check, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Pricing & Fees | Canadian Work Visa",
  description: "Transparent pricing for our professional immigration assistance services.",
};

export default function PricingPage() {
  const features = [
    "Complete Eligibility Review & Assessment",
    "Guaranteed Job Offer Letter Generation",
    "Employer Matching & Interview Prep",
    "Full LMIA and Work Permit Processing",
    "Flight & Pre-arrival Guidance",
    "Post-Arrival Settlement Assistance"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Premium Job Placement Package
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            A comprehensive, milestone-based pathway to your new career and life in Canada. Pay only when results are delivered.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 border-b border-gray-200 bg-gray-50 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Full Package Cost</h2>
              <div className="flex justify-center items-baseline text-6xl font-extrabold text-gray-900">
                $24,500
                <span className="ml-2 text-2xl font-medium text-gray-500">CAD</span>
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium tracking-wide">*(Equivalent to approx. ₹15 Lakhs INR)*</p>
            </div>
            
            <div className="px-6 py-8 sm:p-10 sm:py-8 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider text-center">Transparent Milestone Payments</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                
                {/* Milestone 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    1
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">Offer Letter Generation</h4>
                    </div>
                    <div className="text-2xl font-extrabold text-primary mb-2">$8,200 CAD</div>
                    <p className="text-sm text-gray-500">*(approx. ₹5 Lakhs INR)*. Paid only when your guaranteed job offer letter is officially generated and verified.</p>
                  </div>
                </div>
                
                {/* Milestone 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-200 text-gray-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    2
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">Arrival in Canada</h4>
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 mb-2">$16,300 CAD</div>
                    <p className="text-sm text-gray-500">*(approx. ₹10 Lakhs INR)*. The remaining balance is paid only after your visa is approved and you have safely landed in Canada.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Package Includes:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-2 shadow-sm">
                <span className="text-xl">🛡️</span>
                <span className="font-bold text-green-800 text-lg">100% Money-Back Guarantee</span>
              </div>
              <p className="text-center text-sm text-green-700 mt-2 font-medium">If we fail to generate your offer letter or secure your visa, you pay nothing.</p>

              <div className="mt-8 rounded-md shadow">
                <Link
                  href="/eligibility"
                  className="flex items-center justify-center px-5 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-red-700 transition-colors"
                >
                  Start Your Journey Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
