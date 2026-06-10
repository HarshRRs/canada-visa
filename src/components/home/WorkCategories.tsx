import Link from "next/link";
import { Wrench, HardHat, Coffee, Truck, HeartPulse, Tractor, ArrowRight } from "lucide-react";

export default function WorkCategories() {
  const categories = [
    {
      id: "skilled-trades",
      name: "Skilled Trades",
      icon: Wrench,
      description: "Electricians, Welders, Mechanics, Plumbers, and other specialized trade professionals.",
      salaryRange: "$60,000 - $95,000 CAD/year",
      color: "bg-blue-50 text-blue-700",
    },
    {
      id: "construction",
      name: "Construction",
      icon: HardHat,
      description: "Laborers, Site Supervisors, Equipment Operators, and Project Managers.",
      salaryRange: "$50,000 - $110,000 CAD/year",
      color: "bg-orange-50 text-orange-700",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: Coffee,
      description: "Hotel Staff, Housekeeping, Restaurant Workers, and Culinary Professionals.",
      salaryRange: "$35,000 - $65,000 CAD/year",
      color: "bg-teal-50 text-teal-700",
    },
    {
      id: "logistics",
      name: "Logistics & Transport",
      icon: Truck,
      description: "Truck Drivers, Warehouse Workers, Supply Chain Coordinators.",
      salaryRange: "$45,000 - $85,000 CAD/year",
      color: "bg-indigo-50 text-indigo-700",
    },
    {
      id: "healthcare",
      name: "Healthcare Support",
      icon: HeartPulse,
      description: "Caregivers, Support Workers, Nursing Assistants, and Medical Orderlies.",
      salaryRange: "$40,000 - $75,000 CAD/year",
      color: "bg-rose-50 text-rose-700",
    },
    {
      id: "agriculture",
      name: "Agriculture",
      icon: Tractor,
      description: "Farm Workers, Seasonal Agricultural Workers, and Harvesting Supervisors.",
      salaryRange: "$30,000 - $55,000 CAD/year",
      color: "bg-green-50 text-green-700",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            In-Demand Work Categories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Canada is actively seeking professionals in these key sectors. Explore opportunities that match your skills.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className={`inline-flex p-3 rounded-xl ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Estimated Salary
                  </span>
                  <span className="text-gray-900 font-medium">
                    {category.salaryRange}
                  </span>
                </div>
              </div>
              <div className="px-8 pb-8 mt-auto">
                <Link
                  href={`/eligibility?category=${category.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-primary transition-colors"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
