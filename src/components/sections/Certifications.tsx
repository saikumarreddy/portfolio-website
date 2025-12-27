/*"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CERTIFICATIONS } from "@/lib/data";
import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw, Award } from "lucide-react";

export function Certifications() {
    return (
        <Section id="certifications" className="bg-white/5 py-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                        <Award className="w-8 h-8 text-accent" />
                        Certifications & Learning
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-background border-white/10 hover:border-accent/30 transition-all">
                                <CardContent className="p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            {cert.status === "Completed" ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                            ) : (
                                                <RotateCcw className="w-5 h-5 text-amber-500 animate-[spin_3s_linear_infinite]" />
                                            )}
                                            <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${cert.status === "Completed"
                                                    ? "bg-emerald-500/10 text-emerald-500"
                                                    : "bg-amber-500/10 text-amber-500"
                                                }`}>
                                                {cert.status}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                                    </div>

                                    <div className="text-sm text-muted-foreground mt-4 pt-4 border-t border-white/5">
                                        {cert.status === "Completed" ? (
                                            <span>Completed: {cert.year}</span>
                                        ) : (
                                            <span>Expected: {cert.expected}</span>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
} */
