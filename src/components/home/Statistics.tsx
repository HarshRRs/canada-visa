"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Briefcase, Star, Clock } from "lucide-react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-extrabold text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    {
      id: 1,
      name: "Applications Processed",
      value: 3000,
      suffix: "+",
      icon: Users,
    },
    {
      id: 2,
      name: "Employment Offers Assisted",
      value: 3000,
      suffix: "+",
      icon: Briefcase,
    },
    {
      id: 3,
      name: "Client Satisfaction",
      value: 95,
      suffix: "%",
      icon: Star,
    },
    {
      id: 4,
      name: "Years Experience",
      value: 10,
      suffix: "+",
      icon: Clock,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Thousands Worldwide
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our proven track record in Canadian immigration and employment assistance speaks for itself.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="flex flex-col mt-10 sm:mt-0 bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-red-50 text-primary mb-4">
                <stat.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-primary">
                <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
