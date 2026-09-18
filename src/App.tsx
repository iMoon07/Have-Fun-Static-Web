import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import NotFound from './components/NotFound';
import {
  Shield,
  ShieldAlert,
  ChevronRight,
  Search,
  Lock,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

import {
  students,
  owaspData,
  mitreTactics,
  faqData,
  navigation,
  rolesData,
  systemStats,
  missionCategories,
  briefingData,
  dossierData
} from './data/cyberData';
import {
  containerVariants,
  itemVariants,
  sectionSlideVariants
} from './utils/animations';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.06,72.06,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14h0C130.46,50.63,121.49,27.05,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.17-12.74,11.44-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.17-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);



const FaqSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = ["ALL", "NEW OPERATIVE", "CAREER OPS", "OPERATIONAL", "TECHNICAL", "FIELD SUPPORT"];

  const filteredFaq = faqData.filter(item => {
    const matchesSearch = item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase()) ||
      item.talk.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="py-24 bg-[#010101] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.01] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* THEMED HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-luxRed/20" />
            <Shield className="w-3 h-3 text-luxRed" />
            <span className="font-poppins font-black text-xs text-luxRed tracking-widest uppercase underline underline-offset-8">Intelligence Dossier</span>
            <div className="w-8 h-px bg-luxRed/20" />
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter italic">
            TACTICAL <span className="text-luxRed not-italic">INTEL HUB</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* TERMINAL-STYLE SEARCH & FILTER */}
          <div className="mb-16 space-y-6">
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-luxRed font-poppins font-bold text-sm">{'>'}</span>
                <Search className="w-3.5 h-3.5 text-gray-700 group-focus-within:text-luxRed transition-colors" />
              </div>
              <input
                type="text"
                placeholder="EXECUTE_INTEL_QUERY..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-16 pr-6 font-poppins text-sm text-white placeholder:text-gray-800 outline-none focus:border-luxRed/30 transition-all focus:bg-black/60"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md border font-mono text-[8px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                      ? 'bg-luxRed border-luxRed text-white shadow-glow-red'
                      : 'bg-white/5 border-white/5 text-gray-500 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ACCORDION LIST - DOSSIER STYLE */}
          <div className="space-y-3">
            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, idx) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`relative transition-all duration-300 border ${openIndex === idx ? 'bg-white/[0.02] border-white/10' : 'bg-transparent border-transparent hover:border-white/5'
                    }`}
                >
                  {/* TARGET BRACKETS ON ACTIVE */}
                  {openIndex === idx && (
                    <>
                      <div className="hud-bracket hud-bracket-tl scale-75 opacity-40" />
                      <div className="hud-bracket hud-bracket-br scale-75 opacity-40" />
                    </>
                  )}

                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-1 h-8 transition-all duration-500 ${openIndex === idx ? 'bg-luxRed shadow-glow-red' : 'bg-white/5'}`} />
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] text-gray-800 group-hover:text-luxRed/50 transition-colors uppercase font-bold tracking-widest mb-1">
                          Ref: 0{idx + 1} // {item.category}
                        </span>
                        <h4 className={`text-base md:text-xl font-orbitron font-black uppercase tracking-tighter transition-all duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'
                          }`}>
                          {item.q}
                        </h4>
                      </div>
                    </div>
                    <div className={`transition-all duration-500 ${openIndex === idx ? 'text-luxRed rotate-90' : 'text-gray-800 group-hover:text-gray-400'}`}>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-12 md:px-24 pb-12 space-y-10">
                          <div className="space-y-4">
                            <div className="text-[7px] font-mono font-bold text-luxRed tracking-[0.4em] uppercase mb-2">Analysis_Output:</div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-bold uppercase max-w-2xl border-l border-white/10 pl-6">
                              {item.a}
                            </p>
                          </div>

                          <div className="pt-8 border-t border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                              <ShieldAlert className="w-3 h-3 text-luxRed" />
                              <span className="text-[7px] font-mono font-bold text-gray-600 tracking-[0.4em] uppercase font-black italic">Straight_Talk_Transmission</span>
                            </div>
                            <p className="text-xl md:text-3xl font-orbitron font-black text-white italic tracking-tighter leading-tight max-w-3xl">
                              "{item.talk}"
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="py-24 text-center border border-dashed border-white/10 rounded-lg">
                <p className="font-mono text-[10px] text-gray-700 uppercase tracking-[0.5em]">No Intelligence Correlation Found / Reset Filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTS ---

// ThreatIntelCenter removed

const OwaspSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
    {owaspData.map((item, i) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
        whileHover={{ y: -8 }}
        className="relative group h-full"
      >
        <div className={`h-full glass-dark p-5 rounded-2xl border transition-all flex flex-col ${item.risk === 'Critical' ? 'border-luxRed/30 hover:border-luxRed shadow-[0_0_20px_rgba(255,0,60,0.1)]' :
          item.risk === 'High' ? 'border-luxRed/20 hover:border-luxRed/50' : 'border-white/5 hover:border-white/20'
          }`}>
          {/* Brackets */}
          <div className="hud-bracket hud-bracket-tl opacity-10 group-hover:opacity-60" />
          <div className="hud-bracket hud-bracket-br opacity-10 group-hover:opacity-60" />

          <div className="flex justify-between items-start mb-6">
            <span className="font-orbitron font-black text-luxRed text-xl tracking-tighter">{item.id}</span>
            <div className={`px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-widest leading-none ${item.risk === 'Critical' ? 'bg-luxRed text-white shadow-[0_0_10px_rgba(255,0,60,0.5)]' :
              item.risk === 'High' ? 'bg-luxRed/20 text-luxRed border border-luxRed/30' :
                'bg-white/5 text-gray-500 border border-white/10'
              }`}>
              {item.risk}
            </div>
          </div>

          <h4 className="font-orbitron font-black text-[12px] text-white mb-6 leading-tight uppercase group-hover:text-luxRed transition-colors">
            {item.category}
          </h4>

          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8px] font-mono font-bold uppercase">
              <span className="text-gray-500">CWE_LINK</span>
              <span className="text-white">{item.cwes} CWEs</span>
            </div>
            <div className="flex justify-between items-center text-[8px] font-mono font-bold uppercase">
              <span className="text-gray-500">PREVALENCE</span>
              <span className={`${item.risk === 'Critical' ? 'text-luxRed' : 'text-white'}`}>{item.prevalence}</span>
            </div>
          </div>

          {/* Scanning Line on hover */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-luxRed to-transparent animate-scan" style={{ height: '2px' }} />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const AttackSurfaceHub = () => {
  const [activeFramework, setActiveFramework] = useState<'owasp' | 'mitre'>('owasp');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionSlideVariants}
      id="methodology"
      className="relative space-y-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[1px] bg-luxRed" />
            <span className="font-orbitron font-black text-[10px] text-luxRed tracking-[0.5em] uppercase">Tactical Methodology</span>
          </div>
          <h3 className="text-4xl font-orbitron font-black text-white uppercase tracking-tighter">
            ATTACK <span className="text-luxRed italic">SURFACE</span>
          </h3>
          <p className="text-gray-500 font-mono text-[9px] uppercase font-bold tracking-widest mt-2">
            Integrasi metodologi global untuk standar investigasi industri.
          </p>
        </div>

        {/* FRAMEWORK SWITCHER HUD */}
        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-luxRed/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <button
            onClick={() => setActiveFramework('owasp')}
            className={`relative z-10 px-6 py-2.5 rounded-xl font-orbitron font-black text-[9px] tracking-[0.3em] uppercase transition-all ${activeFramework === 'owasp'
              ? 'bg-luxRed text-white shadow-glow-red'
              : 'text-gray-600 hover:text-gray-300'
              }`}
          >
            OWASP TOP 10
          </button>
          <button
            onClick={() => setActiveFramework('mitre')}
            className={`relative z-10 px-6 py-2.5 rounded-xl font-orbitron font-black text-[9px] tracking-[0.3em] uppercase transition-all ${activeFramework === 'mitre'
              ? 'bg-luxRed text-white shadow-glow-red'
              : 'text-gray-600 hover:text-gray-300'
              }`}
          >
            MITRE ATT&CK
          </button>
        </div>
      </div>

      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          {activeFramework === 'owasp' ? (
            <motion.div
              key="owasp"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-gray-400 uppercase font-black tracking-widest">
                  MATRIX_V: 2025_REF
                </div>
              </div>
              <OwaspSection />
            </motion.div>
          ) : (
            <motion.div
              key="mitre"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <MitreMap />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const MitreMap = () => {
  const [activeTactic, setActiveTactic] = useState(0);
  const currentTactic = mitreTactics[activeTactic];

  return (
    <div className="flex flex-col gap-6 lg:gap-10 items-stretch">
      {/* TACTICAL COMMAND DOCK - TOP GRID ON DESKTOP */}
      <div className="w-full space-y-4">
        <div className="bg-[#050505]/40 border border-white/5 p-4 md:p-6 rounded-[2rem] relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxRed/30 to-transparent" />
          <div className="flex items-center justify-between mb-5 px-2">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-luxRed shadow-glow-red" />
              <span className="font-orbitron font-black text-[10px] text-white tracking-[0.4em] uppercase italic">Sector_Matrix // MITRE_V15</span>
            </div>
            <div className="text-[7px] font-mono text-luxRed/60 animate-pulse uppercase tracking-[0.2em] hidden md:block">
              INTELLIGENCE_LAYER: SYNCHRONIZED
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {mitreTactics.map((tactic, i) => (
              <button
                key={i}
                onClick={() => setActiveTactic(i)}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all relative group overflow-hidden ${activeTactic === i
                  ? 'bg-luxRed border-luxRed shadow-glow-red text-white'
                  : 'bg-white/[0.02] border-white/5 text-gray-500 hover:bg-white/5 hover:border-white/20'
                  }`}
              >
                {/* Micro-glow on active */}
                {activeTactic === i && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                )}
                
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-colors ${activeTactic === i ? 'bg-white/10 border-white/20' : 'bg-luxRed/10 border-luxRed/20 rotate-45 group-hover:rotate-0'}`}>
                  <tactic.icon className={`w-4 h-4 transition-transform ${activeTactic === i ? 'text-white scale-110' : 'text-luxRed -rotate-45 group-hover:rotate-0'}`} />
                </div>
                <div className="flex flex-col items-start leading-none gap-1 overflow-hidden">
                  <span className="text-[9px] font-orbitron font-black uppercase tracking-tight truncate w-full">{tactic.name}</span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1 h-1 rounded-full ${activeTactic === i ? 'bg-white' : 'bg-luxRed/40'}`} />
                    <span className="text-[6px] font-mono font-bold opacity-60 uppercase">{tactic.techniques.length} VCTRS</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE INTELLIGENCE CONSOLE - DOSSIERS */}
      <div className="w-full">
        <div className="relative bg-[#050505] rounded-[3rem] border border-white/5 p-6 md:p-12 overflow-hidden min-h-[600px] shadow-2xl">
          <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
          <div className="scanline opacity-[0.05]" />

          {/* HUD BRACKETS */}
          <div className="hud-bracket hud-bracket-tl opacity-30 border-luxRed/40" />
          <div className="hud-bracket hud-bracket-br opacity-30 border-luxRed/40" />

          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 border-b border-white/5 pb-11 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div 
                  key={activeTactic}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="px-4 py-1.5 bg-luxRed text-white text-[9px] font-orbitron font-black rounded-lg tracking-[0.3em] uppercase shadow-glow-red"
                >
                  {currentTactic.name}
                </motion.div>
                <div className="w-px h-5 bg-white/10" />
                <span className="text-[9px] font-mono font-bold text-gray-600 uppercase tracking-[0.4em]">Sector_Logic_v15.2</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-tighter italic leading-none">
                TACTICAL <span className="text-luxRed not-italic">INTELLIGENCE</span>
              </h3>
            </div>

            <div className="space-y-3 text-right">
              <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-[0.3em] leading-none mb-1">Scanning Sector Nodes...</div>
              <div className="h-2 w-48 bg-white/5 border border-white/10 rounded-full overflow-hidden p-0.5">
                <motion.div
                  key={activeTactic}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className="h-full bg-luxRed shadow-glow-red rounded-full"
                />
              </div>
            </div>
          </div>

          {/* TECHNIQUE GRID - WRAPPED IN SINGLE MOTION.DIV TO FIX ANIMATEPRESENCE BUG */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTactic}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 relative z-10"
            >
              {currentTactic.techniques.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 0, 60, 0.04)', borderColor: 'rgba(255, 0, 60, 0.3)' }}
                  className="p-5 bg-white/[0.01] border border-white/10 rounded-2xl transition-all group/tech relative flex flex-col justify-between min-h-[150px] shadow-lg"
                >
                  <div className="scanline opacity-0 group-hover/tech:opacity-[0.05]" />
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[8px] font-mono font-black text-luxRed/60 tracking-[0.2em] uppercase">T#100{idx}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-luxRed/20 group-hover/tech:bg-luxRed shadow-glow-red transition-all" />
                    </div>
                    <h4 className="text-[11px] md:text-[13px] font-orbitron font-black text-white group-hover/tech:text-luxRed transition-colors uppercase leading-tight tracking-tight italic">
                      {tech}
                    </h4>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5 flex-1 max-w-[80px]">
                      {[1, 2, 3, 4].map((bar) => (
                        <div
                          key={bar}
                          className={`h-1 flex-1 rounded-full transition-all ${bar <= (idx % 3 + 2) ? 'bg-luxRed shadow-glow-red' : 'bg-white/10'}`}
                        />
                      ))}
                    </div>
                    <ChevronRight size={14} className="text-gray-800 group-hover/tech:text-luxRed transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* BG LIGHTING */}
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-luxRed/5 blur-[180px] -z-10 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // DELAY TO ALLOW MENU TO CLOSE BEFORE SCROLL (Solves Android stutter)
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const navItems = navigation;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[500] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'py-4 bg-[#010101] border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0 relative"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center p-1.5 bg-white/5 rounded-xl border border-white/10 shadow-glow-red/10 overflow-hidden shrink-0">
            <img src="/images/logo.webp" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none text-left min-w-0">
            <span className="font-orbitron font-black text-[clamp(10px,4vw,1.125rem)] tracking-tighter text-white uppercase whitespace-nowrap">
              PENJELAJAH <span className="text-luxRed italic">CYBERSECURITY</span>
            </span>
            <span className="text-[clamp(6px,2.5vw,8px)] font-extrabold tracking-[0.2em] md:tracking-[0.3em] text-gray-500 mt-0.5 uppercase whitespace-nowrap italic">TACTICAL CYBER OPERATIONS</span>
          </div>
        </motion.div>

        {/* Desktop Nav - Tight fit for large screens */}
        <nav className="hidden 2xl:flex gap-4 font-orbitron font-black text-[8px] tracking-[0.1em] text-white uppercase">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`transition-all relative group py-2 ${activeSection === item.id ? 'text-luxRed' : 'text-gray-400 hover:text-luxRed'}`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-luxRed rounded-full shadow-glow-red"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 relative">
          <div className="hidden sm:flex flex-col items-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6282283872359?text=Halo%20Penjelajah%20Cybersecurity,%20saya%20ingin%20konsultasi%20free%20mengenai%20operasi..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-luxRed text-white px-8 py-3 rounded-full font-orbitron font-black text-[10px] tracking-[0.3em] shadow-xl shadow-luxRed/30 uppercase flex flex-col items-center leading-none"
            >
              SIAP TEMPUR
              <span className="text-[7px] mt-1 opacity-70 tracking-widest font-mono">FREE CONSULTATION</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="2xl:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white hover:text-luxRed transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - DROPDOWN TACTICAL */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="2xl:hidden absolute top-full left-0 w-full bg-[#010101] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all border ${activeSection === item.id
                      ? 'bg-luxRed/10 border-luxRed text-luxRed'
                      : 'bg-white/[0.02] border-transparent text-gray-500 hover:text-white'
                    }`}
                >
                  <span className="font-orbitron font-black text-sm uppercase tracking-widest">{item.name}</span>
                  <span className="font-mono text-[10px] opacity-30">0{idx + 1}</span>
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                <a
                  href="https://wa.me/6282283872359?text=Halo%20Penjelajah%20Cybersecurity,%20saya%20ingin%20konsultasi%20free%20mengenai%20operasi..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-luxRed text-white p-4 rounded-xl flex flex-col items-center justify-center gap-1 font-orbitron font-black text-[10px] uppercase tracking-widest hover:bg-luxRed/80 transition-all border border-luxRed/20 shadow-lg shadow-luxRed/20"
                >
                  SIAP TEMPUR
                  <span className="text-[7px] opacity-70 tracking-[0.2em] font-mono">FREE CONSULTATION</span>
                </a>
                <a
                  href="https://discord.gg/bpHekcRqxR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 text-white p-4 rounded-xl flex items-center justify-center gap-2 font-orbitron font-black text-[9px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
                >
                  JOIN DISCORD <DiscordIcon className="w-4 h-4 text-luxRed" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};


const CustomCursor = ({ isBlue = false }: { isBlue?: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const theme = {
    accent: isBlue ? "bg-blue-500" : "bg-luxRed",
    border: isBlue ? "border-blue-500" : "border-luxRed",
    text: isBlue ? "text-blue-500" : "text-luxRed",
    glow: isBlue ? "shadow-[0_0_12px_#3B82F6]" : "shadow-[0_0_12px_#FF003C]",
    hex: isBlue ? "#3B82F6" : "#FF003C",
    borderDashed: isBlue ? "border-blue-500/20" : "border-luxRed/20",
    borderDotted: isBlue ? "border-blue-500/40" : "border-luxRed/40",
    scanline: isBlue ? "via-blue-500/40" : "via-luxRed/40"
  };

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.floor(e.clientX), y: Math.floor(e.clientY) });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden hidden lg:block">
      {/* HUD DOT (Center Focus) */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        className={`fixed top-0 left-0 w-2 h-2 ${theme.accent} rounded-full ${theme.glow}`}
      />

      {/* CINEMATIC SCANNING RINGS */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        animate={{ rotate: 360, scale: isHovering ? 1.4 : 1 }}
        transition={{ rotate: { repeat: Infinity, duration: 8, ease: "linear" } }}
        className={`fixed top-0 left-0 w-16 h-16 border ${theme.borderDashed} border-dashed rounded-full`}
      />

      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        animate={{ rotate: -360, scale: isHovering ? 0.8 : 1 }}
        transition={{ rotate: { repeat: Infinity, duration: 3, ease: "linear" } }}
        className={`fixed top-0 left-0 w-10 h-10 border ${theme.borderDotted} border-dotted rounded-full`}
      />

      {/* SNIPER CROSSHAIR SHORT LINES */}
      {[0, 90, 180, 270].map((angle) => (
        <motion.div
          key={angle}
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            rotate: angle
          }}
          className={`fixed top-0 left-0 w-[1px] h-3 ${isBlue ? 'bg-blue-500/60' : 'bg-luxRed/60'} origin-top mt-4 transition-colors duration-500`}
        />
      ))}

      {/* DYNAMIC TRACKING BRACKETS */}
      <motion.div
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isHovering ? 30 : 60,
          height: isHovering ? 30 : 60,
          opacity: isHovering ? 1 : 0.3
        }}
        className="fixed top-0 left-0 pointer-events-none"
      >
        <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${theme.border} transition-colors duration-500`} />
        <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${theme.border} transition-colors duration-500`} />
        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${theme.border} transition-colors duration-500`} />
        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${theme.border} transition-colors duration-500`} />
      </motion.div>

      {/* LIVE TELEMETRY DATA */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '40px', translateY: '-40px' }}
        className={`fixed top-0 left-0 flex flex-col font-mono text-[7px] ${theme.text} font-bold pointer-events-none italic transition-colors duration-500`}
      >
        <div className="flex gap-2">
          <span className="opacity-50">COORD_X:</span>
          <span>{coords.x}.00</span>
        </div>
        <div className="flex gap-2">
          <span className="opacity-50">COORD_Y:</span>
          <span>{coords.y}.00</span>
        </div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="mt-1"
        >
          {isHovering ? "STATUS: TARGET_LOCKED" : "STATUS: SCANNING_ENV..."}
        </motion.div>
      </motion.div>

      {/* SCANLINE SWEEP EFFECT */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        className={`fixed top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-transparent ${theme.scanline} to-transparent pointer-events-none opacity-20`}
      />
    </div>
  );
};

const CommanderSection = () => (
  <section id="commander" className="py-24 lg:py-40 bg-[#010101] relative overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-luxRed/5 blur-[150px] -z-10" />

    <div className="max-w-[1400px] mx-auto px-6">
      {/* Mobile Header - Always at the very top */}
      <div className="flex lg:hidden items-center gap-4 mb-8">
        <div className="w-2 h-2 bg-luxRed shadow-glow-red" />
        <span className="font-orbitron font-black text-xs text-luxRed tracking-[0.4em] uppercase">Siapa Commander Kalian?</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto lg:max-w-none order-1 lg:order-1"
        >
          <div className="absolute inset-0 bg-luxRed/20 blur-[100px] rounded-full -z-10 opacity-30" />
          <div className="relative group">
            <div className="hud-bracket hud-bracket-tl" />
            <div className="hud-bracket hud-bracket-br" />
            <img
              src="/images/commander.webp"
              alt="Commander Raja Muhammad Kurnia Setyawan"
              className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left order-2 lg:order-2"
        >
          <div className="hidden lg:flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-luxRed shadow-glow-red" />
            <span className="font-poppins font-black text-sm text-luxRed tracking-widest uppercase">Siapa Commander Kalian?</span>
          </div>

          <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-orbitron font-black text-white leading-[0.9] mb-4 uppercase tracking-tighter">
            RAJA MUHAMMAD <br />
            <span className="text-luxRed italic">KURNIA SETYAWAN</span>
          </h2>

          <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-10">
            THREAT OPERATIONS LEAD
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 text-6xl text-luxRed/20 font-serif leading-none">“</div>
            <p className="text-lg md:text-2xl font-bold text-gray-100 italic leading-relaxed uppercase tracking-tight max-w-lg mb-8 md:mb-12">
              Satu-satunya cara melatih insting pertahanan adalah dengan ancaman nyata.
            </p>
            <div className="absolute -right-6 bottom-0 text-6xl text-luxRed/20 font-serif leading-none rotate-180">“</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
            <div className="text-left">
              <div className="text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-2">Authorization</div>
              <div className="bg-green-500/10 text-green-500 border border-green-500/30 px-2 py-1 md:px-3 md:py-1.5 rounded text-[8px] md:text-[9px] font-black uppercase tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">Level_High</div>
            </div>
            <div className="text-left">
              <div className="text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-2">Status</div>
              <div className="bg-luxRed/10 text-luxRed border border-luxRed/30 px-2 py-1 md:px-3 md:py-1.5 rounded text-[8px] md:text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Active_24/7</div>
            </div>
            <div className="text-left">
              <div className="text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-2">Secure Link</div>
              <a
                href="https://www.linkedin.com/in/imoon07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-luxRed px-3 py-1 md:px-4 md:py-1.5 rounded text-xs font-poppins font-black uppercase tracking-widest transition-all group whitespace-nowrap"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-luxRed transition-colors" />
                <span className="text-gray-400 group-hover:text-white transition-colors uppercase">LINKEDIN</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PriceCard = ({ title, price, features, isActivated = false }: { title: string, price: string, features: string[], isActivated?: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [internalHover, setInternalHover] = useState(false);
  const active = isActivated || internalHover;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // DYNAMIC THEME SWITCHER
  const theme = {
    accent: active ? "blue-500" : "luxRed",
    accentHex: active ? "#3B82F6" : "#FF003C",
    shadow: active ? "shadow-[0_0_80px_rgba(59,130,246,0.15)]" : "shadow-[0_0_50px_rgba(255,0,60,0.1)]",
    bgGradient: active
      ? "from-blue-500/30 via-blue-900/10 to-transparent"
      : "from-luxRed/20 via-luxRed/5 to-transparent",
    border: active ? "border-blue-500/40" : "border-luxRed/20",
    textAccent: active ? "text-blue-400" : "text-luxRed",
    check: active ? "bg-blue-500" : "bg-luxRed/40"
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
      whileHover={{ y: -10, scale: 1.01 }}
      className={`group relative h-full flex flex-col p-[1px] transition-all duration-500 ${theme.shadow}`}
    >
      {/* ELITE HUD FRAME - POLYGON CUT */}
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${theme.bgGradient} scale-[1.01]`}
        style={{ clipPath: 'polygon(0% 60px, 60px 0%, 100% 0%, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0% 100%)' }}
      />

      {/* CORE CONTAINER */}
      <div
        className="relative bg-[#050505] overflow-hidden h-full flex flex-col p-8 md:p-14 border border-white/5"
        style={{ clipPath: 'polygon(1px 61px, 61px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 61px), calc(100% - 61px) calc(100% - 1px), 1px calc(100% - 1px))' }}
      >
        {/* TACTICAL OVERLAYS */}
        <div className="absolute inset-0 bg-circuitry opacity-[0.03] group-hover:opacity-[0.08] transition-opacity" />
        <div className="absolute inset-0 bg-cyber-mesh opacity-10 pointer-events-none" />

        {/* DYNAMIC SPOTLIGHT */}
        <motion.div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${spotlightX.get()}px ${spotlightY.get()}px, ${active ? 'rgba(59,130,246,0.08)' : 'rgba(255,0,60,0.05)'}, transparent 80%)`
          }}
        />

        {/* SIDE DATA STREAMS */}
        <div className="absolute top-0 right-3 bottom-0 w-4 overflow-hidden pointer-events-none opacity-10 hidden md:block">
          <div className="data-stream-v text-[6px] font-mono text-gray-700 tracking-widest leading-none animate-pulse">
            01010100 01100001 01100011 01110100 01101001 01100011 01100001 01101100
            01001001 01101110 01110100 01100101 01101100 01101100 01101001 01100111 01100101 01101110 01100011 01100101
          </div>
        </div>

        {/* BRACKET DECORATIONS */}
        <div className={`absolute top-8 left-8 w-12 h-12 border-t-[1px] border-l-[1px] ${theme.border} transition-colors duration-500`} />
        <div className={`absolute bottom-8 right-8 w-12 h-12 border-b-[1px] border-r-[1px] ${theme.border} transition-colors duration-500`} />

        <div className="relative z-10 flex flex-col h-full">
          {/* HEADER SECTION */}
          <div className="flex justify-between items-start mb-12">
            <div className="relative group/logo">
              <div className={`absolute -inset-6 blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-40 bg-${theme.accent}`} />
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-700 bg-white/[0.03] border border-white/10 group-hover:bg-active/10 relative backdrop-blur-sm`}>
                <img
                  src="/images/logo.webp"
                  alt="Icon"
                  className={`w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-700 ${active ? 'drop-shadow-[0_0_15px_#3B82F6] brightness-125' : 'drop-shadow-[0_0_10px_#FF003C] grayscale opacity-50'}`}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#050505] flex items-center justify-center rounded-tl-lg border-t border-l border-white/10">
                  <div className={`w-2 h-2 rounded-full bg-${theme.accent} shadow-[0_0_8px_${theme.accentHex}] transition-all duration-500`} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 pt-2">
              <div className="text-[8px] font-mono font-black text-gray-600 uppercase tracking-[0.3em]">Status: Operational</div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-4 h-1 rounded-full transition-all duration-500 ${i <= 4 ? `bg-${theme.accent}` : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* MAIN TITLES */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-3 h-3 bg-${theme.accent} flex-shrink-0 transition-colors duration-500`} />
              <div className={`h-[1px] flex-1 bg-gradient-to-r from-${theme.accent}/50 to-transparent transition-all duration-500`} />
            </div>
            <h3 className="font-orbitron font-black text-3xl md:text-5xl uppercase tracking-tighter text-white transition-all duration-500 leading-none italic">
              {title}
            </h3>
            <div className="text-[10px] font-mono font-bold text-gray-500 mt-4 uppercase tracking-[0.4em] flex items-center gap-3">
              <span className={`animate-pulse ${theme.textAccent}`}>▶</span> {active ? "SYSTEM_ACTIVE_READY" : "CRYPTO_AUTHORIZATION_REQUIRED"}
            </div>
          </div>

          {/* PRICING BLOCK - "DIGITAL BADGE" STYLE */}
          <div className="relative mb-12 group/price scale-105">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            <div className="relative bg-white/[0.01] border-y border-white/5 py-10 flex flex-col items-center justify-center gap-2 overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${theme.border}`} />
              <div className={`absolute right-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${theme.border}`} />

              <span className="text-xs font-poppins font-black text-gray-600 tracking-widest mb-2">OPERATIONAL_COST</span>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-7xl font-orbitron font-black text-white transition-all duration-500 tracking-tighter">
                  {price}K
                </span>
                <span className={`${theme.textAccent} font-bold text-xs transition-colors duration-500`}>IDR</span>
              </div>
              <div className="text-xs font-poppins text-gray-600 mt-2 tracking-widest uppercase">PERMANENT_MISSION_ACCESS</div>
            </div>
          </div>

          {/* FEATURES LIST */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12 flex-1">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-4 group/item">
                <div className="relative flex items-center justify-center flex-shrink-0 w-5 h-5">
                  <div className={`absolute inset-0 border border-white/10 transition-all rotate-45 ${active ? `border-${theme.accent}/40` : ''}`} />
                  <div className={`w-1.5 h-1.5 transition-all shadow-none ${theme.check} ${active ? `shadow-[0_0_10px_${theme.accentHex}]` : ''}`} />
                </div>
                <span className="font-mono font-bold text-gray-400 text-[11px] md:text-xs group-hover:text-white transition-colors uppercase tracking-tight">
                  {f}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </motion.div>
  );
};

