import { Briefcase, Building, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Express Entry",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
      description: "The fastest and most popular pathway for skilled workers. We help you maximize your CRS score.",
      features: ["Federal Skilled Worker", "Canadian Experience Class", "Federal Skilled Trades"]
    },
    {
      title: "LMIA Work Permits",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: "bg-primary",
      description: "For workers who already have a job offer from a Canadian employer requiring a Labour Market Impact Assessment.",
      features: ["Employer Assistance", "Application Prep", "Fast-Track Processing"]
    },
    {
      title: "Provincial Nominee Programs",
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: "bg-green-600",
      description: "Targeted programs for workers whose skills are in demand in specific Canadian provinces or territories.",
      features: ["OINP (Ontario)", "BC PNP", "AINP (Alberta)"]
    },
    {
      title: "Global Talent Stream",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
      description: "Expedited processing for highly skilled tech talent. Get your work permit in as little as 2 weeks.",
      features: ["Tech Occupations", "2-Week Processing", "Exemptions"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Canadian Work Visa Programs</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Explore the various pathways to working in Canada. Our experts will help you identify the program that best fits your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className={`p-6 ${program.color} flex items-center gap-4`}>
              {program.icon}
              <h2 className="text-2xl font-bold text-white">{program.title}</h2>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-600 mb-6">{program.description}</p>
              <h3 className="font-semibold text-gray-900 mb-3">Key Categories:</h3>
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <Link href="/eligibility" className="text-primary font-semibold hover:text-red-700 flex items-center">
                Check Eligibility for {program.title} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Temporary import fix for the MapPin
import { MapPin } from "lucide-react";
