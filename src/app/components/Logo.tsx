interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`h-[55px] relative w-[244px] ${className}`}>
      <svg viewBox="0 0 244 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="0" y="40" className="fill-white text-[40px] font-['EtruscoNowCondensed:Bold',sans-serif]">
          UNDERCRIME
        </text>
      </svg>
    </div>
  );
}