const nodes = [
  {
    id: "uiux",
    title: "UI/UX Systems",
    symbol: "UX",
    top: 18,
    left: 10,
    unlocked: true,
    size: 92,
    branch: "Design",
    tier: "Mastery",
    skill: "Connected usability, visual hierarchy, and interface decision making."
  },
  {
    id: "advweb",
    title: "Advanced Web Platforms",
    symbol: "AW",
    top: 18,
    left: 25,
    unlocked: true,
    size: 74,
    branch: "App Development",
    tier: "IV",
    skill: "Handled larger platform flows and more advanced web architecture."
  },
  {
    id: "linux",
    title: "Linux Systems Administration",
    symbol: "LNX",
    top: 18,
    left: 40,
    unlocked: true,
    size: 74,
    branch: "Systems",
    tier: "IV",
    skill: "Handled system-side administration and environment control on Linux."
  },
  {
    id: "webdev",
    title: "Web Development",
    symbol: "WEB",
    top: 34,
    left: 18,
    unlocked: true,
    size: 82,
    branch: "App Development",
    tier: "III",
    skill: "Built websites and translated structure into working interfaces."
  },
  {
    id: "im",
    title: "Information Management",
    symbol: "IM",
    top: 34,
    left: 48,
    unlocked: true,
    size: 78,
    branch: "Data",
    tier: "III",
    skill: "Understood how information is stored, organized, and governed."
  },
  {
    id: "prog2",
    title: "Computer Programming 2",
    symbol: "C2",
    top: 50,
    left: 26,
    unlocked: true,
    size: 68,
    branch: "Programming",
    tier: "II",
    skill: "Strengthened implementation flow and deeper programming discipline."
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    symbol: "OOP",
    top: 50,
    left: 56,
    unlocked: true,
    size: 68,
    branch: "App Development",
    tier: "II",
    skill: "Applied reusable structures, classes, and object-driven design."
  },
  {
    id: "prog1",
    title: "Computer Programming 1",
    symbol: "C1",
    top: 66,
    left: 20,
    unlocked: true,
    size: 68,
    branch: "Programming",
    tier: "I",
    skill: "Learned coding logic, syntax, and structured problem solving."
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    symbol: "DSA",
    top: 66,
    left: 42,
    unlocked: true,
    size: 72,
    branch: "Core",
    tier: "I",
    skill: "Learned to organize data and approach problems with efficient logic."
  },
  {
    id: "intro",
    title: "Introduction to Computing",
    symbol: "PC",
    top: 66,
    left: 66,
    unlocked: true,
    size: 108,
    branch: "Core",
    tier: "Origin",
    skill: "Built the base mindset for navigating the wider IT field."
  },
  {
    id: "discrete",
    title: "Discrete Mathematics",
    symbol: "DM",
    top: 82,
    left: 22,
    unlocked: true,
    size: 64,
    branch: "Theory",
    tier: "I",
    skill: "Improved logical analysis and mathematical structure in technical work."
  },
  {
    id: "db",
    title: "Advanced Database Systems",
    symbol: "DB",
    top: 82,
    left: 44,
    unlocked: true,
    size: 64,
    branch: "Data",
    tier: "II",
    skill: "Worked deeper with database design, structure, and persistence."
  },
  {
    id: "net1",
    title: "Networking 1",
    symbol: "N1",
    top: 82,
    left: 66,
    unlocked: true,
    size: 64,
    branch: "Networking",
    tier: "I",
    skill: "Built the first layer of network concepts, flow, and connectivity."
  },
  {
    id: "pm",
    title: "IT Project Management",
    symbol: "PM",
    top: 82,
    left: 84,
    unlocked: true,
    size: 64,
    branch: "Management",
    tier: "II",
    skill: "Learned planning, delivery pacing, and scope control for projects."
  },
  {
    id: "ias",
    title: "Information Assurance & Security",
    symbol: "SEC",
    top: 96,
    left: 18,
    unlocked: true,
    size: 62,
    branch: "Security",
    tier: "III",
    skill: "Developed awareness of protection, trust, and secure system thinking."
  },
  {
    id: "esa",
    title: "Enterprise Systems Administration",
    symbol: "ESA",
    top: 96,
    left: 38,
    unlocked: true,
    size: 64,
    branch: "Systems",
    tier: "IV",
    skill: "Linked infrastructure thinking with larger administrative environments."
  },
  {
    id: "capstone",
    title: "Capstone Project",
    symbol: "CAP",
    top: 96,
    left: 58,
    unlocked: false,
    size: 62,
    branch: "Endgame",
    tier: "Future",
    skill: "A culminating project node still locked behind later progression."
  },
  {
    id: "elective",
    title: "Technical Elective",
    symbol: "ELC",
    top: 96,
    left: 76,
    unlocked: false,
    size: 62,
    branch: "Endgame",
    tier: "Future",
    skill: "A specialization branch that opens once later choices are available."
  },
  {
    id: "ethics",
    title: "Professional Ethics in IT",
    symbol: "ETH",
    top: 96,
    left: 92,
    unlocked: false,
    size: 58,
    branch: "Endgame",
    tier: "Future",
    skill: "Professional responsibility and conduct reserved for later study."
  },
  {
    id: "social",
    title: "Social & Professional Issues",
    symbol: "SPI",
    top: 110,
    left: 66,
    unlocked: false,
    size: 60,
    branch: "Endgame",
    tier: "Future",
    skill: "Wider professional context and issue analysis still ahead."
  },
  {
    id: "ojt",
    title: "IT Practicum / OJT",
    symbol: "OJT",
    top: 110,
    left: 84,
    unlocked: false,
    size: 78,
    branch: "Endgame",
    tier: "Future",
    skill: "The real-world practicum node, reserved for the final stage."
  }
];

