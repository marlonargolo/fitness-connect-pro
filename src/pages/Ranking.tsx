import { motion } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import { Trophy, Medal, TrendingUp, Flame, Target, Crown } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Ana Oliveira", xp: 12450, level: 24, badge: "🥇" },
  { rank: 2, name: "Pedro Santos", xp: 11200, level: 22, badge: "🥈" },
  { rank: 3, name: "Juliana Costa", xp: 10800, level: 21, badge: "🥉" },
  { rank: 4, name: "Carlos Silva", xp: 9300, level: 18, badge: "⭐", isUser: true },
  { rank: 5, name: "Mariana Lima", xp: 8700, level: 17, badge: "⭐" },
  { rank: 6, name: "Ricardo Alves", xp: 8100, level: 16, badge: "⭐" },
  { rank: 7, name: "Fernanda Reis", xp: 7500, level: 15, badge: "⭐" },
];

const challenges = [
  {
    title: "Desafio 7 Dias",
    desc: "Complete 7 treinos consecutivos",
    progress: 5,
    total: 7,
    reward: "+500 XP",
    icon: <Flame size={18} />,
  },
  {
    title: "Macro Master",
    desc: "Bata as metas de macros 5 dias seguidos",
    progress: 3,
    total: 5,
    reward: "+300 XP",
    icon: <Target size={18} />,
  },
  {
    title: "Evolução Total",
    desc: "Perca 2% de gordura corporal este mês",
    progress: 1.2,
    total: 2,
    reward: "+1000 XP",
    icon: <TrendingUp size={18} />,
  },
];

const Ranking = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-12 pb-4 max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={24} className="text-primary" />
            <h1 className="text-2xl font-display font-bold text-foreground">Ranking</h1>
          </div>
        </motion.div>

        {/* User Position Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-5 mb-6 shadow-card border-primary/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary-foreground">4°</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Sua Posição</p>
              <p className="text-xs text-muted-foreground">9.300 XP · Nível 18</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-primary font-semibold">+1.500 XP</p>
              <p className="text-[10px] text-muted-foreground">para o 3° lugar</p>
            </div>
          </div>
        </motion.div>

        {/* Leaderboard */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Crown size={16} className="text-primary" /> Top Ranking Semanal
          </h2>
          <div className="space-y-2">
            {leaderboard.map((user, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card rounded-xl p-3 flex items-center gap-3 ${
                  user.isUser ? "border-primary/30" : ""
                }`}
              >
                <span className="text-lg w-8 text-center">{user.badge}</span>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${user.isUser ? "text-primary" : "text-foreground"}`}>
                    {user.name} {user.isUser && "(Você)"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Nível {user.level}</p>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {user.xp.toLocaleString()} XP
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Challenges */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Medal size={16} className="text-accent" /> Desafios Ativos
          </h2>
          <div className="space-y-3">
            {challenges.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-2xl p-4 shadow-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-secondary rounded-xl flex items-center justify-center text-primary shrink-0">
                    {ch.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{ch.title}</p>
                    <p className="text-xs text-muted-foreground">{ch.desc}</p>
                  </div>
                  <span className="text-[10px] gradient-accent text-accent-foreground px-2 py-0.5 rounded-full font-semibold shrink-0">
                    {ch.reward}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(ch.progress / ch.total) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    className="h-full gradient-primary rounded-full"
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">
                  {ch.progress}/{ch.total}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Ranking;
