import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: I am not installing cva/radix-slot yet, so I will implement a simpler version first
// taking inspiration from shadcn/ui but keeping it lightweight without extra deps if possible.
// Actually, I should probably install 'class-variance-authority' to make this cleaner.
// I'll stick to simple prop checking for now to avoid installing more deps unless necessary.
// Start simple: props for variant.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", fullWidth = false, asChild = false, ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

        // Variants
        const variants = {
            primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg hover:shadow-accent/20",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground border-accent/50 text-accent",
            ghost: "hover:bg-accent/10 hover:text-accent",
        };

        // Sizes
        const sizes = {
            sm: "h-9 px-3 text-xs",
            md: "h-10 py-2 px-4",
            lg: "h-12 px-8 text-lg",
        };

        const widthClass = fullWidth ? "w-full" : "";

        const Comp = asChild ? Slot : "button";

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], widthClass, className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
