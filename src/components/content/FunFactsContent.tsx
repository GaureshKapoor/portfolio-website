import { Reveal, RevealItem } from "@/components/Reveal";

const facts = [
  "Man City fan — always",
  "Big foodie — religiously on Beli",
  "Into the outdoors — hiking, exploring, all of it",
  "Concerts, premieres, movies, TV shows — yes to all",
  "20+ countries and counting — travel nerd through and through",
  "Obsessed with AI and startups — building and following both",
];

// Templates — fill these in via content/fun-facts.md
const books: { title: string; author: string }[] = [
  { title: "Example Book Title", author: "Author Name" },
  { title: "Another Great Read", author: "Author Name" },
  { title: "On the Shelf", author: "Author Name" },
];

const movies: { title: string }[] = [
  { title: "Example Movie" },
  { title: "Another Favorite" },
  { title: "Rewatchable Classic" },
];

const music: { artist: string; track?: string }[] = [
  { artist: "Example Artist", track: "Favorite Track" },
  { artist: "Another Artist", track: "On Repeat" },
  { artist: "Live Favorite" },
];

const Subhead = ({ label }: { label: string }) => (
  <h3 className="font-mono text-sm text-muted-foreground">
    <span className="text-primary"># </span>
    {label}
  </h3>
);

const FunFactsContent = () => {
  return (
    <Reveal className="space-y-12 max-w-3xl">
      <RevealItem>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Fun Facts</h2>
        <p className="text-muted-foreground mt-2">A few things about me outside of work.</p>
      </RevealItem>

      <RevealItem>
        <ul className="space-y-2.5">
          {facts.map((f) => (
            <li key={f} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </RevealItem>

      <RevealItem>
        <Subhead label="Books" />
        <ul className="mt-4 space-y-2.5">
          {books.map((b) => (
            <li key={b.title} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                {b.title}
                <span className="text-muted-foreground"> — {b.author}</span>
              </span>
            </li>
          ))}
        </ul>
      </RevealItem>

      <RevealItem>
        <Subhead label="Movies" />
        <ul className="mt-4 space-y-2.5">
          {movies.map((m) => (
            <li key={m.title} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>{m.title}</span>
            </li>
          ))}
        </ul>
      </RevealItem>

      <RevealItem>
        <Subhead label="Music" />
        <ul className="mt-4 space-y-2.5">
          {music.map((m) => (
            <li key={m.artist} className="flex gap-3 text-[15px] text-foreground/85">
              <span className="mt-[9px] h-1 w-1 rounded-full bg-primary shrink-0" />
              <span>
                {m.artist}
                {m.track && <span className="text-muted-foreground"> — {m.track}</span>}
              </span>
            </li>
          ))}
        </ul>
      </RevealItem>
    </Reveal>
  );
};

export default FunFactsContent;
