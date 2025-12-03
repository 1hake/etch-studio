import React from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ children, id, subtitle, className = "" }: Props) => {
  return (
    <div id={id} className={`text-center mb-16 ${className}`}>
      <h2 className="text-display-lg md:text-display-xl font-bold text-text-primary dark:text-dark-text-primary mb-4 text-balance">
        {children}
      </h2>

      {subtitle && (
        <p className="text-body-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}

      {/* Decorative element */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-12 h-px bg-accent-600 dark:bg-accent-400" />
        <div className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full mx-4" />
        <div className="w-12 h-px bg-accent-600 dark:bg-accent-400" />
      </div>
    </div>
  );
};


