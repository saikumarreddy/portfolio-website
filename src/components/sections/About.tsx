"use client";

import { Section } from "@/components/ui/Section";
import { ABOUT_CONTENT } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function About() {
    return (
        <Section id="about">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left Column - Image (3 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-4 flex flex-col items-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                        {/* Placeholder for Profile Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent/20 flex items-center justify-center text-white/20 font-bold text-4xl">
                            Profile
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                        {/* Key Achievements Icons */}
                        {ABOUT_CONTENT.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 p-2 rounded border border-white/5">
                                <span className="text-lg">{achievement.icon}</span>
                                <span>{achievement.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Narrative (8 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Senior Full-Stack Developer | <span className="text-accent">Scaling Distributed Systems</span>
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        {ABOUT_CONTENT.narrative.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
