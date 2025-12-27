import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                    &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                </p>
                <div className="flex justify-center gap-6 text-sm text-muted-foreground/60">
                    <Link href="#hero" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-accent transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
                    <a href="/resume.pdf" download className="hover:text-accent transition-colors">Resume</a>
                </div>
            </div>
        </footer>
    );
}
