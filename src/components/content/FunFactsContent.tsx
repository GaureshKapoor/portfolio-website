import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Music, BookOpen } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const buckets = [
  { emoji: "⚽", name: "Soccer", detail: "Lifelong Man City fan, always." },
  { emoji: "🍜", name: "Foodie", detail: "Power Beli user, always chasing the next great spot." },
  { emoji: "🪂", name: "Adventurer", detail: "Skydiving, hiking, the outdoors, all of it." },
  { emoji: "📈", name: "Finance", detail: "Stock market, investments, and trading." },
  { emoji: "✈️", name: "Travel", detail: "Avid traveller, 20+ countries and counting." },
  { emoji: "🎬", name: "Cinephile", detail: "Movies, Bollywood, and TV shows. Find me on Letterboxd." },
  { emoji: "🎤", name: "Concerts", detail: "Live music whenever I can. Favorite show: Post Malone." },
  { emoji: "🤖", name: "Frontier Tech & Startups", detail: "Building and following both." },
  { emoji: "🎮", name: "Video Games", detail: "Favorites: RDR 2, God of War, Spider-Man." },
];

const languages: { name: string; level: string }[] = [
  { name: "English", level: "native" },
  { name: "Hindi", level: "native" },
  { name: "French", level: "elementary" },
  { name: "Punjabi", level: "elementary" },
  { name: "Spanish", level: "elementary" },
];

const movies: { title: string; year: number; slug: string; gradient: string; accentColor: string }[] = [
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    slug: "wolf-of-wall-street",
    gradient: "from-amber-950 via-yellow-900 to-amber-800",
    accentColor: "text-amber-300",
  },
  {
    title: "Shutter Island",
    year: 2010,
    slug: "shutter-island",
    gradient: "from-slate-950 via-blue-950 to-slate-800",
    accentColor: "text-blue-300",
  },
  {
    title: "Inception",
    year: 2010,
    slug: "inception",
    gradient: "from-indigo-950 via-purple-950 to-indigo-800",
    accentColor: "text-indigo-300",
  },
];

const artists: { name: string; slug: string; genre: string; labelGradient: string; grooveColor: string }[] = [
  {
    name: "HUGEL",
    slug: "hugel",
    genre: "EDM / Afro House",
    labelGradient: "from-cyan-500 to-teal-600",
    grooveColor: "rgba(6,182,212,0.15)",
  },
  {
    name: "Dom Dolla",
    slug: "dom-dolla",
    genre: "Tech House",
    labelGradient: "from-violet-500 to-purple-700",
    grooveColor: "rgba(139,92,246,0.15)",
  },
  {
    name: "Twenty One Pilots",
    slug: "twenty-one-pilots",
    genre: "Alt / Pop",
    labelGradient: "from-rose-500 to-pink-700",
    grooveColor: "rgba(244,63,94,0.15)",
  },
];

const books: { title: string; author: string; slug: string; spineColor: string; coverGradient: string; textColor: string }[] = [
  {
    title: "Zero to One",
    author: "Peter Thiel",
    slug: "zero-to-one",
    spineColor: "bg-sky-900",
    coverGradient: "from-sky-900 to-sky-700",
    textColor: "text-sky-100",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    slug: "hard-things",
    spineColor: "bg-orange-900",
    coverGradient: "from-orange-900 to-orange-700",
    textColor: "text-orange-100",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    slug: "the-lean-startup",
    spineColor: "bg-emerald-900",
    coverGradient: "from-emerald-900 to-emerald-700",
    textColor: "text-emerald-100",
  },
];

const offTheClock = [
  {
    label: "Builds for fun",
    text: "Ships side projects on nights and weekends. Half my fun is a new repo.",
  },
  {
    label: "Gives back",
    text: "Pi Kappa Alpha philanthropy, LA Regional Food Bank, and earlier Tamanna Special School and Saakshar Mission literacy drives.",
  },
  {
    label: "Origin",
    text: "New Delhi to Los Angeles.",
  },
];

const Subhead = ({ label }: { label: string }) => (
  <h3 className="font-mono text-sm text-muted-foreground">
    <span className="text-primary"># </span>
    {label}
  </h3>
);

