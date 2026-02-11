import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Users, Trophy, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const features = [
  {
    icon: <Calculator className="text-primary" size={28} />,
    title: "Cálculos Científicos",
    desc: "TMB, macros, % gordura e ciclo de carboidratos com precisão acadêmica.",
  },
  {
    icon: <Users className="text-accent" size={28} />,
    title: "Conexão Profissional",
    desc: "Personal trainers e nutricionistas conectados diretamente a você.",
  },
  {
    icon: <Trophy className="text-primary" size={28} />,
    title: "Gamificação",
    desc: "Ranking, desafios e recompensas que transformam saúde em jogo.",
  },
  {
    icon: <Zap className="text-accent" size={28} />,
    title: "Treinos Inteligentes",
    desc: "Planos personalizados com demonstrações e progressão.",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fitness Connect hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-primary" size={20} />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Fitness Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              Sua evolução
              <br />
              <span className="text-gradient-primary">calculada pela ciência.</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md">
              Treinos, nutrição e gamificação guiados por profissionais. 
              Cada repetição conta pontos na sua jornada.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-2xl glow-primary transition-transform hover:scale-105 active:scale-95"
            >
              Começar Agora
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 shadow-card hover:border-primary/20 transition-colors"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 max-w-lg mx-auto shadow-card"
        >
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            Pronto para competir?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Junte-se a milhares de atletas que já transformaram saúde em jogo.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-transform hover:scale-105"
          >
            Entrar no Jogo <Trophy size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
