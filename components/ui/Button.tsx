import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'dark' | 'light';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = 'dark', className = '', type = 'button', disabled = false }: ButtonProps) {
  const base = 'font-mono text-sm font-medium px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    dark: 'bg-[#111] text-white',
    light: 'bg-white text-black',
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
