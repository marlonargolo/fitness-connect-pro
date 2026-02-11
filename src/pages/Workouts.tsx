import { motion } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import { Dumbbell, Clock, ChevronRight, CheckCircle2 } from "lucide-react";

const workoutDays = [
  {
    day: "Segunda",
    name: "Peito + Tríceps",
    exercises: 6,
    duration: "55 min",
    completed: true,
  },
  {
    day: "Terça",
    name: "Costas + Bíceps",
    exercises: 6,
    duration: "50 min",
    completed: true,
  },
  {
    day: "Quarta",
    name: "Pernas + Glúteos",
    exercises: 8,
    duration: "65 min",
    completed: false,
  },
  {
    day: "Quinta",
    name: "Ombros + Abdômen",
    exercises: 7,
    duration: "50 min",
    completed: false,
  },
  {
    day: "Sexta",
    name: "Full Body",
    exercises: 10,
    duration: "60 min",
    completed: false,
  },
];

const todayExercises = [
  { name: "Agachamento Livre", sets: "4x10", weight: "80kg", done: true },
  { name: "Leg Press 45°", sets: "4x12", weight: "200kg", done: true },
  { name: "Cadeira Extensora", sets: "3x15", weight: "50kg", done: false },
  { name: "Mesa Flexora", sets: "3x12", weight: "40kg", done: false },
  { name: "Panturrilha em Pé", sets: "4x15", weight: "60kg", done: false },
  { name: "Stiff", sets: "3x10", weight: "50kg", done: false },
  { name: "Abdução de Quadril", sets: "3x15", weight: "35kg", done: false },
  { name: "Abdominal Infra", sets: "3x20", weight: "Corpo", done: false },
];

const Workouts = () => {
  return (
    <AppLayout>
      <div className="px-4 pt-12 pb-4 max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center gap-2 mb-6">
            <Dumbbell size={24} className="text-primary" />
            <h1 className="text-2xl font-display font-bold text-foreground">Treinos</h1>
          </div>
        </motion.div>

        {/* Weekly Overview */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {workoutDays.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`shrink-0 w-28 glass-card rounded-2xl p-3 text-center ${
                i === 2 ? "border-primary/30" : ""
              }`}
            >
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{w.day}</p>
              <p className="text-xs font-semibold text-foreground mt-1 truncate">{w.name}</p>
              <div className="mt-2">
                {w.completed ? (
                  <CheckCircle2 size={18} className="mx-auto text-primary" />
                ) : i === 2 ? (
                  <span className="text-[10px] gradient-primary text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                    HOJE
                  </span>
                ) : (
                  <span className="text-[10px] text-muted-foreground">Pendente</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Today's Workout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Treino de Hoje</h2>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span className="text-xs">65 min</span>
            </div>
          </div>

          <div className="space-y-2">
            {todayExercises.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.04 }}
                className={`glass-card rounded-xl p-4 flex items-center gap-3 ${
                  ex.done ? "border-primary/20" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    ex.done
                      ? "gradient-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${ex.done ? "text-primary" : "text-foreground"}`}>
                    {ex.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {ex.sets} · {ex.weight}
                  </p>
                </div>
                {ex.done ? (
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                ) : (
                  <ChevronRight size={18} className="text-muted-foreground shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Workouts;
