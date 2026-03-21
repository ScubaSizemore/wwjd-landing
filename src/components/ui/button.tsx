import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "motion/react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50",
  {
    variants: {
      variant: {
        // Primary - Main call-to-action
        primary: "bg-accent-primary text-white rounded-xl shadow-soft hover:bg-accent-primary/90 font-medium",
        
        // Secondary - Supporting actions (solid light background)
        secondary: "bg-secondary text-secondary-foreground border border-border rounded-xl hover:bg-secondary/80 font-medium",
        
        // Outline - Tertiary actions (bordered)
        outline: "border-2 border-[hsl(var(--link))] text-[hsl(var(--link))] bg-transparent rounded-xl hover:bg-[hsl(var(--link))] hover:text-white font-medium",
        
        // Ghost - Minimal footprint
        ghost: "text-foreground hover:bg-muted rounded-xl font-medium",
        
        // Dark - For light backgrounds (near-black)
        dark: "bg-zinc-900 text-white rounded-xl hover:bg-black font-semibold shadow-lg",
        
        // Light - For dark backgrounds (white)
        light: "bg-white text-zinc-900 rounded-xl hover:bg-zinc-100 font-semibold shadow-lg",
        
        // Danger - Destructive actions
        danger: "bg-danger text-white rounded-xl shadow-soft hover:bg-danger/90 font-medium",
        
        // Success - Confirmations
        success: "bg-success text-white rounded-xl shadow-soft hover:bg-success/90 font-medium",
        
        // Icon - Icon-only buttons
        icon: "bg-muted text-muted-foreground border border-border rounded-xl hover:bg-muted/80 hover:text-foreground",
        
        // Link - Text links
        link: "text-[hsl(var(--link))] underline-offset-4 hover:underline hover:text-[hsl(var(--link-hover))] font-medium p-0 h-auto",
        
        // Toggle - Tab/switch buttons
        toggle: "px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:text-foreground data-[active=true]:bg-foreground data-[active=true]:text-background",
        
        // Subtle - Inline minor actions
        subtle: "text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium h-auto p-0"
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-13 px-8 py-4 text-base",
        xl: "h-14 px-8 py-4 text-sm",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      />
    );
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
