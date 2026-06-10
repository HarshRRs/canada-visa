"use client";

import Image from "next/image";
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
        { sender: "client", time: "10:42 AM", text: "Hi team, any update on my LMIA application?" },
        { sender: "agent", time: "11:05 AM", text: "Good news Rajesh! Your LMIA has been approved. We are sending you the documents now." },
        { sender: "client", time: "11:08 AM", text: "Wow! Thank you so much! Very professional process. Best decision I made." }
      ]
    },
    {
      id: 2,
      name: "Maria Garcia",
      country: "Philippines",
      role: "Registered Nurse",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      chat: [
        { sender: "agent", time: "09:15 AM", text: "Maria, your Work Permit has been officially stamped!" },
        { sender: "client", time: "09:20 AM", text: "I can't believe it! Received my offer letter successfully last month and now the visa. Thank you for helping me with my application." },
        { sender: "agent", time: "09:25 AM", text: "You're very welcome. We will help you with the pre-arrival steps next." }
      ]
    },
    {
      id: 3,
      name: "David Chen",
      country: "China",
      role: "Construction Supervisor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      chat: [
        { sender: "client", time: "02:30 PM", text: "Just landed in Toronto! The immigration clearance was smooth." },
        { sender: "agent", time: "02:45 PM", text: "Welcome to Canada, David! We are thrilled for you." },
        { sender: "client", time: "02:50 PM", text: "Great support throughout the process. I will recommend your services to my friends." }
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

              {/* WhatsApp Style Chat */}
              <div className="p-6 bg-[#efeae2] h-64 overflow-y-auto space-y-4">
                {testimonial.chat.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-lg p-3 relative shadow-sm text-sm ${
                        msg.sender === "client"
                          ? "bg-[#d9fdd3] text-gray-900 rounded-tr-none"
                          : "bg-white text-gray-900 rounded-tl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-[10px] text-gray-500 float-right mt-1 ml-2">
                        {msg.time}
                        {msg.sender === "client" && (
                          <span className="text-blue-500 ml-1">✓✓</span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
