"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { IMPACT_METRICS } from "@/lib/data";
import { motion } from "framer-motion";
import { Users, Rocket, Activity, DollarSign, Zap, Database, Code, TrendingUp } from "lucide-react";

const icons = {
    "user-group": Users,
    "rocket": Rocket,
    "activity": Activity,
    "currency-dollar": DollarSign,
    "lightning-bolt": Zap,
    "database": Database,
    "code": Code,
    "chart-bar": TrendingUp,
};

export function Impact() {
    return (
        <Section id="impact" className="pt-0 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-2">Impact at a Glance</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {IMPACT_METRICS.map((metric, index) => {
                        const Icon = icons[metric.icon as keyof typeof icons] || Code;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Card className="h-full bg-white/5 border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all">
                                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                        <Icon className="w-8 h-8 text-accent mb-4 opacity-80" />
                                        <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-2">
                                            {metric.value}
                                        </div>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {metric.label}
                                        </p>
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
