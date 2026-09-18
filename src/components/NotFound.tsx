import { motion } from 'framer-motion';
import { WifiOff, Radio, Home, Search, ShieldCheck } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="fixed inset-0 bg-[#020202] flex flex-col items-center justify-center p-6 font-mono overflow-hidden z-[99999]">
      {/* AMBIENT EFFECTS */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,60,0.05)_0%,transparent_70%)]" />
      
      {/* PULSING RADAR (Visual Focus) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-96 h-96 border border-luxRed rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          className="w-64 h-64 border border-luxRed/50 rounded-full"
        />
      </div>

      {/* CORE MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center space-y-8"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center"
          >
            <WifiOff className="w-10 h-10 text-luxRed" />
          </motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-orbitron font-black text-white tracking-tighter uppercase">
            [ <span className="text-luxRed">SIGNAL</span>_LOST ]
          </h1>
          <div className="flex items-center justify-center gap-3 text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">
            <Radio className="w-3 h-3 animate-pulse" />
            Path_Not_Correlated_In_Sector_404
          </div>
        </div>

        {/* TECH LOGS (Decorative) */}
        <div className="hidden md:block max-w-md mx-auto p-4 bg-white/[0.02] border border-white/5 rounded-xl text-left">
          <div className="text-[9px] text-gray-600 space-y-1">
            <p>{">"} INITIALIZING RE-SCAN... [FAILED]</p>
            <p>{">"} ATTEMPTING HANDSHAKE WITH NODE_ORIGIN... [TIMEOUT]</p>
            <p>{">"} REASON: PATH_ENCRYPTION_MISMATCH</p>
            <p className="text-luxRed animate-pulse">{">"} STATUS: WAITING_FOR_COMMAND_INTERVENTION</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto uppercase font-bold italic border-l border-luxRed/30 pl-4">
          "Koordinat yang Anda tuju berada di luar jangkauan radar transmisi kami. Sinyal terputus di sektor yang tidak terdaftar."
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-3 px-10 py-4 bg-luxRed text-white font-orbitron font-black text-xs rounded-full uppercase tracking-widest shadow-2xl shadow-luxRed/20 hover:shadow-luxRed/40 transition-all"
          >
            <Home className="w-4 h-4" />
            Re-establish Uplink
          </motion.button>
          
          <button 
            onClick={() => window.history.back()}
            className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors"
          >
            <Search className="w-3 h-3" />
            Go Back
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-gray-700">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[8px] uppercase tracking-[0.4em]">Penjelajah Cybersecurity Transmission Hub</span>
        </div>
      </motion.div>

      {/* OVERLAY FX */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
};

export default NotFound;
