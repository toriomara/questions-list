// src/shared/ui/Button/index.tsx
import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
    const variantStyles = {
      'primary': 'bg-primary text-neutral-100 hover:bg-opacity-90',
      'outline': 'border border-neutral-200 text-neutral-900 hover:bg-neutral-200/50',
    };
    const sizeStyles = {
      'default': 'px-4 py-2 text-sm',
      'icon': 'h-10 w-10 text-xl',
    };

    return (
      <button
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };