import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Definimos las variantes del link
export const linkVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none select-none",
  {
    variants: {
      variant: {
        default: "text-primary hover:underline",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground",
        secondary: "text-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive: "text-destructive hover:underline",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 gap-1.5 px-2.5",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-7 gap-1 px-2.5",
        lg: "h-9 gap-1.5 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Tipado de props extendiendo las variantes
interface ExternalLinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const ExternalLink = ({
  href,
  title,
  children,
  className,
  variant,
  size,
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      rel="noreferrer"
      target="_blank"
      className={cn(linkVariants({ variant, size }), className)}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
