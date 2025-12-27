"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { WHY_HIRE_SAI } from "@/lib/data";
import { motion } from "framer-motion";
import { Building, Server, RefreshCw, Users, Cloud, ShieldCheck } from "lucide-react";

// Map icon strings to lucide components
const iconMap = {
    building: Building,
    server: Server,
    refresh: RefreshCw,
    users: Users,
    cloud: Cloud,
    "shield-check": ShieldCheck,
};

export function WhyHireSai() {
    return (
        <Section id="why-hire-sai" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                        Why Hire Sai?
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WHY_HIRE_SAI.map((item, index) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap] || Server;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-white/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all">
                                    <CardHeader>
                                        <div className="p-3 bg-accent/10 w-fit rounded-lg mb-4">
                                            <Icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <CardTitle className="text-xl text-white">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
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
