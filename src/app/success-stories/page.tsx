import { Star, Quote } from "lucide-react";

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Raj Patel",
      country: "India",
      visaType: "Express Entry",
      quote: "Canadian Visa Assist made the Express Entry process incredibly smooth. Their attention to detail ensured my profile was perfect. I received my ITA within 3 months!",
      role: "Software Engineer in Toronto"
    },
    {
      name: "Maria Garcia",
      country: "Mexico",
      visaType: "LMIA Work Permit",
      quote: "Navigating the LMIA process seemed impossible until I found them. They guided my employer and me through every step. I'm now happily working in Vancouver.",
      role: "Marketing Manager in Vancouver"
    },
    {
      name: "David Chen",
      country: "China",
      visaType: "Provincial Nominee Program",
      quote: "The team's knowledge of the PNP programs is unmatched. They found the perfect pathway for me in Alberta. Their 100% money-back guarantee gave me the confidence to proceed.",
      role: "Financial Analyst in Calgary"
    },
    {
      name: "Sarah Johnson",
      country: "UK",
      visaType: "Global Talent Stream",
      quote: "Incredible speed and efficiency! As a tech worker, they utilized the Global Talent Stream and got my work permit approved in just 2 weeks.",
      role: "Data Scientist in Montreal"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">Success Stories</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Read about professionals from around the world who successfully relocated to Canada with our assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100" />
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 text-lg italic mb-6 relative z-10">"{story.quote}"</p>
            <div>
              <h3 className="font-bold text-gray-900">{story.name}</h3>
              <p className="text-sm text-gray-500">{story.country} • {story.visaType}</p>
              <p className="text-sm font-medium text-primary mt-1">{story.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
