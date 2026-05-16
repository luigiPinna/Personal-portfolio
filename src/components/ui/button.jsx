import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* Tuned to match the prototype's pill-shaped CTAs. */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-mono text-[12px] tracking-[0.04em] transition-all whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'border border-ink bg-ink text-bg hover:bg-accent hover:border-accent',
        ghost:
          'border border-line-strong bg-transparent text-ink hover:border-ink',
      },
      size: {
        default: 'px-[18px] py-3',
        sm:      'px-3 py-2 text-[11px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
