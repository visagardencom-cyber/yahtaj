"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3,
  Workflow,
  Headphones
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Custom AI chatbots, machine learning models, and intelligent automation tailored to your business needs.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and streamline workflows to boost productivity and reduce operational costs.",
  },
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance on AI implementation, helping you identify opportunities and maximize ROI.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud architecture, migration, and management services for scalable and secure infrastructure.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits, threat detection, and protection systems for your digital assets.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions, API development, and system integration services.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics and visualization tools.",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Analyze and optimize business processes for maximum efficiency and performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions powered by cutting-edge AI technology to transform your business operations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}