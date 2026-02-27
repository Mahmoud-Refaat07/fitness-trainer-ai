const TerminalOverlay = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="relative bg-black/20 backdrop-blur-sm border border-orange-600/30 rounded-lg p-3 overflow-hidden font-mono">
        {/* Subtle orange top glow inside card */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent"></div>

        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-orange-600/20 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
            <p className="text-xs text-orange-400 tracking-widest">
              SYSTEM ACTIVE
            </p>
          </div>
          <p className="text-xs text-gray-600">ID:78412.93</p>
        </div>

        {/* Title */}
        <p className="text-sm text-white mb-2 tracking-tight">
          <span className="text-orange-500 mr-1">/</span>
          WORKOUT ANALYSIS COMPLETE
        </p>

        {/* Items */}
        <div className="space-y-1.5 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="text-orange-500/80 font-bold">01</div>
            <span>30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-orange-500/80 font-bold">02</div>
            <span>20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-orange-500/80 font-bold">03</div>
            <span>10 min flexibility (recovery)</span>
          </div>
        </div>

        {/* Bottom shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-600/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default TerminalOverlay;
