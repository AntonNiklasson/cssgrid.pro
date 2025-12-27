import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg border-none transition-all duration-200';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    ghost:
      'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };

  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
