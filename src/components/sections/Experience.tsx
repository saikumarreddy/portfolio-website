"use client";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { PROFESSIONAL_EXPERIENCE } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
    return (
        <Section id="experience" className="bg-white/5 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {PROFESSIONAL_EXPERIENCE.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-background/80 border-white/10 overflow-hidden">
                                <div className="grid md:grid-cols-12 gap-0 md:gap-8">

                                    {/* Left Sidebar (Role Info) - 4 Cols */}
                                    <div className="md:col-span-4 bg-muted/20 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
                                        <div>
                                            <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                                                <Briefcase className="w-5 h-5" />
                                                <span>{role.company}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{role.role}</h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                                <Calendar className="w-4 h-4" />
                                                <span>{role.dates}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {role.tech.slice(0, 6).map((item) => (
                                                <Badge key={item} variant="secondary" className="text-xs bg-white/10 hover:bg-white/20">
                                                    {item}
                                                </Badge>
                                            ))}
                                            {role.tech.length > 6 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{role.tech.length - 6} more
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Content (Metrics & Achievements) - 8 Cols */}
                                    <div className="md:col-span-8 p-6 md:p-8 space-y-8">

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {role.metrics.map((metric, i) => (
                                                <div key={i} className="bg-accent/5 border border-accent/10 rounded-lg p-3">
                                                    <div className="text-lg font-bold text-accent">{metric.text.split(' ')[0]}</div>
                                                    <div className="text-xs text-muted-foreground">{metric.subtext}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Achievements List */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Achievements</h4>
                                            <ul className="space-y-3">
                                                {role.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-accent" />
                                                        <span className="text-muted-foreground text-sm leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
