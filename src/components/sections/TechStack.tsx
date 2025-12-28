"use client";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TECH_STACK } from "@/lib/data";
import { motion } from "framer-motion";

const categories = [
    { id: "backend", label: "Backend", color: "text-blue-600 dark:text-blue-400" },
    { id: "frontend", label: "Frontend", color: "text-emerald-600 dark:text-emerald-400" },
    { id: "database", label: "Databases", color: "text-amber-600 dark:text-amber-400" },
    { id: "api", label: "API & Messaging", color: "text-red-600 dark:text-red-400" },
    { id: "cloud", label: "Cloud & Infra", color: "text-purple-600 dark:text-purple-400" },
    { id: "devops", label: "DevOps", color: "text-slate-600 dark:text-slate-400" },
    { id: "monitoring", label: "Observability", color: "text-cyan-600 dark:text-cyan-400" },
    { id: "testing", label: "Testing", color: "text-pink-600 dark:text-pink-400" },
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
                    <h2 className="text-3xl font-bold text-foreground">
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
                                <Card className="h-full bg-card border-2 border-accent/20 hover:border-accent/40 shadow-xl transition-all group">
                                    <CardContent className="p-6">
                                        <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${cat.color}`}>
                                            {cat.label}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <Badge
                                                    key={item}
                                                    variant="secondary"
                                                    className="bg-secondary/40 hover:bg-secondary/60 transition-all cursor-default text-xs"
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
