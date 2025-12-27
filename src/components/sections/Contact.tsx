"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SITE_CONFIG } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-accent/5 -skew-y-3 transform origin-top-left scale-110" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-background border border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2">

                        {/* Left Side: Text */}
                        <div className="p-8 md:p-12 bg-accent/10 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <span className="text-xl">💼</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Availability</div>
                                        <div className="text-sm text-muted-foreground">Immediate | Remote or Hybrid</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Actions */}
                        <div className="p-8 md:p-12 bg-background flex flex-col justify-center space-y-4">
                            <Button className="w-full justify-start h-14 text-lg" asChild>
                                <a href={`mailto:${SITE_CONFIG.email}`}>
                                    <Mail className="mr-3 w-5 h-5" /> Email Me
                                </a>
                            </Button>

                            <Button variant="outline" className="w-full justify-start h-14 text-lg" asChild>
                                <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-3 w-5 h-5" /> Connect on LinkedIn
                                </a>
                            </Button>

                            <Button variant="ghost" className="w-full justify-start h-14 text-lg" disabled>
                                <Calendar className="mr-3 w-5 h-5" /> Schedule Call (Coming Soon)
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}
