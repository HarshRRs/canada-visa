import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-primary text-sm font-semibold mb-6 border border-red-100">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Authorized Private Immigration Service
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                <span className="block xl:inline">Apply for Your</span>{" "}
                <span className="block text-primary xl:inline">Canadian Work Visa</span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional assistance for work visa applications and employment opportunities in Canada. Start your journey with expert guidance.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <Link href="/eligibility" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-colors">
                    Check Eligibility
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0">
                  <Link href="/pricing" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors">
                    Start Application
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-gray-600 sm:justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Secure Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Expert Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Fast Tracking Support</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
          {/* We use a placeholder that looks like a skyline/workers background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542382103-605a22bbaf68?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-90 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-transparent lg:bg-gradient-to-l"></div>
        </div>
      </div>
    </div>
  );
}
