import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id: string; // ID is required for navigation
    fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, id, fullWidth = false, children, ...props }, ref) => {
        return (
            <section
                id={id}
                ref={ref}
                className={cn("py-16 md:py-24 relative scroll-m-20", className)}
                {...props}
            >
                {fullWidth ? (
                    children
                ) : (
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        {children}
                    </div>
                )}
            </section>
        );
    }
);
Section.displayName = "Section";
