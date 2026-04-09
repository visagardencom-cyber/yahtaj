"use client";

import Link from "next/link";
import { Rocket, Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground/[0.03] dark:bg-foreground/[0.03] py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Yahtaj</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              AI-powered IT solutions that transform businesses and drive growth through innovation.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground text-sm">AI Solutions</span></li>
              <li><span className="text-muted-foreground text-sm">Web Development</span></li>
              <li><span className="text-muted-foreground text-sm">Process Automation</span></li>
              <li><span className="text-muted-foreground text-sm">Cloud Solutions</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@yahtaj.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yahtaj. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}