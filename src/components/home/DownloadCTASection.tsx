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
                  <img
                    src="/asset/iphone2.svg"
                    alt="Phone Mockup"
                    width={240}
                    height={20}
                    className="mx-auto mt-2 rounded-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTASection;
