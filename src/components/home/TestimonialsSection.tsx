import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    country: "Nigeria",
    role: "Business Owner",
    avatar: "AO",
    rating: 5,
    text: "Canta has transformed how I pay my suppliers abroad. The fees are incredibly low compared to traditional banks, and the money arrives within minutes!",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    country: "Ghana",
    role: "Software Engineer",
    avatar: "KM",
    rating: 5,
    text: "I use Canta to support my family back home. The app is so easy to use, and I love being able to track my transfers in real-time.",
  },
  {
    id: 3,
    name: "Amara Diallo",
    country: "Senegal",
    role: "Healthcare Worker",
    avatar: "AD",
    rating: 5,
    text: "Finally, a payment app that understands African needs! Multiple currency support and instant transfers make Canta my go-to for all international payments.",
  },
  {
    id: 4,
    name: "Tendai Moyo",
    country: "Zimbabwe",
    role: "Freelancer",
    avatar: "TM",
    rating: 5,
    text: "As a freelancer working with international clients, Canta makes receiving payments seamless. Best rates I've found anywhere!",
  },
  {
    id: 5,
    name: "Fatou Sow",
    country: "Ivory Coast",
    role: "Student",
    avatar: "FS",
    rating: 5,
    text: "My parents send me money for school through Canta. It's fast, reliable, and the customer support is excellent when I need help.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our users across Africa have to say about their experience with Canta.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 bg-card border border-border rounded-2xl ${
                    index === 1 ? "md:scale-105 border-primary/30" : ""
                  }`}
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role} • {testimonial.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-border hover:border-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-border hover:border-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
