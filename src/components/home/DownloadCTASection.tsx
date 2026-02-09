import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const benefits = [
  "No hidden fees or charges",
  "24/7 customer support",
  "Bank-grade security",
  "Instant notifications",
];

const DownloadCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-primary text-sm font-medium uppercase tracking-wider"
              >
                Get Started Today
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mt-3 mb-4"
              >
                Download the Canta App
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-8"
              >
                Join over 100,000 users who trust Canta for their cross-border
                payments. Available on iOS and Android.
              </motion.p>

              {/* Benefits List */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="space-y-3 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 gap-2"
                >
                  {/* <Smartphone className="w-5 h-5" /> */}
                  <FaApple className="w-5 h-5" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-border hover:bg-muted"
                >
                  {/* <Smartphone className="w-5 h-5" /> */}
                  <IoLogoGooglePlaystore className="w-5 h-5" />
                  Google Play
                </Button>
              </motion.div>
            </div>

            {/* Phone Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-110" />

                {/* Phone Stack Effect */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 2, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-card border border-border rounded-[2rem] transform rotate-6 translate-x-4"
                  />
                  <motion.div
                    animate={{ rotate: [0, -2, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 bg-card border border-border rounded-[2rem] transform -rotate-3 -translate-x-2"
                  />

                  {/* Main Phone */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative bg-card border-4 border-border rounded-[2rem] p-2 shadow-2xl"
                  >
                    <div className="w-56 h-[400px] bg-background rounded-[1.5rem] overflow-hidden flex flex-col items-center justify-center">
                      <div className="text-6xl mb-4">🌍</div>
                      <p className="text-lg font-bold text-gradient">Canta</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Money Without Borders
                      </p>

                      <div className="mt-8 flex gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Download className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  Free Download
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTASection;
