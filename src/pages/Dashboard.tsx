import { motion } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import StatCard from "@/components/StatCard";
import { Flame, Droplets, Beef, Wheat, Target, TrendingUp, Dumbbell, Calendar } from "lucide-react";

const quickActions = [
  { icon: <Dumbbell size={20} />, label: "Treinar", color: "gradient-primary" },
  { icon: <Flame size={20} />, label: "Refeição", color: "gradient-warm" },
  { icon: <Target size={20} />, label: "Desafio", color: "gradient-accent" },
  { icon: <Calendar size={20} />, label: "Agenda", color: "gradient-primary" },
];

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-12 pb-4 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-muted-foreground text-sm">Bom dia 👋</p>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Carlos Silva
          </h1>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-5 mb-6 shadow-card"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Progresso Semanal</h2>
            <span className="text-xs text-primary font-medium">78%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full gradient-primary rounded-full"
            />
          </div>
          <div className="flex justify-between mt-3 text-xs text-muted-foreground">
            <span>5/7 treinos</span>
            <span>2.340 / 2.800 kcal</span>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {quickActions.map((action, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className={`${action.color} w-12 h-12 rounded-2xl flex items-center justify-center text-primary-foreground`}>
                {action.icon}
              </div>
              <span className="text-[10px] text-muted-foreground font-medium">{action.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard
            icon={<Flame size={16} />}
            label="Calorias"
            value="2.340"
            subtitle="de 2.800 kcal"
            variant="primary"
          />
          <StatCard
            icon={<Beef size={16} />}
            label="Proteína"
            value="145g"
            subtitle="meta: 180g"
            variant="accent"
          />
          <StatCard
            icon={<Wheat size={16} />}
            label="Carbos"
            value="280g"
            subtitle="meta: 320g"
          />
          <StatCard
            icon={<Droplets size={16} />}
            label="Gordura"
            value="65g"
            subtitle="meta: 80g"
          />
        </div>

        {/* Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-5 shadow-card"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <TrendingUp size={16} className="text-primary" />
              Nível & XP
            </h2>
            <span className="text-xs gradient-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
              Nível 12
            </span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full gradient-accent rounded-full"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            1.300 / 2.000 XP para o próximo nível
          </p>
          <div className="flex gap-2 mt-3">
            {["🔥", "💪", "🏆", "⭐", "🎯"].map((emoji, i) => (
              <span
                key={i}
                className="w-8 h-8 flex items-center justify-center bg-secondary rounded-lg text-sm"
              >
                {emoji}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
