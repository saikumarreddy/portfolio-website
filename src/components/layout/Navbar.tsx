"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("hero");

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -50% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/favicon.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {SITE_CONFIG.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    isActive ? "text-accent" : "text-muted-foreground hover:text-accent"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        );
                    })}
                    <ThemeToggle />

                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors p-2",
                                            isActive ? "text-accent bg-accent/10 rounded-md" : "text-muted-foreground hover:text-accent"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}

                            <div className="flex justify-center pt-2">
                                <ThemeToggle />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
