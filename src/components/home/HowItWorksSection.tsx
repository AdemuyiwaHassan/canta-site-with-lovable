import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, UserPlus, Send, CircleCheckBig } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Download,
    title: "Download the App",
    description: "Get the Canta app from App Store or Google Play in seconds.",
  },
  {
    step: 2,
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up with your email and verify your identity securely.",
  },
  {
    step: 3,
    icon: CircleCheckBig,
    title: "Complete your KYC",
    description: "Complete your KYC for individual or business account.",
  },
  {
    step: 4,
    icon: Send,
    title: "Start Sending",
    description:
      "Send money to 50+ countries with low fees and real exchange rates.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-card/50">
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
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            How Canta Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started in four easy steps and experience the simplest way to
            send money internationally.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <motion.div
                  animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="relative mx-auto w-20 h-20 mb-6"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                  <div className="relative w-full h-full bg-primary rounded-full flex items-center justify-center shadow-lg glow-primary">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 transform translate-x-1/2">
                    <motion.div
                      animate={isInView ? { x: [0, 5, 0] } : {}}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="text-primary/50"
                    >
                      →
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
