"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FEATURED_PROJECT, OTHER_PROJECTS } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <Section id="projects" className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                        Projects & Portfolio
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Featured Project */}
                <div id="featured-project" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-gradient-to-br from-background via-muted/10 to-accent/5 border-2 border-accent/20 overflow-hidden shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300">
                            <div className="grid lg:grid-cols-2 gap-0 lg:gap-8">

                                {/* Content Side */}
                                <div className="p-8 lg:p-12 flex flex-col h-full">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-amber-500/20">Featured Project</Badge>
                                        <Badge variant="outline" className="text-xs">Microservices</Badge>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {FEATURED_PROJECT.title}
                                    </h3>

                                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                        {FEATURED_PROJECT.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {FEATURED_PROJECT.metrics.map((metric, i) => (
                                            <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5">
                                                <div className="text-lg font-bold text-white">{metric.split(' ')[0]}</div>
                                                <div className="text-xs text-muted-foreground">{metric.substring(metric.indexOf(' ') + 1)}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto mb-8">
                                        {FEATURED_PROJECT.tech.map(t => (
                                            <Badge key={t} className="bg-white/10 hover:bg-white/20">{t}</Badge>
                                        ))}
                                    </div>


                                </div>

                                {/* Details Side */}
                                <div className="bg-black/20 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-6">Technical Architecture</h4>

                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="text-sm font-medium text-accent mb-2">Microservices Design</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                {FEATURED_PROJECT.details.architecture.map((item, i) => (
                                                    <li key={i}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium text-accent mb-2">Security & Payments</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                {FEATURED_PROJECT.details.security.map((item, i) => (
                                                    <li key={i}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-medium text-accent mb-2">Performance</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                {FEATURED_PROJECT.details.performance.map((item, i) => (
                                                    <li key={i}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </motion.div>
                </div>

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {OTHER_PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-accent/30 transition-all group">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="text-4xl opacity-10 font-bold group-hover:opacity-20 transition-opacity">
                                            0{index + 2}
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                                    </div>
                                    <CardTitle className="mt-2 group-hover:text-accent transition-colors">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <div className="text-sm font-medium text-emerald-400 mb-1">Impact</div>
                                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-blue-400 mb-1">Tech Stack</div>
                                        <p className="text-sm text-muted-foreground font-mono bg-black/20 p-2 rounded">{project.tech}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
}
