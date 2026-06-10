import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-5 bg-red-600 flex items-center justify-center relative shadow-sm border border-gray-100">
                <div className="w-1/3 h-full bg-white absolute" />
                <span className="text-[10px] text-red-600 font-bold z-10 relative">🍁</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 tracking-tight leading-none mb-1">
                  Canadian Visa
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Immigration Assistance
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Home
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Work Visa Programs
            </Link>
            <Link href="/eligibility" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Eligibility Check
            </Link>
            <Link href="/documents" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Required Documents
            </Link>
            <Link href="/success-stories" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Success Stories
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium text-sm transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-white bg-primary hover:bg-red-700 px-5 py-2.5 rounded font-medium text-sm transition-colors shadow-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link href="/programs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Work Visa Programs
            </Link>
            <Link href="/eligibility" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Eligibility Check
            </Link>
            <Link href="/documents" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Required Documents
            </Link>
            <Link href="/success-stories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Success Stories
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md">
              Pricing
            </Link>
            <div className="pt-2">
              <Link href="/contact" className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-primary rounded-md">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
