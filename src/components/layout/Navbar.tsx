"use client";

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
              <div className="w-10 h-7 bg-red-600 flex items-center justify-center relative shadow-sm rounded-sm overflow-hidden">
                <div className="w-1/3 h-full bg-white absolute left-1/3" />
                <span className="text-[12px] text-red-600 font-bold z-10 relative leading-none">🍁</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">
                  Canadian Visa
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">
                  Immigration Services
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors">
              Home
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap">
              Programs
            </Link>
            <Link href="/eligibility" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap">
              Eligibility
            </Link>
            <Link href="/documents" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap">
              Documents
            </Link>
            <Link href="/success-stories" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap">
              Success
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-semibold text-[13px] uppercase tracking-wide transition-colors whitespace-nowrap">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-primary font-semibold text-sm transition-colors whitespace-nowrap">
              Client Portal
            </Link>
            <Link href="/eligibility" className="bg-primary text-white hover:bg-red-700 px-5 py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm whitespace-nowrap">
              Apply Now
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
            <Link href="/login" className="block px-3 py-2 text-base font-medium text-primary hover:bg-red-50 rounded-md transition-colors">
              Client Portal
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
