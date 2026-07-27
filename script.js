// Edit the arrays below to add, remove, or update projects — the page renders from this data.

const PROJECTS = [
  {
    name: "trim",
    status: "live",
    statusLabel: "pre-launch · first contract live",
    desc: "A platform connecting brands with the right creators, escrow-first — TRIM is the sole contracting party between brand and creator, handling discovery, milestone payments, and campaign verification. First paying contract closed and delivered (Coralpay Technology Nigeria): 4 creators, 16 pieces of content, ~28K impressions. NITDA Nigeria Startup Label certified, live on Paystack escrow.",
    tags: ["founder", "pre-launch", "fintech-adjacent", "escrow"],
    links: [{ label: "Live ↗", url: "https://www.trim-hq.com/" }],
  },
  {
    name: "wingman-mcp",
    status: "live",
    statusLabel: "live · on pypi",
    desc: "A persistent plan panel for Claude conversations — create, track, and tick off tasks without leaving the chat. Published to PyPI and syncs across devices via a hosted Wingman Cloud instance. I use it daily to run every other project on this page.",
    tags: ["python", "mcp", "sqlite"],
    links: [{ label: "Repo ↗", url: "https://github.com/adeoluwaadesina/wingman-mcp" }],
  },
  {
    name: "beat-party",
    status: "progress",
    statusLabel: "in progress",
    desc: "A Jackbox-style music-guessing party game. One screen hosts the room and plays audio; up to eight players join from their phones with a 4-character code and race to name the song, across ten game modes. Installable as a PWA.",
    tags: ["node", "websocket", "react", "pwa"],
    links: [
      { label: "Live ↗", url: "https://beat-party-client.vercel.app/" },
      { label: "Repo ↗", url: "https://github.com/adeoluwaadesina/beat-party" },
    ],
  },
  {
    name: "whistler",
    status: "progress",
    statusLabel: "prototype",
    desc: "Whistle a melody, hear it as an instrument. Whistler converts pitch to notes client-side using the YIN pitch-detection algorithm — no ML, no server — then lets you layer multiple whistled takes into a full arrangement.",
    tags: ["react", "typescript", "web audio"],
    links: [],
  },
  {
    name: "groundwork",
    status: "live",
    statusLabel: "live",
    desc: "My own publishing platform for policy and infrastructure writing on Nigeria — framework overviews that expand into full essays, view counts, and email subscriptions for new publications. Built to run end to end on Vercel's free tier.",
    tags: ["next.js", "postgres", "auth"],
    links: [
      { label: "Live ↗", url: "https://groundwork-ng.vercel.app/" },
      { label: "Repo ↗", url: "https://github.com/adeoluwaadesina/groundwork-ng" },
    ],
  },
  {
    name: "genesis-mcp",
    status: "live",
    statusLabel: "live · local",
    desc: "An MCP server whose only built-in tool is the tool that builds other tools — register a new capability at runtime, no restart required. I've used it to add live weather lookups and a personal notes tool to my own Claude setup.",
    tags: ["python", "mcp"],
    links: [{ label: "Repo ↗", url: "https://github.com/adeoluwaadesina/genesis-mcp" }],
  },
];

const MORE = [
  {
    name: "borrow-borrow",
    desc: "Emergency liquidity prototype for the Nigerian market, simulated end to end — no real money moves.",
    status: "prototype",
    link: "https://borrow-borrow.vercel.app/",
  },
  {
    name: "fuel-log-mcp-server",
    desc: "A Java MCP server that logs fuel purchases and checks station wallet balances straight from Claude Desktop.",
    status: "live · personal",
    link: null,
  },
  {
    name: "storyvive",
    desc: "A standalone tool that pulls the full episode list for any TV series from Wikipedia, built and tested before folding into a larger app.",
    status: "module",
    link: "https://storyvive.vercel.app/generate",
  },
];

const CLIENT_WORK = [
  { name: "Chromaland Developers", desc: "Marketing site for a real-estate development in Abuja.", status: "next.js", link: "https://chromaland.vercel.app/" },
  { name: "Zeli Models", desc: "Portfolio site and admin panel for a modeling agency.", status: "next.js, supabase", link: "https://zeli-models.vercel.app/" },
  { name: "Uzorlove Home Care", desc: "Marketing site for a home-nursing provider in Nigeria.", status: "static", link: null },
  { name: "LUCKMN", desc: "Equipment marketplace with a public catalog and admin panel.", status: "react, express", link: null },
];

function dotClass(status) {
  if (status === "live") return "dot-live";
  if (status === "progress") return "dot-progress";
  return "dot-archived";
}

function renderRegistry() {
  const root = document.getElementById("registry");
  root.innerHTML = PROJECTS.map((p) => `
    <article class="reg-item">
      <div class="reg-head">
        <span class="reg-name">${p.name}</span>
        <span class="reg-status"><span class="dot ${dotClass(p.status)}"></span>${p.statusLabel}</span>
      </div>
      <p class="reg-desc">${p.desc}</p>
      <div class="reg-foot">
        <div class="tag-row">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="reg-links">${p.links.map((l) => `<a class="reg-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderList(id, items) {
  const root = document.getElementById(id);
  root.innerHTML = items.map((i) => `
    <li>
      <span class="mini-name">${i.name}</span>
      <span class="mini-desc">${i.desc}</span>
      ${i.link ? `<a class="mini-link" href="${i.link}" target="_blank" rel="noopener">Live ↗</a>` : ""}
      <span class="mini-status">${i.status}</span>
    </li>
  `).join("");
}

renderRegistry();
renderList("more-list", MORE);
renderList("client-list", CLIENT_WORK);

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reg-item").forEach((el) => observer.observe(el));
