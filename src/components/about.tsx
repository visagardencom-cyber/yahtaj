"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: TrendingUp, value: "200%", label: "Avg. Growth" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Target, value: "100%", label: "Success Rate" },
];

const values = [
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading AI-powered IT solutions provider, transforming businesses worldwide through innovation.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Delivering exceptional AI solutions that empower businesses to achieve measurable growth and efficiency.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Innovation, integrity, customer success, and continuous improvement guide everything we do.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Yahtaj</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a forward-thinking IT company specializing in AI solutions and digital transformation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}