import { motion } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import { User, Settings, Award, TrendingUp, Scale, Ruler, Calendar, ChevronRight, LogOut } from "lucide-react";

const stats = [
  { label: "Peso Atual", value: "80 kg", icon: <Scale size={16} /> },
  { label: "Altura", value: "178 cm", icon: <Ruler size={16} /> },
  { label: "Gordura Corporal", value: "18%", icon: <TrendingUp size={16} /> },
  { label: "Membro desde", value: "Mar 2025", icon: <Calendar size={16} /> },
];

const achievements = [
  { emoji: "🔥", label: "30 Dias Streak" },
  { emoji: "💪", label: "100 Treinos" },
  { emoji: "🏆", label: "Top 10" },
  { emoji: "⭐", label: "Macro Master" },
  { emoji: "🎯", label: "Meta Batida" },
  { emoji: "🧠", label: "Disciplina" },
];

const menuItems = [
  { label: "Editar Perfil", icon: <User size={18} /> },
  { label: "Meus Profissionais", icon: <Award size={18} /> },
  { label: "Configurações", icon: <Settings size={18} /> },
];

const Profile = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-12 pb-4 max-w-lg mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center">
            <span className="text-2xl font-display font-bold text-primary-foreground">CS</span>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">Carlos Silva</h1>
            <p className="text-sm text-muted-foreground">Nível 18 · Intermediário</p>
            <div className="w-32 h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
              <div className="w-[65%] h-full gradient-primary rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-3"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                {s.icon}
                <span className="text-[10px] uppercase tracking-wide">{s.label}</span>
              </div>
              <p className="text-base font-display font-bold text-foreground">{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-sm font-semibold text-foreground mb-3">Conquistas</h2>
          <div className="flex gap-2 flex-wrap">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="glass-card rounded-xl px-3 py-2 flex items-center gap-1.5"
              >
                <span className="text-base">{a.emoji}</span>
                <span className="text-[10px] font-medium text-muted-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Menu */}
        <div className="space-y-2 mb-6">
          {menuItems.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="w-full glass-card rounded-xl p-4 flex items-center gap-3 text-left"
            >
              <span className="text-muted-foreground">{item.icon}</span>
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.button>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-destructive/10 text-destructive text-sm font-medium">
          <LogOut size={16} />
          Sair da Conta
        </button>
      </div>
    </AppLayout>
  );
};

export default Profile;
