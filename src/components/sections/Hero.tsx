"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/data";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail, ArrowRight, Github } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const [typedIntro, setTypedIntro] = useState("");
    useEffect(() => {
        const fullText = HERO_CONTENT.intro;
        let index = 0;
        const interval = setInterval(() => {
            setTypedIntro(fullText.slice(0, ++index));
            if (index === fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 blur-[100px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-4xl relative z-10">


                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                >
                    <span className="mr-3 text-foreground">
                        I&apos;m a
                    </span>
                    <span className="text-foreground">
                        {HERO_CONTENT.headline}
                    </span>
                </motion.h1>

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed"
                >
                    {typedIntro}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="group" onClick={() => document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' })}>
                        {HERO_CONTENT.ctas.primary}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <div className="flex gap-2">
                        <Button variant="outline" size="lg" asChild>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="gap-2">
                                <Download className="h-4 w-4" />
                                Resume
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="px-4" asChild>
                            <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="px-4" asChild>
                            <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
