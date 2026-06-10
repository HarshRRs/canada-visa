import Link from "next/link";
import { AlertTriangle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🍁</span>
              Canadian Visa Assist
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Professional immigration assistance services helping global talent find employment and secure work visas in Canada.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>123 Business Way, Suite 400<br />Toronto, ON M5V 3K2<br />Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contact@canadianvisa-assist.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-md font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/eligibility" className="hover:text-white transition-colors">Check Eligibility</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Visa Programs</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Fees</Link></li>
              <li><Link href="/documents" className="hover:text-white transition-colors">Document Portal</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-white text-md font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</Link></li>
            </ul>
          </div>

          {/* Newsletter / Notice */}
          <div>
            <h4 className="text-white text-md font-bold mb-4 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest Canadian immigration news and job opportunities.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-2 w-full focus:outline-none focus:border-primary"
              />
              <button type="submit" className="bg-primary hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h5 className="text-white font-semibold mb-2">Important Legal Disclaimer</h5>
              <p className="text-sm text-gray-400 leading-relaxed">
                This website is operated by a private immigration assistance company and is <strong>not affiliated with the Government of Canada</strong>. 
                We provide consulting, document preparation, and application submission assistance services for a fee. 
                Visa approval decisions are made solely by Canadian immigration authorities (IRCC). We do not guarantee visa approvals or job placements. 
                You may apply for a visa directly on the official Government of Canada website.
              </p>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Canadian Visa Assist. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