const connections = [
  { from: "uiux", to: "advweb", via: [[17, 18], [17, 18]] },
  { from: "uiux", to: "linux", via: [[17, 18], [40, 18]] },
  { from: "advweb", to: "webdev", via: [[25, 26], [18, 26], [18, 34]] },
  { from: "linux", to: "im", via: [[48, 18], [48, 34]] },
  { from: "webdev", to: "prog2", via: [[26, 34], [26, 50]] },
  { from: "im", to: "oop", via: [[56, 34], [56, 50]] },
  { from: "prog2", to: "prog1", via: [[20, 50], [20, 66]] },
  { from: "oop", to: "dsa", via: [[42, 50], [42, 66]] },
  { from: "prog1", to: "intro", via: [[20, 72], [66, 72], [66, 66]] },
  { from: "dsa", to: "intro", via: [[66, 66]] },
  { from: "intro", to: "discrete", via: [[66, 82], [22, 82]] },
  { from: "intro", to: "db", via: [[44, 66], [44, 82]] },
  { from: "intro", to: "net1", via: [[66, 82]] },
  { from: "intro", to: "pm", via: [[84, 66], [84, 82]] },
  { from: "discrete", to: "ias", via: [[18, 82], [18, 96]] },
  { from: "db", to: "esa", via: [[38, 82], [38, 96]] },
  { from: "net1", to: "capstone", via: [[58, 82], [58, 96]] },
  { from: "pm", to: "elective", via: [[76, 82], [76, 96]] },
  { from: "pm", to: "ethics", via: [[92, 82], [92, 96]] },
  { from: "capstone", to: "social", via: [[66, 96], [66, 110]] },
  { from: "elective", to: "ojt", via: [[84, 96], [84, 110]] }
];

const nodesById = new Map(nodes.map((node) => [node.id, node]));
const linksLayer = document.getElementById("tree-links");
const nodesLayer = document.getElementById("tree-nodes");

const detailTitle = document.getElementById("detail-title");
const detailSubject = document.getElementById("detail-subject");
const detailState = document.getElementById("detail-state");
const detailSkill = document.getElementById("detail-skill");
const detailBranch = document.getElementById("detail-branch");
const detailTier = document.getElementById("detail-tier");

linksLayer.setAttribute("viewBox", "0 0 100 112");
linksLayer.setAttribute("preserveAspectRatio", "none");

function updateDetails(node) {
  detailTitle.textContent = node.title;
  detailSubject.textContent = `Subject: ${node.title}`;
  detailState.textContent = node.unlocked ? "Unlocked" : "Locked until Fourth Year progression";
  detailSkill.textContent = `Skill learned: ${node.skill}`;
  detailBranch.textContent = node.branch;
  detailTier.textContent = node.tier;
}

function setActive(button, node) {
  document.querySelectorAll(".tree-node").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  updateDetails(node);
}

function buildPointList(connection) {
  const from = nodesById.get(connection.from);
  const to = nodesById.get(connection.to);
  const points = [[from.left, from.top], ...(connection.via || []), [to.left, to.top]];
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function drawConnections() {
  linksLayer.innerHTML = "";

  connections.forEach((connection) => {
    const from = nodesById.get(connection.from);
    const to = nodesById.get(connection.to);
    if (!from || !to) return;

    const unlockedPath = from.unlocked && to.unlocked;
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", buildPointList(connection));
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", unlockedPath ? "rgba(244, 204, 112, 0.92)" : "rgba(108, 89, 66, 0.82)");
    polyline.setAttribute("stroke-width", unlockedPath ? "0.85" : "0.55");
    polyline.setAttribute("stroke-linecap", "round");
    polyline.setAttribute("stroke-linejoin", "round");
    if (unlockedPath) {
      polyline.style.filter = "drop-shadow(0 0 8px rgba(231, 177, 84, 0.35))";
    }
    linksLayer.appendChild(polyline);
  });
}

function createNodeButton(node, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tree-node ${node.unlocked ? "is-unlocked" : "is-locked"}`;
  button.style.top = `${node.top}%`;
  button.style.left = `${node.left}%`;
  button.style.width = `${node.size}px`;
  button.style.height = `${node.size}px`;
  button.setAttribute("aria-label", node.title);
  button.innerHTML = `<span class="tree-node-symbol">${node.symbol}</span>`;

  const showDetails = () => updateDetails(node);
  button.addEventListener("mouseenter", showDetails);
  button.addEventListener("focus", showDetails);
  button.addEventListener("click", () => setActive(button, node));

  if (index === 0) {
    button.classList.add("is-active");
    updateDetails(node);
  }

  return button;
}

function drawTree() {
  drawConnections();
  nodesLayer.innerHTML = "";
  nodes.forEach((node, index) => nodesLayer.appendChild(createNodeButton(node, index)));
}

drawTree();
