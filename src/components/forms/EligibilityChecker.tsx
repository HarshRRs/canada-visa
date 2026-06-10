"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EligibilityChecker() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    education: "",
    experience: "",
    english: "",
    occupation: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate submission
      router.push("/success");
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900">Check Your Eligibility</h2>
        <p className="text-sm text-gray-500 mt-1">Complete this free assessment to find the best visa pathway for you.</p>
        
        {/* Progress Bar */}
        <div className="mt-6 flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded">
            <div 
              className="h-full bg-primary rounded transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm border-2 transition-colors ${
                step >= i ? "bg-primary border-primary text-white" : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
          <span>Personal Info</span>
          <span>Background</span>
          <span>Occupation</span>
        </div>
      </div>

      {/* Form Area */}
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">1. Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country of Residence</label>
                  <input required type="text" name="country" value={formData.country} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border" placeholder="e.g. India, Philippines" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">2. Educational & Background</h3>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <select required name="age" value={formData.age} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border bg-white">
                    <option value="">Select Age Group</option>
                    <option value="18-24">18 - 24</option>
                    <option value="25-35">25 - 35</option>
                    <option value="36-45">36 - 45</option>
                    <option value="46+">46+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Education Level</label>
                  <select required name="education" value={formData.education} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border bg-white">
                    <option value="">Select Education</option>
                    <option value="High School">High School Diploma</option>
                    <option value="Trade Certificate">Trade/Vocational Certificate</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree or Higher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Experience (Years)</label>
                  <select required name="experience" value={formData.experience} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border bg-white">
                    <option value="">Select Experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1 - 3 years</option>
                    <option value="4-7">4 - 7 years</option>
                    <option value="8+">8+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">English Proficiency (IELTS/TEF)</label>
                  <select required name="english" value={formData.english} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border bg-white">
                    <option value="">Select Proficiency</option>
                    <option value="None">No Test Taken</option>
                    <option value="Basic">Basic (CLB 4-5)</option>
                    <option value="Intermediate">Intermediate (CLB 6-7)</option>
                    <option value="Advanced">Advanced (CLB 8+)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">3. Occupation Details</h3>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Occupation / Job Title</label>
                  <input required type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border" placeholder="e.g. Registered Nurse, Truck Driver" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Desired Work Category in Canada</label>
                  <select required name="category" value={formData.category} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary px-4 py-2 border bg-white">
                    <option value="">Select Category</option>
                    <option value="Skilled Trades">Skilled Trades</option>
                    <option value="Construction">Construction</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Logistics">Logistics & Transport</option>
                    <option value="Healthcare">Healthcare Support</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy. You understand that we are a private immigration assistance company and not affiliated with the Government of Canada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              className={`flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ${step === 1 ? 'invisible' : ''}`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            <button
              type="submit"
              className="flex items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              {step === 3 ? (
                <>Submit Assessment <Send className="w-4 h-4 ml-2" /></>
              ) : (
                <>Next Step <ChevronRight className="w-4 h-4 ml-1" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
