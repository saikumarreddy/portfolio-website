"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { EDUCATION } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export function Education() {
    return (
        <Section id="education" className="bg-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground">Education & Credentials</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line for Timeline */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent -translate-x-1.5 md:-translate-x-2 ring-4 ring-background" />

                            {/* Content Card */}
                            <div className="ml-8 md:ml-0 md:w-1/2 px-4">
                                <Card className="bg-background/50 backdrop-blur border-2 border-accent/20 hover:border-accent/40 transition-all shadow-xl">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 text-accent mb-2">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="font-semibold">{edu.school}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.dates}</span>
                                            {edu.gpa && (
                                                <span className="ml-auto text-accent/80 font-mono">GPA: {edu.gpa}</span>
                                            )}
                                        </div>

                                        {edu.details && (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                                                    <BookOpen className="w-4 h-4" />
                                                    Relevant Coursework:
                                                </div>
                                                <ul className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                                                    {edu.details.map((course, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="text-accent mt-1">•</span>
                                                            {course}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {edu.focus && (
                                            <div className="text-sm text-muted-foreground mt-2">
                                                Focus: {edu.focus}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Empty Space for the other side of timeline */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
