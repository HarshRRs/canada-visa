"use client";

import { Star, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      country: "India",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      chat: [
        { sender: "agent", time: "10:05 AM", text: "Good morning Rajesh! Hope you are well." },
        { sender: "agent", time: "10:05 AM", text: "🎉 Congratulations Rajesh! Your Canadian LMIA Visa application has been APPROVED! We just received the official approval letter from IRCC this morning." },
        { sender: "client", time: "10:12 AM", text: "Oh my god!! Are you serious?! This is the best news ever!! 😭🙏" },
        { sender: "client", time: "10:13 AM", text: "Thank you SO much for all your hard work! I can't believe it 🇨🇦✨" }
      ]
    },
    {
      id: 2,
      name: "Priya Sharma",
      country: "India",
      role: "IT Consultant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      chat: [
        { sender: "client", time: "11:30 AM", text: "Hi team! Any updates on my permit? Getting a bit anxious! 🤞" },
        { sender: "agent", time: "11:45 AM", text: "PRIYA!!! Oh my God, it's finally HAPPENING!!! 🎉🇨🇦 I just got the call! Your Canadian Work Permit was officially stamped and is ready for collection! 🥳" },
        { sender: "client", time: "11:50 AM", text: "WHAT?! Are you serious?? Oh my godddd! 😭❤️ THANK YOU! This is the best news EVER! I'm crying! 🇨🇦🙏" },
        { sender: "agent", time: "11:52 AM", text: "Yes, I'm totally serious! Pick it up tomorrow! 😉 We have to celebrate!" }
      ]
    },
    {
      id: 3,
      name: "Amit Patel",
      country: "India",
      role: "Operations Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      chat: [
        { sender: "client", time: "01:15 PM", text: "Just landed in Toronto! 🇨🇦🛬" },
        { sender: "client", time: "01:20 PM", text: "Immigration clearance was smooth, barely any line. 😊" },
        { sender: "client", time: "01:21 PM", text: "Just waiting for my bags now at Carousel 4." },
        { sender: "agent", time: "01:25 PM", text: "That's awesome! Welcome back to Canada! 🥳" },
        { sender: "agent", time: "01:26 PM", text: "How long did it take?" },
        { sender: "client", time: "01:28 PM", text: "Seriously! From gate to here in 20 mins max" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real People, Real Success
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join thousands of professionals who have successfully navigated the Canadian immigration process with our expert assistance.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-white object-cover"
                />
                <div className="text-white">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {testimonial.name}
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </h3>
                  <p className="text-gray-300 text-sm">{testimonial.role} • {testimonial.country}</p>
                </div>
              </div>
              
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Client
                </div>
              </div>

              {/* Realistic CSS WhatsApp UI */}
              <div className="h-[400px] flex flex-col relative bg-[#e5ddd5] overflow-hidden">
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white px-3 py-2 flex items-center shadow-md z-10 sticky top-0 shrink-0">
                  <div className="flex items-center gap-1 text-white hover:bg-white/10 rounded-full p-1 cursor-pointer">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <img src={testimonial.avatar} className="w-8 h-8 rounded-full object-cover ml-1" alt="avatar" />
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <h4 className="font-semibold text-[15px] leading-tight truncate">{testimonial.name}</h4>
                    <p className="text-[11px] text-white/80 mt-0.5 truncate leading-tight">online</p>
                  </div>
                  <div className="flex items-center gap-4 ml-2 opacity-90">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                </div>

                {/* WhatsApp Chat Body */}
                <div 
                  className="flex-1 p-4 overflow-y-auto space-y-3 pb-4" 
                  style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: 'contain', backgroundRepeat: 'repeat' }}
                >
                  <div className="flex justify-center mb-4">
                    <span className="bg-[#E1F3FB] text-gray-700 text-[11px] px-3 py-1 rounded-lg shadow-sm">
                      Today
                    </span>
                  </div>
                  
                  {testimonial.chat.map((msg, i) => {
                    const isClient = msg.sender === "client";
                    return (
                      <div key={i} className={`flex ${isClient ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[85%] rounded-lg px-2.5 py-1.5 relative shadow-sm text-[13.5px] leading-snug ${
                            isClient
                              ? "bg-[#dcf8c6] text-gray-900 rounded-tr-none"
                              : "bg-white text-gray-900 rounded-tl-none"
                          }`}
                        >
                          <p className="mr-14 pr-1">{msg.text}</p>
                          <div className="absolute right-2 bottom-1 flex items-center">
                            <span className="text-[10px] text-gray-500 mr-1 leading-none">{msg.time}</span>
                            {isClient && (
                              <svg viewBox="0 0 18 18" width="14" height="14" className="text-[#4FC3F7] mt-0.5">
                                <path fill="currentColor" d="M17.394 5.035l-.57-.444a.434.434 0 00-.609.076l-6.39 8.198a.38.38 0 01-.577.039l-.427-.388a.381.381 0 00-.578.038l-.451.576a.497.497 0 00.043.645l1.575 1.51a.38.38 0 00.577-.039l7.483-9.602a.436.436 0 00-.076-.609zm-4.892 0l-.57-.444a.434.434 0 00-.609.076l-6.39 8.198a.38.38 0 01-.577.039l-2.614-2.556a.435.435 0 00-.614.007l-.505.516a.435.435 0 00.007.614l3.887 3.8a.38.38 0 00.577-.039l7.483-9.602a.435.435 0 00-.075-.609z"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
