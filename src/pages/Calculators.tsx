import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "@/components/AppLayout";
import { Calculator, Flame, Beef, Wheat, Droplets, Activity, ChevronRight } from "lucide-react";

type CalcType = "tmb" | "macros" | "bf" | null;

const Calculators = () => {
  const [activeCalc, setActiveCalc] = useState<CalcType>(null);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("80");
  const [height, setHeight] = useState("178");
  const [age, setAge] = useState("28");
  const [activityLevel, setActivityLevel] = useState("1.55");
  const [goal, setGoal] = useState<"cut" | "maintain" | "bulk">("maintain");
  const [result, setResult] = useState<any>(null);

  const calculateTMB = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const al = parseFloat(activityLevel);
    let tmb: number;
    if (gender === "male") {
      tmb = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      tmb = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a;
    }
    const tdee = tmb * al;
    setResult({ tmb: Math.round(tmb), tdee: Math.round(tdee) });
  };

  const calculateMacros = () => {
    const w = parseFloat(weight);
    const al = parseFloat(activityLevel);
    const a = parseFloat(age);
    const h_val = parseFloat(height);
    let tmb: number;
    if (gender === "male") {
      tmb = 88.362 + 13.397 * w + 4.799 * h_val - 5.677 * a;
    } else {
      tmb = 447.593 + 9.247 * w + 3.098 * h_val - 4.33 * a;
    }
    let tdee = tmb * al;
    if (goal === "cut") tdee -= 500;
    if (goal === "bulk") tdee += 400;

    const protein = w * (goal === "bulk" ? 2.2 : 2.0);
    const fat = w * 1;
    const proteinCal = protein * 4;
    const fatCal = fat * 9;
    const carbCal = tdee - proteinCal - fatCal;
    const carbs = carbCal / 4;

    setResult({
      tdee: Math.round(tdee),
      protein: Math.round(protein),
      carbs: Math.round(Math.max(carbs, 50)),
      fat: Math.round(fat),
    });
  };

  const calculateBF = () => {
    // Navy method approximation
    const w = parseFloat(weight);
    const h_val = parseFloat(height);
    let bf: number;
    if (gender === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(90) + 0.15456 * Math.log10(h_val)) - 450;
    } else {
      bf = 495 / (1.29579 - 0.35004 * Math.log10(90 + 80) + 0.22100 * Math.log10(h_val)) - 450;
    }
    const leanMass = w * (1 - bf / 100);
    setResult({ bf: Math.round(bf * 10) / 10, leanMass: Math.round(leanMass * 10) / 10, fatMass: Math.round((w - leanMass) * 10) / 10 });
  };

  const calculators = [
    {
      id: "tmb" as CalcType,
      icon: <Flame size={24} className="text-primary" />,
      title: "Taxa Metabólica Basal",
      desc: "Calcule seu gasto calórico basal e TDEE",
    },
    {
      id: "macros" as CalcType,
      icon: <Beef size={24} className="text-accent" />,
      title: "Macronutrientes",
      desc: "Proteínas, carboidratos e gorduras por objetivo",
    },
    {
      id: "bf" as CalcType,
      icon: <Activity size={24} className="text-primary" />,
      title: "% Gordura Corporal",
      desc: "Estimativa de composição corporal",
    },
  ];

  const handleCalculate = () => {
    setResult(null);
    if (activeCalc === "tmb") calculateTMB();
    if (activeCalc === "macros") calculateMacros();
    if (activeCalc === "bf") calculateBF();
  };

  return (
    <AppLayout>
      <div className="px-4 pt-12 pb-4 max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center gap-2 mb-6">
            <Calculator size={24} className="text-primary" />
            <h1 className="text-2xl font-display font-bold text-foreground">
              Calculadoras
            </h1>
          </div>
        </motion.div>

        {!activeCalc ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => { setActiveCalc(calc.id); setResult(null); }}
                className="w-full glass-card rounded-2xl p-5 flex items-center gap-4 shadow-card hover:border-primary/20 transition-colors text-left"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  {calc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{calc.title}</h3>
                  <p className="text-xs text-muted-foreground">{calc.desc}</p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
              </button>
            ))}
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCalc}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <button
                onClick={() => { setActiveCalc(null); setResult(null); }}
                className="text-sm text-primary font-medium mb-2"
              >
                ← Voltar
              </button>

              {/* Gender */}
              <div className="flex gap-2">
                {(["male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors ${
                      gender === g
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {g === "male" ? "Masculino" : "Feminino"}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Peso (kg)", value: weight, set: setWeight },
                  { label: "Altura (cm)", value: height, set: setHeight },
                  { label: "Idade", value: age, set: setAge },
                ].map((input) => (
                  <div key={input.label}>
                    <label className="text-[10px] text-muted-foreground uppercase tracking-wide">
                      {input.label}
                    </label>
                    <input
                      type="number"
                      value={input.value}
                      onChange={(e) => input.set(e.target.value)}
                      className="w-full mt-1 bg-secondary text-foreground rounded-xl px-3 py-2.5 text-sm font-medium outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>

              {/* Activity Level */}
              <div>
                <label className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  Nível de Atividade
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full mt-1 bg-secondary text-foreground rounded-xl px-3 py-2.5 text-sm font-medium outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="1.2">Sedentário</option>
                  <option value="1.375">Levemente ativo</option>
                  <option value="1.55">Moderadamente ativo</option>
                  <option value="1.725">Muito ativo</option>
                  <option value="1.9">Extremamente ativo</option>
                </select>
              </div>

              {/* Goal (only for macros) */}
              {activeCalc === "macros" && (
                <div>
                  <label className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Objetivo
                  </label>
                  <div className="flex gap-2 mt-1">
                    {([
                      { id: "cut", label: "Cutting" },
                      { id: "maintain", label: "Manter" },
                      { id: "bulk", label: "Bulking" },
                    ] as const).map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setGoal(g.id)}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                          goal === g.id
                            ? "gradient-accent text-accent-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={handleCalculate}
                className="w-full gradient-primary text-primary-foreground font-semibold py-3 rounded-xl glow-primary transition-transform active:scale-95"
              >
                Calcular
              </button>

              {/* Results */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card rounded-2xl p-5 shadow-card space-y-3"
                >
                  <h3 className="text-sm font-semibold text-foreground">Resultado</h3>
                  {activeCalc === "tmb" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">TMB</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.tmb} kcal</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">TDEE</span>
                        <span className="text-lg font-display font-bold text-primary">{result.tdee} kcal</span>
                      </div>
                    </>
                  )}
                  {activeCalc === "macros" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1"><Flame size={14} /> Calorias</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.tdee} kcal</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1"><Beef size={14} /> Proteína</span>
                        <span className="text-lg font-display font-bold text-accent">{result.protein}g</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1"><Wheat size={14} /> Carboidratos</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.carbs}g</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1"><Droplets size={14} /> Gordura</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.fat}g</span>
                      </div>
                    </>
                  )}
                  {activeCalc === "bf" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Gordura Corporal</span>
                        <span className="text-lg font-display font-bold text-primary">{result.bf}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Massa Magra</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.leanMass} kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Massa Gorda</span>
                        <span className="text-lg font-display font-bold text-foreground">{result.fatMass} kg</span>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </AppLayout>
  );
};

export default Calculators;
