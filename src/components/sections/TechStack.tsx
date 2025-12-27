"use client";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TECH_STACK } from "@/lib/data";
import { motion } from "framer-motion";

const categories = [
    { id: "backend", label: "Backend", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { id: "frontend", label: "Frontend", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { id: "database", label: "Databases", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    { id: "api", label: "API & Messaging", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    { id: "cloud", label: "Cloud & Infra", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { id: "devops", label: "DevOps", color: "bg-slate-500/10 text-slate-400 border-slate-500/20" },
    { id: "monitoring", label: "Observability", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    { id: "testing", label: "Testing", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
];

export function TechStack() {
    return (
        <Section id="skills" className="pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Technical Arsenal
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Quick Reference Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => {
                        const items = TECH_STACK[cat.id as keyof typeof TECH_STACK];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <Card className="h-full bg-white/5 border-white/5 hover:border-accent/20 transition-all group">
                                    <CardContent className="p-6">
                                        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${cat.color.split(' ')[1]}`}>
                                            {cat.label}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <Badge
                                                    key={item}
                                                    className={`bg-black/20 hover:bg-black/40 border-white/5 transition-all cursor-default text-xs`}
                                                >
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
