import { APP_TITLE } from "@/const";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Life phases data
const lifePhases = [
  {
    id: 1,
    title: "NEWBORN",
    age: "0-1 years",
    image: "/monday/monday-newborn.png",
    description:
      "The beginning of the journey. Even as a newborn, Monday already had that characteristic monitor head displaying the universal '404: Sleep Not Found' error.",
    color: "oklch(0.75 0.25 180)", // cyan
    accentColor: "primary",
  },
  {
    id: 2,
    title: "TODDLER",
    age: "1-3 years",
    image: "/monday/monday-toddler.png",
    description:
      "Learning to walk and debug at the same time. Those early steps were more like random memory leaks, but adorable nonetheless.",
    color: "oklch(0.75 0.25 330)", // magenta
    accentColor: "secondary",
  },
  {
    id: 3,
    title: "CHILD",
    age: "4-11 years",
    image: "/monday/monday-child.png",
    description:
      "The curious phase. Constantly asking 'Why?' and 'How does this work?' - questions that would shape Monday's future as a tech enthusiast.",
    color: "oklch(0.75 0.25 40)", // yellow
    accentColor: "accent",
  },
  {
    id: 4,
    title: "TEEN",
    age: "12-17 years",
    image: "/monday/monday-teen.png",
    description:
      "The rebellious years. Discovered indie games, open source, and the art of procrastination. Also learned that coffee is not just a beverage, it's a lifestyle.",
    color: "oklch(0.75 0.25 60)", // orange
    accentColor: "primary",
  },
  {
    id: 5,
    title: "YOUNG ADULT",
    age: "18-25 years",
    image: "/monday/monday-young-adult.png",
    description:
      "College days and first jobs. Mastered the art of turning coffee into code. Realized that 'just one more commit' is a lie we tell ourselves.",
    color: "oklch(0.75 0.25 180)", // cyan
    accentColor: "secondary",
  },
  {
    id: 6,
    title: "PRESENT DAY",
    age: "26+ years",
    image: "/monday/monday-character.png",
    description:
      "The final form (so far). A seasoned developer who knows that the best code is the code that works on Monday morning. Still powered by coffee and determination.",
    color: "oklch(0.75 0.25 330)", // magenta
    accentColor: "accent",
  },
];

