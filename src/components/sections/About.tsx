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
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5">
                        <Image
                            src="/profile.png"
                            alt="Sai Kumar Reddy"
                            fill
                            className="object-cover"
                            priority
                        />
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
