import { motion } from "framer-motion";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

// import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Trusted by 100,000+ users across Africa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Send Money <span className="text-gradient">Beyond Africa's</span>{" "}
              Borders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experience lightning-fast cross-border payments with the lowest
              fees. Send money to 50+ countries in minutes, not days.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 gap-2 text-base"
              >
                <Download className="w-5 h-5" />
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base border-border hover:bg-muted"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <FaApple />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Download on</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                <IoLogoGooglePlaystore />

                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl transform scale-110" />

              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                // className="relative
                // bg-card border-4 border-border rounded-[3rem]
                // p-2 shadow-2xl"
                className="relative"
              >
                <img
                  src="/asset/iphone-animation.svg"
                  alt="iPhone Animation"
                  width={320}
                  height={20}
                  className="mx-auto mt-2 rounded-sm"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-success/20 border border-success/30 rounded-2xl flex items-center justify-center"
              >
                <span className="text-2xl">💰</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-8 w-16 h-16 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center"
              >
                <span className="text-2xl">🌍</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