function MovieCard({ movie }: { movie: typeof movies[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-default"
      whileHover={{ y: -6, rotate: 1.5, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      {!imgError ? (
        <img
          src={`/covers/${movie.slug}.jpg`}
          alt={movie.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-b ${movie.gradient}`} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="absolute top-3 right-3">
        <Film
          size={14}
          className={`${movie.accentColor} opacity-70`}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-display text-xs font-bold text-white leading-tight line-clamp-2">
          {movie.title}
        </p>
        <p className={`font-mono text-[10px] mt-0.5 ${movie.accentColor} opacity-80`}>
          {movie.year}
        </p>
      </div>
    </motion.div>
  );
}

function VinylCard({ artist }: { artist: typeof artists[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 group">
      <motion.div
        className="relative w-full max-w-[120px] aspect-square"
        whileHover={{ rotate: 180, transition: { duration: 1.2, ease: "linear" } }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `repeating-radial-gradient(
              circle at center,
              #111 0px,
              #1a1a1a 2px,
              #0d0d0d 4px,
              #161616 6px
            )`,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.06), inset 0 0 20px rgba(0,0,0,0.5)`,
          }}
        />

        <div
          className="absolute inset-[25%] rounded-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
            boxShadow: "0 0 0 2px rgba(255,255,255,0.08)",
          }}
        >
          {!imgError ? (
            <img
              src={`/covers/${artist.slug}.jpg`}
              alt={artist.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div
              className={`w-full h-full rounded-full bg-gradient-to-br ${artist.labelGradient} flex items-center justify-center`}
            >
              <span className="text-white font-display font-bold text-[8px] text-center leading-tight px-1">
                {artist.name}
              </span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.08) 0%, transparent 55%)`,
          }}
        />
      </motion.div>

      <div className="text-center">
        <p className="font-display text-sm font-semibold text-foreground">{artist.name}</p>
        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{artist.genre}</p>
      </div>
    </div>
  );
}

function BookCard({ book }: { book: typeof books[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group relative aspect-[2/3] rounded-md overflow-hidden cursor-default"
      whileHover={{
        rotateY: -18,
        x: 4,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{ transformStyle: "preserve-3d", perspective: 600 }}
    >
      {!imgError ? (
        <img
          src={`/covers/${book.slug}.jpg`}
          alt={book.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <>
          <div className={`absolute left-0 top-0 bottom-0 w-[12%] ${book.spineColor} z-10`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${book.coverGradient}`} />
          <div className="absolute inset-0 flex flex-col justify-between p-3 pl-[18%]">
            <BookOpen size={14} className={`${book.textColor} opacity-50 mt-1`} />
            <div>
              <p className={`font-display text-xs font-bold ${book.textColor} leading-tight line-clamp-3`}>
                {book.title}
              </p>
              <p className={`font-mono text-[9px] mt-1 ${book.textColor} opacity-60`}>
                {book.author}
              </p>
            </div>
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300 rounded-md" />
    </motion.div>
  );
}

const FunFactsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Fun Facts</h2>
        <p className="text-muted-foreground mt-2">A few things about me outside of work.</p>
      </RevealItem>

      <RevealItem>
        <Subhead label="Hobbies" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {buckets.map((b) => (
            <motion.div
              key={b.name}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-lg border border-border bg-card p-4 hover:border-primary/40 transition-colors"
            >
              <div className="text-2xl leading-none">{b.emoji}</div>
              <p className="font-display font-semibold text-foreground mt-2.5">{b.name}</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.detail}</p>
            </motion.div>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Languages" />
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((lang) => (
            <motion.span
              key={lang.name}
              className="rounded-md border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            >
              {lang.name}
              <span className="ml-1.5 text-muted-foreground text-xs">{lang.level}</span>
            </motion.span>
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Latest Rec" />
        <p className="text-sm text-muted-foreground mt-1">A youtube video I enjoyed recently.</p>
        <div className="mt-4 aspect-video max-w-2xl rounded-lg overflow-hidden border border-border bg-card">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/CEvIs9y1uog"
            title="Latest watch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Movies" />
        <p className="text-sm text-muted-foreground mt-1">I guess you can tell I'm a Leonardo DiCaprio fan :)</p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.slug} movie={movie} />
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Music" />
        <p className="text-sm text-muted-foreground mt-1">Currently listening to following bangers!</p>
        <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-6">
          {artists.map((artist) => (
            <VinylCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Books" />
        <p className="text-sm text-muted-foreground mt-1">Learnt most from these books..</p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </RevealItem>

      <RevealItem>
        <Subhead label="Off the clock" />
        <ul className="mt-4 space-y-3">
          {offTheClock.map((item) => (
            <li key={item.label} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>
                <span className="font-medium text-foreground">{item.label}:</span>{" "}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </RevealItem>
    </Reveal>
  );
};

export default FunFactsContent;
