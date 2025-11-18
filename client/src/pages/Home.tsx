import { APP_TITLE } from "@/const";

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
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                backgroundColor: ['oklch(0.75 0.25 330)', 'oklch(0.75 0.25 180)', 'oklch(0.75 0.25 40)', 'oklch(0.75 0.25 60)'][Math.floor(Math.random() * 4)],
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 2 + 2 + 's'
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
                  src="/monday-character.png"
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
                  Meet <span className="text-primary font-bold">Monday</span> – the embodiment of that universal feeling when the weekend ends and reality hits. With a computer monitor for a head displaying perpetual exhaustion, Monday represents every developer, coder, and tech enthusiast facing the start of a new week.
                </p>
                <p className="leading-relaxed">
                  Dressed in a comfortable teal hoodie with arms crossed in classic defensive posture, Monday sits in vibrant magenta pants and cyan sneakers, surrounded by a cosmic tech atmosphere filled with neon-outlined terminals, vintage clocks, and the ever-present buzz of productivity (represented by the bee, of course).
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
                <h3 className="text-2xl font-bold mb-4 text-primary">PERSONALITY</h3>
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
                <h3 className="text-2xl font-bold mb-4 text-secondary">AESTHETIC</h3>
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
                <h3 className="text-2xl font-bold mb-4 text-primary">ENVIRONMENT</h3>
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

        {/* Quote Section */}
        <section className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-12 shadow-2xl shadow-primary/30">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 italic">
                "Every Monday is a fresh compile. Sometimes it fails, but we debug and try again."
              </blockquote>
              <p className="text-xl text-primary font-bold">— Monday</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container py-12 text-center border-t border-border/50">
          <p className="text-muted-foreground">
            {APP_TITLE} © {new Date().getFullYear()} • A character born from the universal Monday mood
          </p>
        </footer>
      </div>
    </div>
  );
}
