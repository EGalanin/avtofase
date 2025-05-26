import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementType, Ref } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    disabled?: boolean;
} & ComponentPropsWithoutRef<T>;

const variants = {
    primary: "bg-blue-600 text-black hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-gray-600 hover:bg-gray-100 justify-start",
} as const;

const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
} as const;

export const Button = forwardRef(
    <T extends ElementType = "button">(props: ButtonProps<T>, ref: Ref<HTMLButtonElement>) => {
        const {
            as,
            className = "",
            variant = "primary",
            size = "md",
            fullWidth = false,
            disabled = false,
            children,
            ...rest
        } = props;

        const Component = as || "button";

        const classes = [
            "inline-flex items-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            variants[variant],
            sizes[size],
            fullWidth && "w-full",
            disabled && "opacity-50 cursor-not-allowed",
            className,
        ]
            .filter(Boolean)
            .join(" ");

        return (
            <Component ref={ref} className={classes} disabled={disabled} {...rest}>
                {children}
            </Component>
        );
    }
);

Button.displayName = "Button";
