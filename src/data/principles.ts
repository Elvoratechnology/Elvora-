export interface PrincipleItem {
  number: string;
  title: string;
  summary: string;
  elaboration: string;
}

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "Right tool, not newest tool",
    summary: "We pick what solves the problem. Not what's trending on social media.",
    elaboration: "Most tech projects fail because of over-engineering. We look at your actual business requirements and choose tools that match them — boring and reliable usually beats new and complicated.",
  },
  {
    number: "02",
    title: "Design and code together",
    summary: "A beautiful interface that's confusing to use has already failed.",
    elaboration: "We don't treat design and development as separate phases. Visual decisions and engineering decisions happen alongside each other, which means fewer surprises when things are built.",
  },
  {
    number: "03",
    title: "Speed is a feature",
    summary: "Slow websites lose customers before they ever read a word.",
    elaboration: "Page speed isn't something we optimize after launch. We build it in from the start — clean output, optimized assets, no bloat. Your site should feel instant, on every device.",
  },
  {
    number: "04",
    title: "You talk to the people doing the work",
    summary: "No account managers between you and the people building your product.",
    elaboration: "When you work with ELVORA, you communicate directly with the team. We think that makes for better results and avoids the telephone-game problems that come with agencies that layer management over execution.",
  },
];
