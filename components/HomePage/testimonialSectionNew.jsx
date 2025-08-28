"use client";
import React from "react";

const testimonials = [
  {
    name: "Emma Johnson",
    title: "Project Manager at Tech Innovators", 
    message: "The AI Scheduling Assistant has revolutionized the way I manage my time. Meetings are now seamlessly organized without any effort on my part!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Smith",
    title: "Sales Executive at Global Enterprises",
    message: "I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Miller",
    title: "Operations Manager at OpsCorp",
    message: "The AI Scheduling Assistant has efficient tools that have reduced errors and saved us time.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "William Smith",
    title: "CEO at Business Solutions Group",
    message: "As a CEO, time is my most valuable resource. The AI Scheduling Assistant helps me optimize my schedule and focus on what matters most!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jane Doe",
    title: "Marketing Director at Creative Solutions",
    message: "The AI Scheduling Assistant revolutionized my workflow. It's like having a personal assistant who works around the clock!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sophia Lee",
    title: "HR Director at People First Corp",
    message: "This app has made scheduling interviews a breeze. The Scheduling Assistant is a game changer for our HR department!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

const TestimonialsRow = ({ 
  testimonials, 
  direction = "left",
  duration = 20 
}) => {
  return (
    <div className="relative h-48 overflow-hidden mb-8">
      {/* Left fade gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade gradient */}
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div
        className="flex gap-6 h-full items-center"
        style={{
          width: "200%",
          animation: direction === "left" 
            ? `scrollLeft ${duration}s linear infinite`
            : `scrollRight ${duration}s linear infinite`
        }}
      >
        {[...Array(2)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {testimonials.map((testimonial, index) => (
              <div
                key={`${arrayIndex}-${index}`}
                className="group relative min-w-[400px] h-40 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-6 border border-orange-400/20 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative z-10 flex items-start gap-4 h-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-400/30 shadow-lg"
                  />
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <p className="text-gray-100 text-sm leading-relaxed mb-3 line-clamp-3">
                      "{testimonial.message}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                      <p className="text-orange-200 text-xs opacity-80">{testimonial.title}</p>
                    </div>
                  </div>
                </div>

                {/* Additional glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"></div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <section className="relative bg-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-200">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300">
              Users are Saying
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto opacity-90">
            Hear from satisfied users of the AI Scheduling Assistant
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="space-y-0">
          {/* Top Row - Moving Left to Right */}
          <TestimonialsRow 
            testimonials={firstRow} 
            direction="left" 
            duration={25} 
          />
          
          {/* Bottom Row - Moving Right to Left */}
          <TestimonialsRow 
            testimonials={secondRow} 
            direction="right" 
            duration={30} 
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
