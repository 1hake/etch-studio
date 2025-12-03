'use client';

import { ClassValue } from 'clsx';

import { cn } from '../lib/utils';

type Props = {
  className?: ClassValue;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

export default function Button({
  className,
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false
}: Props) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'text-white bg-accent-600 hover:bg-accent-700 shadow-sm',
    secondary: 'text-text-primary dark:text-dark-text-primary bg-background-secondary dark:bg-dark-background-secondary hover:bg-background-tertiary dark:hover:bg-dark-background-tertiary border border-border dark:border-dark-border',
    outline: 'text-accent-600 dark:text-accent-400 border-2 border-accent-600 dark:border-accent-400 hover:bg-accent-600 dark:hover:bg-accent-400 hover:text-white dark:hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-body-sm',
    md: 'px-6 py-3 text-body-md',
    lg: 'px-8 py-4 text-body-lg'
  };

  return (
    <button
      role="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  );
}