import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subtitle?: string;
  variant?: "default" | "primary" | "accent" | "warm";
}

const variantStyles = {
  default: "glass-card",
  primary: "glass-card border-primary/20",
  accent: "glass-card border-accent/20",
  warm: "glass-card border-destructive/20",
};

const StatCard = ({ icon, label, value, subtitle, variant = "default" }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${variantStyles[variant]} rounded-2xl p-4 shadow-card`}
    >
      <div className="flex items-center gap-2 mb-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-2xl font-display font-bold text-foreground">{value}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default StatCard;