const ParticipantCard = ({ name, imageUrl, linkedinUrl, role = "Verified_Operative" }: { name: string, imageUrl: string, linkedinUrl?: string, role?: string }) => (
  <motion.a
    href={linkedinUrl || "#"}
    target={linkedinUrl ? "_blank" : undefined}
    rel={linkedinUrl ? "noopener noreferrer" : undefined}
    variants={itemVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`block glass-dark border border-white/5 p-4 rounded-[2rem] transition-all group relative overflow-hidden ${linkedinUrl ? 'cursor-pointer hover:border-blue-500/30' : 'cursor-default'}`}
  >
    <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4 bg-white/5 border border-white/10">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* LinkedIn Badge Overlay */}
      {linkedinUrl && (
        <div className="absolute top-3 right-3 p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
          <LinkedinIcon className="w-3 h-3 text-white" />
        </div>
      )}
    </div>
    
    <div className="text-left px-2">
      <h4 className="font-orbitron font-black text-xs uppercase tracking-tighter text-white mb-1 leading-none group-hover:text-blue-400 transition-colors">
        {name}
      </h4>
      <div className={`text-[8px] tracking-[0.3em] font-black uppercase transition-colors font-mono ${linkedinUrl ? 'text-blue-500/60 group-hover:text-blue-400' : 'text-luxRed/60'}`}>
        {role} // 07
      </div>
    </div>

    {/* Subtle Hover Accent */}
    {linkedinUrl && (
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    )}
  </motion.a>
);

