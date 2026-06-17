import { useState } from "react";

// Round headshot with a cyan ring + a "flick" of light that sweeps across on
// hover. Drop the photo at public/headshot.jpg — until then it shows a monogram.
const ProfileAvatar = ({ className = "w-28 h-28 md:w-36 md:h-36" }: { className?: string }) => {
  const [ok, setOk] = useState(true);
  return (
    <div className={`group relative shrink-0 ${className}`}>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-primary/30 to-transparent opacity-60 blur-[3px] group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-primary/80 to-primary/20">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-card">
          {ok ? (
            <img
              src="/headshot.jpg"
              alt="Gauresh Kapoor"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
              onError={() => setOk(false)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display text-3xl font-bold text-muted-foreground">
              GK
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
