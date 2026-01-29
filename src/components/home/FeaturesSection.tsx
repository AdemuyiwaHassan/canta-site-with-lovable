import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coins, Zap, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Low Transfer Fees",
    description: "Save more with our competitive rates. No hidden charges, just transparent pricing for every transaction.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Send money in minutes, not days. Our instant transfer technology ensures your funds arrive quickly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Transfer in 50+ currencies across the globe. Seamless conversions at the best exchange rates.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with end-to-end encryption. Licensed and regulated for your peace of mind.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative">
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
            Why Choose Canta
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Features That Set Us Apart
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of cross-border payments with our cutting-edge features
            designed to make your money move faster and smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
