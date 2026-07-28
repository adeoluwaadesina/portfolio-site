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
  {
    name: "lite-key-generator",
    status: "live",
    statusLabel: "live",
    desc: "A minimal, single-page tool for generating high-entropy, rotatable keys and tokens — no accounts, no network calls after load, nothing persisted. Random bytes come from crypto.getRandomValues, mixed with a high-resolution timestamp and expanded via a counter-based SHA-256 hash chain, then mapped onto a chosen character set (alphanumeric, symbols, hex, or base64url) client-side.",
    tags: ["vanilla js", "web crypto", "no-build"],
    links: [
      { label: "Live ↗", url: "https://lite-key-generator.vercel.app/" },
      { label: "Repo ↗", url: "https://github.com/adeoluwaadesina/lite-key-generator" },
    ],
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
        <div class="reg-links">${p.links.map((l) => `<a class="reg-link" href="${l.url}" target="_blank" rel="noopener"${l.label.startsWith("Live") ? ` data-preview="${l.url}"` : ""}>${l.label}</a>`).join("")}</div>
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
      ${i.link ? `<a class="mini-link" href="${i.link}" target="_blank" rel="noopener" data-preview="${i.link}">Live ↗</a>` : ""}
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

// Live-link preview: see a screenshot of a project's site without leaving
// the page. Hover-capable devices get a floating card on mouseover; touch
// devices get a tap-to-open dropdown under the link instead, since there's
// no hover to trigger off of.
{
  const previewLinks = document.querySelectorAll("[data-preview]");
  const resolvedCache = new Map(); // url -> loaded screenshot src, once real

  // mshots renders on demand: the first request(s) for a URL return a
  // "generating" placeholder (occasionally a transient error), so re-request
  // a few times with a cache-busting param until the real screenshot loads.
  // Preload each attempt off-DOM so a failed fetch never flashes a broken
  // image over the visible <img>. Every resolved src is cached by url so a
  // link that already resolved shows instantly next time. `timerBag`, when
  // given, collects this run's setTimeout ids so a caller can cancel its own
  // pending retries without touching unrelated (e.g. preload) ones.
  function loadWithRetries(url, onUpdate, token, getToken, timerBag) {
    const base = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=640&h=400`;
    const attempt = (n) => {
      if (token !== getToken()) return;
      const test = new Image();
      const src = n === 0 ? base : `${base}&t=${Date.now()}`;
      test.onload = () => {
        resolvedCache.set(url, src);
        if (token === getToken()) onUpdate(src);
      };
      test.src = src;
      if (n < 3) {
        const id = setTimeout(() => attempt(n + 1), 1800);
        if (timerBag) timerBag.push(id);
      }
    };
    attempt(0);
  }

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    initHoverPreview(previewLinks, resolvedCache, loadWithRetries);
  } else {
    initTapPreview(previewLinks, resolvedCache, loadWithRetries);
  }
}

function initHoverPreview(previewLinks, resolvedCache, loadWithRetries) {
  const preview = document.createElement("div");
  preview.className = "link-preview";
  preview.innerHTML = `<div class="link-preview-frame"><img alt="" /></div><span class="link-preview-url"></span>`;
  document.body.appendChild(preview);
  const img = preview.querySelector("img");
  const urlLabel = preview.querySelector(".link-preview-url");

  let showTimer = null;
  let activeLink = null;
  let hoverPollTimers = []; // only the on-demand retries for the currently-hovered link
  let sessionToken = 0;

  // Warm the cache for every preview link shortly after load, staggered so
  // we don't fire a burst of requests at the free screenshot service at once.
  // Preloads always run to completion (no cancellation) since they aren't
  // tied to a hover session.
  function preloadAll(links) {
    links.forEach((link, i) => {
      const url = link.getAttribute("data-preview");
      if (resolvedCache.has(url)) return;
      setTimeout(() => loadWithRetries(url, () => {}, "preload", () => "preload"), i * 400);
    });
  }

  function position(link) {
    const rect = link.getBoundingClientRect();
    const pw = 320;
    let left = rect.left + rect.width / 2 - pw / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - pw - 12));
    let top = rect.top - 12; // anchor above the link, shifted up via translateY
    if (top < 220) top = rect.bottom + 12; // not enough room above, drop below
    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;
    preview.classList.toggle("link-preview-below", top === rect.bottom + 12);
  }

  function clearHoverPolls() {
    hoverPollTimers.forEach(clearTimeout);
    hoverPollTimers = [];
  }

  previewLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const url = link.getAttribute("data-preview");
      activeLink = link;
      clearTimeout(showTimer);
      showTimer = setTimeout(() => {
        if (activeLink !== link) return;
        position(link);
        urlLabel.textContent = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
        preview.classList.add("is-visible");
        clearHoverPolls();
        const cached = resolvedCache.get(url);
        if (cached) {
          img.src = cached;
          return;
        }
        sessionToken += 1;
        const mySession = sessionToken;
        loadWithRetries(url, (src) => { img.src = src; }, mySession, () => sessionToken, hoverPollTimers);
      }, 250);
    });
    link.addEventListener("mouseleave", () => {
      activeLink = null;
      sessionToken += 1;
      clearHoverPolls();
      clearTimeout(showTimer);
      preview.classList.remove("is-visible");
    });
  });

  window.addEventListener("scroll", () => {
    activeLink = null;
    sessionToken += 1;
    clearHoverPolls();
    preview.classList.remove("is-visible");
  }, { passive: true });

  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => preloadAll(previewLinks));
  } else {
    setTimeout(() => preloadAll(previewLinks), 1000);
  }
}

// Touch devices have no hover, so tapping a "Live" link opens an inline
// dropdown under it with the screenshot and an explicit "Open" link, instead
// of a floating hover card. Tapping the same link again (or another one)
// closes it; only one is open at a time.
function initTapPreview(previewLinks, resolvedCache, loadWithRetries) {
  let openPanel = null;
  let openLink = null;
  let tapToken = 0;

  function closeOpenPanel() {
    if (!openPanel) return;
    openPanel.classList.remove("is-open");
    openLink?.setAttribute("aria-expanded", "false");
    openPanel = null;
    openLink = null;
    tapToken += 1;
  }

  previewLinks.forEach((link) => {
    link.setAttribute("aria-expanded", "false");
    // Tapping opens a preview here rather than going straight to the site,
    // so the label shouldn't promise "Live" the way it does on hover devices.
    link.textContent = link.textContent.replace(/^\s*\S+/, "Preview");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (openLink === link) {
        closeOpenPanel();
        return;
      }
      const url = link.getAttribute("data-preview");
      const container = link.closest(".reg-item") || link.closest("li");
      if (!container) return;

      closeOpenPanel();

      let panel = container.querySelector(".link-preview-inline");
      if (!panel) {
        panel = document.createElement("div");
        panel.className = "link-preview-inline";
        panel.innerHTML = `
          <div class="link-preview-frame"><img alt="" /></div>
          <div class="link-preview-inline-foot">
            <span class="link-preview-url"></span>
            <a class="btn link-preview-open" target="_blank" rel="noopener">Open site ↗</a>
          </div>
        `;
        container.appendChild(panel);
      }

      const img = panel.querySelector("img");
      const urlLabel = panel.querySelector(".link-preview-url");
      const openLinkEl = panel.querySelector(".link-preview-open");
      urlLabel.textContent = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
      openLinkEl.href = url;
      const cached = resolvedCache.get(url);
      if (cached) img.src = cached;
      else img.removeAttribute("src");

      panel.classList.add("is-open");
      link.setAttribute("aria-expanded", "true");
      openPanel = panel;
      openLink = link;

      if (!resolvedCache.has(url)) {
        tapToken += 1;
        const myToken = tapToken;
        loadWithRetries(url, (src) => { if (myToken === tapToken) img.src = src; }, myToken, () => tapToken);
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (openLink && !e.target.closest(".link-preview-inline") && e.target !== openLink) {
      closeOpenPanel();
    }
  });
}