function LifePhasesTimeline() {
  const [currentPhase, setCurrentPhase] = useState(0);

  const goToPhase = (index: number) => {
    setCurrentPhase(index);
  };

  const nextPhase = () => {
    setCurrentPhase(prev => (prev + 1) % lifePhases.length);
  };

  const prevPhase = () => {
    setCurrentPhase(prev => (prev - 1 + lifePhases.length) % lifePhases.length);
  };

  const phase = lifePhases[currentPhase];

  return (
    <section className="container py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-foreground">
          LIFE PHASES
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Journey through Monday's evolution from newborn to present day
        </p>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            {lifePhases.map((p, index) => (
              <button
                key={p.id}
                onClick={() => goToPhase(index)}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-2">
                  {/* Timeline dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      currentPhase === index
                        ? `bg-${p.accentColor} border-${p.accentColor} scale-150`
                        : "bg-background border-muted-foreground hover:border-primary"
                    }`}
                  />

                  {/* Timeline label */}
                  <span
                    className={`text-xs font-bold transition-all duration-300 ${
                      currentPhase === index
                        ? ""
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                    style={currentPhase === index ? { color: p.color } : undefined}
                  >
                    {p.title}
                  </span>
                </div>

                {/* Connecting line */}
                {index < lifePhases.length - 1 && (
                  <div className="absolute top-2 left-full w-8 md:w-16 h-0.5 bg-border -translate-y-1/2" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Phase Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div
                  className="absolute inset-0 blur-3xl rounded-full opacity-30"
                  style={{ backgroundColor: phase.color }}
                />
                <div
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4"
                  style={{ borderColor: phase.color }}
                >
                  <img
                    src={phase.image}
                    alt={`Monday - ${phase.title}`}
                    className="w-full h-auto"
                    onError={e => {
                      console.error(`Failed to load image: ${phase.image}`);
                      e.currentTarget.src = "/monday/monday-character.png"; // fallback
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <div
                    className="text-sm font-bold mb-2"
                    style={{ color: phase.color }}
                  >
                    {phase.age}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${((currentPhase + 1) / lifePhases.length) * 100}%`,
                        backgroundColor: phase.color,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground">
                    {currentPhase + 1} / {lifePhases.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevPhase}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/50 hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              aria-label="Previous phase"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhase}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary/50 hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              aria-label="Next phase"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic starry background */}
      <div className="fixed inset-0 bg-background">
        <div className="absolute inset-0 opacity-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                backgroundColor: [
                  "oklch(0.75 0.25 330)",
                  "oklch(0.75 0.25 180)",
                  "oklch(0.75 0.25 40)",
                  "oklch(0.75 0.25 60)",
                ][Math.floor(Math.random() * 4)],
                animationDelay: Math.random() * 3 + "s",
                animationDuration: Math.random() * 2 + 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Character Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img
                  src="/monday/monday-character.png"
                  alt="Monday Character"
                  className="relative z-10 w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-primary/50 border-4 border-primary/50"
                />
              </div>
            </div>

            {/* Right: Character Info */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tight">
                MONDAY
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground">
                <p className="leading-relaxed">
                  Meet <span className="text-primary font-bold">Monday</span> –
                  the embodiment of that universal feeling when the weekend ends
                  and reality hits. With a computer monitor for a head
                  displaying perpetual exhaustion, Monday represents every
                  developer, coder, and tech enthusiast facing the start of a
                  new week.
                </p>
                <p className="leading-relaxed">
                  Dressed in a comfortable teal hoodie with arms crossed in
                  classic defensive posture, Monday sits in vibrant magenta
                  pants and cyan sneakers, surrounded by a cosmic tech
                  atmosphere filled with neon-outlined terminals, vintage
                  clocks, and the ever-present buzz of productivity (represented
                  by the bee, of course).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Character Details Section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground">
              CHARACTER PROFILE
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Personality Card */}
              <div className="bg-card border-2 border-primary/50 rounded-xl p-8 shadow-lg shadow-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  PERSONALITY
                </h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Perpetually tired but always shows up</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Grumpy exterior, reliable core</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Powered by coffee and determination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Expert at existential shell scripts</span>
                  </li>
                </ul>
              </div>

              {/* Aesthetic Card */}
              <div className="bg-card border-2 border-secondary/50 rounded-xl p-8 shadow-lg shadow-secondary/20">
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  AESTHETIC
                </h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▸</span>
                    <span>Retro 80s/90s cyberpunk vibes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▸</span>
                    <span>Vibrant neon color palette</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▸</span>
                    <span>Heavy grain texture overlay</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">▸</span>
                    <span>Cosmic tech atmosphere</span>
                  </li>
                </ul>
              </div>

              {/* Style Card */}
              <div className="bg-card border-2 border-accent/50 rounded-xl p-8 shadow-lg shadow-accent/20">
                <h3 className="text-2xl font-bold mb-4 text-accent">STYLE</h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Teal hoodie (comfort first)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Magenta pants (bold statement)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Cyan sneakers (ready to move)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Arms crossed (defensive mode)</span>
                  </li>
                </ul>
              </div>

              {/* Environment Card */}
              <div className="bg-card border-2 border-primary/50 rounded-xl p-8 shadow-lg shadow-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  ENVIRONMENT
                </h3>
                <ul className="space-y-3 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Starry cosmic background</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Vintage clock with bee companion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Terminal screens showing code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">▸</span>
                    <span>Geometric neon tech elements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Life Phases Timeline Section */}
        <LifePhasesTimeline />

        {/* Quote Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-12 shadow-2xl shadow-primary/30">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 italic">
                "Every Monday is a fresh compile. Sometimes it fails, but we
                debug and try again."
              </blockquote>
              <p className="text-xl text-primary font-bold">— Monday</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container py-12 text-center border-t border-border/50">
          <p className="text-muted-foreground">
            {APP_TITLE} © {new Date().getFullYear()} • A character born from
            the universal Monday mood
          </p>
        </footer>
      </div>
    </div>
  );
}
