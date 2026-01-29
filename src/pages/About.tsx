import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Target, Heart, Users, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { number: "$2B+", label: "Transactions Processed" },
  { number: "100K+", label: "Active Users" },
  { number: "50+", label: "Countries Supported" },
  { number: "99.9%", label: "Uptime Reliability" },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our users. Your success is our success.",
  },
  {
    icon: Globe,
    title: "Borderless Finance",
    description: "We believe money should move as freely as ideas. Geography shouldn't limit opportunity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by Africans, for Africans. We understand the unique challenges of our continent.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We hold ourselves to the highest standards in security, speed, and service.",
  },
];

const team = [
  { name: "Oluwaseun Adeleke", role: "CEO & Founder", avatar: "OA" },
  { name: "Amina Bello", role: "CTO", avatar: "AB" },
  { name: "Kwesi Asante", role: "Head of Operations", avatar: "KA" },
  { name: "Zainab Ibrahim", role: "Head of Compliance", avatar: "ZI" },
];

const About = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Canta
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Reimagining Financial{" "}
              <span className="text-gradient">Connections</span> Across Africa
            </h1>
            <p className="text-lg text-muted-foreground">
              Born from the vision of making cross-border payments accessible to every African, 
              Canta is on a mission to connect the continent to the global economy—one transaction at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're building the financial infrastructure that Africa deserves. Traditional banking 
                has long failed the African diaspora and businesses seeking to operate globally. 
                High fees, slow transfers, and limited currency options have been the norm for too long.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Canta exists to change that. We've built a platform that combines cutting-edge 
                technology with deep local expertise to deliver fast, affordable, and secure 
                cross-border payments that work for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every African has equal access to the global financial system. 
                  Where sending money home is as easy as sending a message. Where businesses 
                  can trade internationally without friction.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-xl">
                  <p className="text-sm italic text-muted-foreground">
                    "We envision an Africa where financial borders are a thing of the past."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Leadership</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Our diverse team brings together expertise in fintech, banking, and technology 
              to deliver the best cross-border payment experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/50 transition-all"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.avatar}</span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