const Hero = () => {
  return (
    <section id="home" className="pt-48 pb-20 text-center px-6 bg-[#010101] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-luxRed/10 via-transparent to-transparent pointer-events-none" />

      {/* HUD ELEMENTS */}
      <div className="absolute top-40 left-10 w-32 h-32 opacity-30 pointer-events-none hidden lg:block">
        <div className="hud-bracket hud-bracket-tl" />
        <div className="hud-bracket hud-bracket-tr" />
        <div className="hud-bracket hud-bracket-bl" />
        <div className="hud-bracket hud-bracket-br" />
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[8px] text-luxRed font-bold">GRID_A1</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 py-2 px-6 rounded-full bg-white/5 border border-white/10 shadow-2xl inline-flex items-center gap-3 backdrop-blur-md"
        >
          <div className="w-2 h-2 bg-luxRed rounded-full animate-ping" />
          <span className="text-white font-poppins font-black text-xs tracking-widest uppercase text-left">Sector 07 // Verified Intel</span>
        </motion.div>

        <h1 className="text-[clamp(2rem,10vw,5.5rem)] font-orbitron font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase text-center cyber-glitch">
          DOMINASI <br />
          <span className="bg-luxRed bg-clip-text text-transparent bg-gradient-to-r from-luxRed to-red-600 italic px-2">INSIDEN</span>
        </h1>

        <p className="text-base md:text-xl text-gray-100 font-bold max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight text-center px-4">
          Membahas case nyata langsung di labs. Belajar bersama Commander—setiap case di lapangan selalu berbeda. Siaga 24/7 mitigasi serangan tak terduga.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <a
              href="https://discord.gg/bpHekcRqxR"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center p-2 bg-white/5 rounded-xl border border-white/10 shadow-glow-red/20 shadow-[0_0_20px_rgba(255,0,60,0.15)] hover:border-luxRed transition-all group/logo"
            >
              <img src="/images/logo.webp" alt="Logo" className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform" />
            </a>
            <div className="text-center sm:text-left">
              <div className="font-poppins font-black text-xs text-white uppercase tracking-widest leading-none mb-1">740+ Active Operatives</div>
              <div className="text-[10px] font-bold text-luxRed uppercase tracking-widest font-black">Live on Discord</div>
            </div>
          </div>

          <div className="flex justify-center w-full px-4">
            <a
              href="https://discord.gg/bpHekcRqxR"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-luxRed text-white rounded-[1rem] font-poppins font-black text-sm tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-luxRed/30 uppercase flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">JOIN TACTICAL DISCORD</span>
              <DiscordIcon className="w-4 h-4 text-white relative z-10" />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};





const MissionBoard = () => {
  return (
    <section id="missions" className="py-32 md:py-48 bg-[#010101] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-luxRed/5 blur-[150px] -z-10 opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 border-b border-white/5 pb-10 mb-20">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-luxRed shadow-glow-red" />
              <span className="font-poppins font-black text-xs text-luxRed tracking-widest uppercase">OPERATIONAL_ROADMAP</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-orbitron font-black text-white uppercase tracking-tighter italic leading-none mb-6">
              TACTICAL <span className="text-luxRed not-italic">MISSIONS</span>
            </h2>
            <p className="text-gray-500 font-poppins text-xs uppercase font-bold tracking-widest max-w-xl leading-relaxed italic border-l-2 border-luxRed/30 pl-6">
              Integrasi kurikulum investigasi multi-platform: Windows, Linux, dan Web App. Bangun insting deteksi di setiap sektor infrastruktur.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 pb-2">
            <div className="text-xs font-poppins font-bold text-gray-500 uppercase tracking-widest leading-none">Scanning Infrastructure...</div>
            <div className="h-1.5 w-48 bg-white/5 border border-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-luxRed shadow-glow-red"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {missionCategories.map((cat, idx) => {
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#050505] border border-white/5 p-8 lg:p-12 transition-all duration-700 hover:border-luxRed transition-all overflow-hidden"
              >
                {/* HUD DECORATION */}
                <div className="hud-bracket hud-bracket-tl opacity-20 group-hover:opacity-60 transition-opacity" />
                <div className="hud-bracket hud-bracket-br opacity-20 group-hover:opacity-60 transition-opacity" />
                <div className="scanline opacity-[0.03] group-hover:opacity-[0.08]" />

                <div className="flex items-start justify-between mb-12">
                  <div className={`w-20 h-20 bg-white/[0.03] rounded-2xl border border-white/10 group-hover:bg-luxRed/10 group-hover:border-luxRed/30 transition-all duration-500 flex items-center justify-center p-4 relative`}>
                    <img src={cat.icon} alt={cat.label} className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-500" />
                    <div className="absolute inset-4 bg-luxRed/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-poppins font-black text-xs text-luxRed tracking-widest mb-1">
                      {cat.label}
                    </span>
                    <span className="font-inter text-xs text-gray-600 font-black tracking-widest uppercase">
                      ID_{cat.id}
                    </span>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.3)]" />
                      <span className="text-xs font-poppins text-gray-700 uppercase tracking-widest font-bold">Node_Active</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl md:text-2xl font-orbitron font-black text-white group-hover:text-luxRed transition-colors tracking-tight uppercase italic mb-2">
                      {cat.label}
                    </h4>
                    <p className="text-gray-500 text-xs font-poppins uppercase font-bold tracking-widest leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/5 bg-white/[0.01] p-4 rounded-xl">
                    <div className="flex justify-between items-center text-xs font-poppins font-bold text-luxRed/60 uppercase tracking-widest mb-4">
                      <span>MISSION_SCOPE</span>
                      <span>{cat.count} CASES</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {cat.cases.split(';').map((line, lidx) => (
                        <div key={lidx} className="flex flex-col gap-1 group/line">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-luxRed/40 group-hover/line:bg-luxRed transition-all" />
                            <span className="text-xs font-inter text-gray-500 group-hover:text-white transition-colors uppercase font-black">
                              {line.split(':')[0]}:
                            </span>
                          </div>
                          <span className="text-xs font-poppins text-luxRed/80 font-bold ml-3 italic truncate">
                            {line.split(':')[1] || line}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACKGROUND DECORATION */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-luxRed/5 blur-[50px] rounded-full group-hover:bg-luxRed/10 transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM HUD FEEDBACK */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-luxRed shadow-glow-red animate-pulse" />
            <p className="font-poppins text-xs text-gray-600 uppercase tracking-widest font-bold">
              Intelligence Data Stream: Sector v1.0.4 Established
            </p>
          </div>
          <p className="font-poppins font-black text-xs text-luxRed/40 tracking-widest uppercase italic">
            Penjelajah Center of Excellence
          </p>
        </div>
      </div>
    </section>
  );
};




const TacticalVideoBriefing = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden group/video min-h-[300px] lg:min-h-0">
      {!hasStarted ? (
        <div
          onClick={() => setHasStarted(true)}
          className="absolute inset-0 cursor-pointer flex items-center justify-center group/btn"
        >
          <img
            src="https://i.ytimg.com/vi_webp/lm-vRU8YITA/maxresdefault.webp"
            alt="Video Briefing"
            className="w-full h-full object-cover opacity-50 grayscale group-hover/video:grayscale-0 group-hover/video:opacity-100 transition-all duration-700 scale-105"
          />
          <div className="absolute z-10 w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-luxRed/20 rounded-full animate-ping" />
            <div className="relative w-16 h-16 bg-luxRed rounded-full flex items-center justify-center shadow-glow-red group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-orbitron font-black text-[10px] text-white tracking-[0.4em] uppercase opacity-60 group-hover/video:opacity-100 transition-opacity whitespace-nowrap">
            INITIALIZE_BRIEFING_STREAM
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {/* TACTICAL BRACKETS (STATIC) */}
          <div className="absolute inset-0 z-50 pointer-events-none border border-white/5">
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-luxRed/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-luxRed/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-luxRed/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-luxRed/40 rounded-br-lg" />
            
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-right font-mono text-[7px] md:text-[8px] text-luxRed/60 font-black tracking-[0.3em] uppercase">
              STATUS: FEED_SECURE // SIG_089
            </div>
          </div>

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/lm-vRU8YITA?autoplay=1&mute=0&playsinline=1&modestbranding=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1"
            title="Tactical Video Briefing"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
    </div>
  );
};

const DossierArchive = () => {
  return (
    <div className="flex flex-col h-full bg-[#050505] lg:border-l border-white/10 relative overflow-hidden">
      <div className="p-4 md:p-6 border-b border-white/5 bg-white/[0.01]">
        <div className="flex items-center gap-4 mb-1">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-luxRed shadow-[0_0_8px_#FF003C] animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
          </div>
          <div className="flex flex-col">
            <h5 className="font-mono text-[8px] md:text-[9px] text-white/50 uppercase tracking-[0.2em] leading-none">FILE_SYSTEM: /SECURE/NOD07</h5>
            <span className="font-mono text-[6px] md:text-[7px] text-gray-700 uppercase tracking-[0.2em] mt-1.5">STATUS: ACCESS_RESTRICTED [LEVEL_84]</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 custom-scrollbar thin max-h-[350px] lg:max-h-none">
        {dossierData.map((item) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
            className="group relative p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.01] transition-all cursor-pointer block"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-5">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-luxRed/40 transition-colors shadow-2xl">
                  <Search size={14} className="text-gray-700 group-hover:text-luxRed transition-colors md:hidden" />
                  <Search size={18} className="text-gray-700 group-hover:text-luxRed transition-colors hidden md:block" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-orbitron font-black text-[9px] md:text-[11px] text-white tracking-[0.2em] uppercase leading-tight group-hover:text-luxRed transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[7px] md:text-[8px] font-mono text-luxRed font-bold">{item.id}</span>
                    <div className="w-1 h-1 rounded-full bg-gray-800" />
                    <span className="text-[7px] md:text-[8px] font-mono text-gray-600 uppercase tracking-widest">{item.tag}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                 <span className="font-mono text-[6px] md:text-[7px] text-gray-700 uppercase tracking-widest border border-white/5 px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-black/40">{item.type}</span>
                 <ChevronRight size={12} className="text-gray-800 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="p-3 md:p-5 border-t border-white/5 bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-luxRed shadow-glow-red rounded-sm animate-pulse" />
          <span className="font-mono text-[7px] md:text-[8px] text-gray-700 uppercase tracking-[0.4em] font-black italic">
            LIVE_ARCHIVE_RELAY [PORT_0890]
          </span>
        </div>
      </div>
    </div>
  );
};

const NexusDashboard = () => {
  return (
    <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black group/nexus">
      {/* TOP TELEMETRY BAR */}
      <div className="px-4 py-4 md:px-8 md:py-6 flex flex-wrap items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-xl gap-4">
        <div className="flex items-center gap-3 md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1.5 bg-white/5 rounded-xl border border-white/10 shadow-glow-red/10 overflow-hidden shrink-0">
            <img src="/images/logo.webp" alt="Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_#FF003C]" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-orbitron font-black text-[10px] md:text-sm text-white tracking-[0.4em] uppercase italic">PENJELAJAH-CYBERSECURITY</h3>
            <span className="font-mono text-[6px] md:text-[8px] text-luxRed font-bold uppercase tracking-[0.5em] animate-pulse">AWAITING_OPERATION...</span>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
           <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-6 mr-6">
             <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest opacity-60">QUAD_SYNC_VISUAL_ACTIVE</span>
           </div>
           <div className="flex gap-1 items-end h-3 md:h-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-1 bg-luxRed ${i === 3 ? 'h-full' : i === 2 || i === 4 ? 'h-[70%]' : 'h-[40%]'} opacity-${i * 20}`} />
              ))}
           </div>
        </div>
      </div>

      {/* COMPACT MAIN BODY - RESPONSIVE GRID */}
      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 relative bg-black overflow-hidden group/briefing aspect-video lg:aspect-auto min-h-[250px] md:min-h-[400px]">
          <TacticalVideoBriefing />
          
          {/* INNER SNIPER BRACKETS */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-luxRed/20 pointer-events-none" />
          <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-luxRed/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-luxRed/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-luxRed/20 pointer-events-none" />
        </div>
        
        {/* DRIVE / SIDEBAR CONTAINER */}
        <div className="w-full lg:w-[320px] xl:w-[400px]">
          <DossierArchive />
        </div>
      </div>

      {/* BOTTOM TELEMETRY BAR */}
      <div className="px-4 py-4 md:px-8 md:py-5 bg-black border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-6">
           <div className="flex flex-col gap-1.5 md:gap-2">
              <span className="font-mono text-[6px] md:text-[7px] text-gray-700 uppercase tracking-widest">MEMORY_ALLOCATION</span>
              <div className="flex gap-0.5 md:gap-1">
                 {[1,2,3,4,5,6,7,8,9,10].map(i => (
                   <div key={i} className={`w-2 md:w-4 h-1 md:h-1.5 rounded-sm ${i <= 7 ? 'bg-luxRed shadow-glow-red' : 'bg-gray-900'} transition-all`} />
                 ))}
              </div>
           </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 font-mono text-[7px] md:text-[9px] uppercase tracking-widest">
           <span className="text-gray-700">AUTH_CODE:</span>
           <span className="text-luxRed font-black italic">PJL_07_ALPHA</span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ scaleX }: { scaleX: any }) => {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-[#020202] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Background Ghost Text */}
      <motion.div
        style={{ opacity: scaleX }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap"
      >
        <span className="font-orbitron font-black text-[25vw] leading-none text-white uppercase italic">
          ARTEFAK
        </span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr,1.4fr] gap-12 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-left pt-12"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-luxRed font-orbitron font-black text-xs tracking-[0.4em] uppercase">
                <div className="w-8 h-[1px] bg-luxRed shadow-glow-red" />
                SECURE_ARCHIVE // 07
              </div>
              <h2 className="font-orbitron font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tighter text-white uppercase italic">
                ARTEFAK<br />
                <span className="text-luxRed not-italic">DIGITAL</span>
              </h2>
            </div>

            <div className="relative pl-8 border-l-2 border-luxRed/30 space-y-8 max-w-2xl mx-auto lg:mx-0">
                <p className="font-orbitron font-black text-xl md:text-2xl text-white leading-[1.1] uppercase tracking-tighter">
                  "Sertifikasi Menguatkan Karier. <br />
                  <span className="text-luxRed italic">Artefak Menunjukkan Kemampuan Anda.</span>"
                </p>
                <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase max-w-xl group-hover:text-white transition-all duration-500">
                  Bangun portofolio operasional melalui log investigasi, timeline insiden, MITRE mapping, serta laporan analisis mendalam. Artefak ini menjadi bukti nyata kompetensi Anda dalam menghadapi pola serangan nyata di lapangan.
                </p>
            </div>
          </motion.div>

          {/* MAIN TACTICAL DASHBOARD - POSITIONED PARALLEL AT TOP */}
          <motion.div
            initial={{ opacity: 0, scale: 1, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
             <NexusDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const CommanderBriefing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section id="briefing" className="py-24 md:py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxRed/30 to-transparent" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-luxRed/5 blur-[120px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center">
          {/* 1. TEXT CONTENT (LOGS) - TOP ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 order-1"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-luxRed shadow-glow-red" />
                <span className="font-poppins font-black text-xs text-luxRed tracking-widest uppercase">Executive_Standard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase tracking-tighter italic leading-none">
                COMMANDER'S <br />
                <span className="text-luxRed not-italic text-4xl md:text-6xl">BRIEFING</span>
              </h2>

              {/* MOBILE ONLY SOLDIER - Gambar 2 (Directly Under Title) */}
              <div className="lg:hidden w-full h-[350px] relative rounded-2xl border border-luxRed/20 overflow-hidden my-6">
                <img
                  src="/images/cyber_soldier_briefing.webp"
                  alt="Modern Tactical Operative"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-[7px] font-mono text-luxRed animate-pulse">EYE_SCAN_ACTIVE [MOBILE_TARGET]</div>
                </div>
              </div>

              <p className="text-gray-500 font-poppins text-xs uppercase font-bold tracking-widest max-w-lg leading-relaxed italic border-l-2 border-luxRed/30 pl-4">
                Ubah data mentah menjadi keputusan strategis. Kuasai seni pelaporan untuk pemimpin organisasi.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {briefingData.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 6, backgroundColor: "rgba(255, 0, 60, 0.05)" }}
                  className="group p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-luxRed/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-50">
                    <div className={`px-1.5 py-0.5 rounded-[4px] text-[10px] font-poppins font-black border ${item.priority === 'CRITICAL' ? 'bg-luxRed text-white border-luxRed' : 'bg-white/5 border-white/10 text-gray-500'
                      }`}>
                      {item.priority}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[0.8fr,1.2fr] gap-6 items-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-inter font-bold text-gray-600 uppercase tracking-widest">Trigger_Log</span>
                      <p className="text-xs font-poppins text-gray-300 uppercase leading-snug font-bold italic">"{item.tech}"</p>
                    </div>
                    <div className="space-y-1 md:border-l md:border-white/5 md:pl-6">
                      <span className="text-[10px] font-inter font-bold text-luxRed uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1 h-1 bg-luxRed animate-pulse rounded-full" />
                        Exec_Outcome
                      </span>
                      <p className="text-sm font-poppins text-white leading-tight font-black uppercase tracking-tight italic">
                        {item.exec}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. IMAGE CONTENT (SOLDIER) - HIDDEN ON MOBILE (Using separate mobile block above) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="hidden lg:block w-full relative group cursor-crosshair order-2"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden">
              {/* INTERACTIVE HUD OVERIMAGE */}
              <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 z-30 pointer-events-none"
              >
                {/* Horizontal Scanning Line */}
                <motion.div
                  style={{ top: mouseY }}
                  className="absolute left-0 w-full h-px bg-luxRed shadow-[0_0_15px_rgba(255,0,60,0.8)] z-40"
                />

                {/* Biometric Eye Tracker */}
                <motion.div
                  style={{ left: mouseX, top: mouseY }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-luxRed/50 rounded-full z-40 flex items-center justify-center"
                >
                  <div className="w-1 h-1 bg-luxRed shadow-glow-red rounded-full" />
                  <div className="absolute inset-0 border border-luxRed/20 animate-ping rounded-full" />
                </motion.div>

                {/* Focus HUD Brackets */}
                <motion.div
                  style={{ top: mouseY }}
                  className="absolute left-4 right-4 h-24 -translate-y-1/2 z-40"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-luxRed" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-luxRed" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-luxRed" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-luxRed" />
                </motion.div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
              <div className="absolute top-8 left-8 z-20 space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="h-px w-12 bg-luxRed shadow-glow-red" />
                <p className="font-mono text-[7px] text-luxRed font-black tracking-[0.3em]">NODE_OPERATIVE: IDENTIFIED</p>
              </div>

              <img
                src="/images/cyber_soldier_briefing.webp"
                alt="Cyber Commander"
                className="w-full h-full object-cover grayscale-[40%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="space-y-1">
                  <p className="font-orbitron font-black text-xl text-white tracking-[0.2em] uppercase italic italic">EYE_SCAN_ACTIVE</p>
                  <p className="font-mono text-[8px] text-gray-400 uppercase tracking-[0.4em] font-bold">Biometric_Auth v2.0</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[7px] text-gray-500 uppercase font-black uppercase tracking-widest">Target_Locked</div>
                  <div className="px-3 py-1 bg-luxRed/10 border border-luxRed/30 rounded font-mono text-[7px] text-luxRed uppercase font-black uppercase tracking-widest shadow-glow-red animate-pulse">Scanning_Biometric</div>
                </div>
              </div>

              {/* Visual Decoration */}
              <div className="absolute inset-0 border-[20px] border-white/[0.02] pointer-events-none" />
              <div className="scanline pointer-events-none group-hover:opacity-20 transition-opacity" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default function App() {
  // --- TACTICAL PATH GUARD (404) ---
  const [isPathValid] = useState(() => {
    const validPaths = ['/', '/index.html'];
    return validPaths.includes(window.location.pathname);
  });

  if (!isPathValid) {
    return <NotFound />;
  }

  const [activeSection, setActiveSection] = useState('home');
  const [rolesHovered, setRolesHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // UNIFIED INTERSECTION OBSERVER FOR ACCURATE TRACKING
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: [0, 0.2, 0.5]
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // OBSERVE ALL SECTIONS FROM DATA SOURCE
    navigation.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#010101] min-h-screen selection-bg-luxRed selection-text-white text-white antialiased overflow-x-hidden">
      <Navbar activeSection={activeSection} />

      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-luxRed z-[110] origin-left shadow-glow-red"
        style={{ scaleX }}
      />

      <main className="relative">
        <Hero key="hero" />
        <Portfolio scaleX={scaleX} />
        <MissionBoard />
        <CommanderBriefing />


        <section
          id="roles"
          className="pt-24 pb-40 bg-[#020202] relative overflow-hidden border-t border-white/5"
          onMouseEnter={() => setRolesHovered(true)}
          onMouseLeave={() => setRolesHovered(false)}
        >
          {/* SECTION ENVIRONMENTAL HUD */}
          <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
          <div className={`absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b transition-all duration-700 ${rolesHovered ? 'from-blue-500/20' : 'from-luxRed/10'} via-transparent to-transparent pointer-events-none opacity-50`} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-[1400px] mx-auto px-6 relative"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 px-3 py-1 transition-all duration-700 border rounded-full mb-4 ${rolesHovered ? 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-luxRed/10 border-luxRed/20'}`}
              >
                <div className={`w-1 h-1 rounded-full animate-ping transition-colors duration-700 ${rolesHovered ? 'bg-blue-500' : 'bg-luxRed'}`} />
                <span className={`text-[10px] font-orbitron font-black uppercase tracking-[0.3em] transition-colors duration-700 ${rolesHovered ? 'text-blue-400' : 'text-luxRed'}`}>
                  {rolesHovered ? 'BLUE TEAM OPERATIONS : ACTIVATED' : 'SQUADRON_SECTOR : STANDBY'}
                </span>
              </motion.div>

              <h2 className="font-orbitron font-black text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tighter uppercase italic">
                <span className="text-white">TACTICAL </span>
                <span className={`transition-all duration-1000 ${rolesHovered ? 'text-blue-500 shadow-glow-blue' : 'text-luxRed'} not-italic`}>COMMAND</span>
              </h2>

              <p className="font-mono text-[clamp(0.6rem,1.5vw,0.75rem)] text-gray-500 tracking-[0.4em] uppercase">
                {rolesHovered ? '▶ LOGON_ESTABLISHED // TARGET_SECURE' : 'SECURE ACCESS TERMINAL // BLUE TEAM INVESTIGATIVE TIER'}
              </p>

              <p className="text-white font-bold text-xs uppercase tracking-widest max-w-2xl mx-auto border-t border-white/5 pt-6 font-poppins">
                Membangun Mindset CSIRT: Memahami arsitektur sistem, analisa log (Raw vs Parsed), hingga manajemen insiden dan Hardening. Kuasai CTI & Vulnerability Management dalam satu siklus operasi.
              </p>
            </div>

            <div className="flex justify-center mt-24 px-4">
              <div className="w-full max-w-4xl">
                {rolesData.map((role: any) => (
                  <PriceCard
                    key={role.id}
                    title={role.title}
                    price={role.price}
                    features={role.features}
                    isActivated={rolesHovered}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ThreatIntelCenter removed */}

        <section id="methodology" className="py-24 bg-[#020202] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <AttackSurfaceHub />
          </div>
        </section>

        <section id="hall-of-fame" className="py-24 md:py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-left mb-20"
            >
              <h2 className="font-orbitron font-black text-5xl mb-6 uppercase text-white tracking-tighter">HALL OF <span className="text-luxRed italic">FAME</span></h2>
              <div className="w-20 h-1.5 bg-luxRed rounded-full mb-6 shadow-glow-red" />
              <p className="text-gray-100 font-poppins font-bold text-xs tracking-widest uppercase">Garda Pertahanan Siber</p>
            </motion.div>

            {students.length > 0 ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {students.map((s, i) => (
                  <ParticipantCard 
                    key={i} 
                    name={s.name} 
                    imageUrl={s.img} 
                    linkedinUrl={s.linkedinUrl}
                    role={s.role}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="py-20 border border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center bg-white/[0.01]"
              >
                <div className="w-16 h-16 border-2 border-luxRed/30 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                  <div className="w-8 h-8 border-2 border-luxRed rounded-full animate-ping" />
                </div>
                <h3 className="font-orbitron font-black text-xl text-white mb-2 tracking-tighter uppercase">SCANNING FOR <span className="text-luxRed italic">OPERATIVES...</span></h3>
                <p className="text-gray-500 font-poppins text-xs uppercase tracking-widest">No verified graduates detected in current sector.</p>
              </motion.div>
            )}
          </div>
        </section>

        <FaqSection />
        <div id="commander">
          <CommanderSection />
        </div>
      </main>

      <footer className="pt-24 pb-12 bg-[#010101] text-white relative overflow-hidden">
        {/* Visual Depth Elements */}
        <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-luxRed/30 to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-luxRed/5 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/5 rounded-2xl border border-white/10 shadow-2xl group-hover:border-luxRed transition-all duration-500 shrink-0">
                  <img src="/images/logo.webp" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col text-left font-orbitron font-black leading-tight">
                  <span className="text-xl tracking-tighter text-white uppercase">PENJELAJAH</span>
                  <span className="text-lg tracking-tighter text-luxRed italic uppercase -mt-1">CYBERSECURITY</span>
                  <span className="text-[10px] font-poppins tracking-widest text-gray-600 uppercase mt-2">TACTICAL CYBER OPERATIONS</span>
                </div>
              </div>
              <p className="text-gray-500 font-poppins font-bold text-xs leading-relaxed uppercase tracking-widest max-w-sm border-l-2 border-luxRed/20 pl-4">
                PLATFORM PELATIHAN PERTAHANAN SIBER BERBASIS SIMULASI TAKTIS DUNIA NYATA. ADVANCED INTELLIGENCE GATHERING PLATFORM.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: DiscordIcon, href: "https://discord.gg/bpHekcRqxR", label: "JOIN" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/imoon07", label: "PERS" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/penjelajah-cybersecurity/?viewAsMember=true", label: "CORP" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group/social">
                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 group-hover/social:border-luxRed transition-all">
                      <social.icon className="w-4 h-4 text-gray-500 group-hover/social:text-luxRed transition-colors" />
                    </div>
                    <span className="text-[10px] font-inter font-bold text-gray-600 group-hover/social:text-luxRed tracking-widest uppercase">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-orbitron font-black text-[clamp(9px,1vw,11px)] tracking-[0.5em] text-white uppercase mb-10 border-l-4 border-luxRed pl-4">Navigation</h5>
              <ul className="space-y-4">
                {navigation.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-gray-500 text-xs font-black uppercase tracking-widest hover:text-luxRed transition-colors flex items-center gap-2 group font-poppins">
                      <div className="w-1 h-px bg-gray-800 group-hover:w-3 group-hover:bg-luxRed transition-all" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-orbitron font-black text-[clamp(9px,1vw,11px)] tracking-[0.5em] text-white uppercase mb-10 border-l-4 border-luxRed pl-4">System Status</h5>
              <ul className="space-y-6">
                {systemStats.map((stat, i) => (
                  <li key={i} className="space-y-1">
                    <span className="text-[10px] font-inter font-bold text-gray-600 uppercase tracking-widest">{stat.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${stat.status === 'online' ? 'bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]' : 'bg-luxRed'}`} />
                      <span className="text-xs font-poppins font-black text-gray-100 uppercase tracking-widest">{stat.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-orbitron font-black text-[clamp(9px,1vw,11px)] tracking-[0.5em] text-white uppercase mb-10 border-l-4 border-luxRed pl-4">Verification</h5>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] relative overflow-hidden group hover:border-luxRed/30 transition-all">
                <div className="absolute inset-0 bg-luxRed/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="scanline opacity-[0.03]" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[10px] font-poppins font-bold text-gray-500 uppercase tracking-widest">Authenticated Node</div>
                    <div className="px-1.5 py-0.5 bg-luxRed text-white text-[10px] font-poppins font-black rounded uppercase tracking-widest animate-pulse">DOUBLE_AUTHORIZATION</div>
                  </div>

                  <div className="font-mono text-[10px] text-luxRed font-black break-all select-all tracking-tighter mb-4">NODE_758DC_SEC_BJKT</div>

                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    <div className="flex justify-between items-center text-[10px] font-inter font-bold uppercase tracking-widest">
                      <span className="text-gray-600">CLEARANCE:</span>
                      <span className="text-white">LEVEL_CLEARANCE_HIGH</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-inter font-bold uppercase tracking-widest">
                      <span className="text-gray-600">CONNECTION:</span>
                      <span className="text-green-500">CONNECTED_NODE</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-inter font-bold uppercase tracking-widest">
                      <span className="text-gray-600">UPLINK:</span>
                      <span className="text-white">SECURE LINK [ESTABLISHED]</span>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                    <Lock className="w-3.5 h-3.5 text-luxRed" />
                    <div className="w-12 h-px bg-luxRed/30" />
                    <ShieldCheck className="w-3.5 h-3.5 text-luxRed" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="text-xs font-poppins font-bold text-gray-500 uppercase tracking-widest">
              &copy; 2026 Penjelajah CyberSecurity. All Assets Classified.
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs font-poppins font-bold text-gray-500 uppercase">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,1)]" />
                System_Secure_Status
              </div>
              <div className="w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-[10px] font-inter font-bold text-gray-700 uppercase">Authenticated By</div>
                  <div className="text-xs font-poppins font-black text-gray-100 uppercase tracking-tighter">Penjelajah CyberSecurity</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center">
                  <img src="/images/logo.webp" alt="Node" className="w-full h-full object-contain grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CustomCursor isBlue={rolesHovered} />
    </div>
  );
}