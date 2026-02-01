const output = document.getElementById("output");
const input = document.getElementById("commandInput");
const autocompleteEl = document.getElementById("autocomplete");
const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

// ═══════════════════════════════════════════════════════════════════════════
// MATRIX RAIN BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charArray = chars.split("");
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff9c";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

const matrixInterval = setInterval(drawMatrix, 35);

window.addEventListener("beforeunload", () => {
  clearInterval(matrixInterval);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Recalculate columns and drops array on resize
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// ═══════════════════════════════════════════════════════════════════════════
// BANNER AND COMMANDS
// ═══════════════════════════════════════════════════════════════════════════
const banner = `
██╗  ██╗███╗   ██╗██╗   ██╗██╗     ██╗     ██╗  ██╗
██║ ██╔╝████╗  ██║██║   ██║██║     ██║     ╚██╗██╔╝
█████╔╝ ██╔██╗ ██║██║   ██║██║     ██║      ╚███╔╝ 
██╔═██╗ ██║╚██╗██║██║   ██║██║     ██║      ██╔██╗ 
██║  ██╗██║ ╚████║╚██████╔╝███████╗███████╗██╔╝ ██╗
╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

Welcome to knullx.me - Security | Systems | Data Engineering
Type 'help' to get started. Try 'neofetch' for system info.
`;

const neofetchArt = `
        .--.         knullx@me
       |o_o |        ─────────────────────
       |:_/ |        OS: KnullxOS v1.0.0
      //   \\ \\       Host: knullx.me
     (|     | )      Kernel: Terminal-JS
    /'\\_   _/\`\\      Uptime: ${getUptime()}
    \\___)=(___/      Shell: knullx-sh
                     Terminal: Web Browser
                     CPU: Your Brain @ 100%
                     Memory: Unlimited Ideas
                     ─────────────────────
                     Security | Systems | Data
`;

function getUptime() {
  // Shows time since site launch (Jan 1, 2024)
  const siteLaunchDate = new Date(2024, 0, 1);
  const now = new Date();
  const diff = now - siteLaunchDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return `${days} days, ${hours} hours`;
}

const commands = {
  help: `
╔════════════════════════════════════════════════════════════════╗
║  AVAILABLE COMMANDS                                            ║
╠════════════════════════════════════════════════════════════════╣
║  whoami     │ About me - who I am and what I do                ║
║  projects   │ My work and experiments                          ║
║  skills     │ Technical skills and expertise                   ║
║  socials    │ Connect with me                                  ║
║  neofetch   │ Display system information                       ║
║  history    │ Show command history                             ║
║  clear      │ Clear terminal screen                            ║
╠════════════════════════════════════════════════════════════════╣
║  EASTER EGGS                                                   ║
╠════════════════════════════════════════════════════════════════╣
║  matrix     │ Toggle matrix rain effect                        ║
║  hack       │ Start hacking simulation                         ║
║  cowsay     │ Let the cow speak                                ║
║  fortune    │ Get a random fortune                             ║
║  sudo       │ Try it and see...                                ║
╚════════════════════════════════════════════════════════════════╝

Tip: Use ↑/↓ arrows for command history, Tab for autocomplete
`,

  whoami: `
┌─────────────────────────────────────────────────────────────────┐
│  ABOUT ME                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  >> Security Researcher | Systems Engineer | Data Architect     │
│                                                                 │
│  I break things to understand them.                             │
│  I build things to prove they work.                             │
│                                                                 │
│  Passionate about:                                              │
│  ├── Cybersecurity & Penetration Testing                        │
│  ├── Systems Architecture & Low-level Programming               │
│  ├── Data Engineering & Pipeline Design                         │
│  └── Open Source Development                                    │
│                                                                 │
│  "In a world of abstractions, understanding the machine is key" │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`,

  projects: `
┌─────────────────────────────────────────────────────────────────┐
│  PROJECTS                                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [★] GitHub Repository                                          │
│      https://github.com/Aicirou                                 │
│                                                                 │
│  Featured Work:                                                 │
│  ├── 🔐 Security Tools & Research                               │
│  ├── 🛠️  Systems Utilities                                      │
│  ├── 📊 Data Processing Pipelines                               │
│  └── 🧪 Experimental Projects                                   │
│                                                                 │
│  Run 'github' to open my GitHub profile in a new tab            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`,

  skills: `
┌─────────────────────────────────────────────────────────────────┐
│  TECHNICAL SKILLS                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Languages:                                                     │
│  ████████████████████░░░░  Python      ████████████████████░░░░ │
│  ██████████████████░░░░░░  JavaScript  ██████████████████░░░░░░ │
│  ████████████████░░░░░░░░  Go          ████████████████░░░░░░░░ │
│  ██████████████░░░░░░░░░░  Rust        ██████████████░░░░░░░░░░ │
│  ████████████░░░░░░░░░░░░  C/C++       ████████████░░░░░░░░░░░░ │
│                                                                 │
│  Security: Pentesting, Malware Analysis, CTF                    │
│  Systems:  Linux, Docker, Kubernetes, AWS                       │
│  Data:     PostgreSQL, Redis, Kafka, Spark                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`,

  socials: `
┌─────────────────────────────────────────────────────────────────┐
│  CONNECT WITH ME                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🐙  GitHub   :  https://github.com/Aicirou                     │
│                                                                 │
│  Type 'github' to open directly                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
`,

  neofetch: neofetchArt,

  github: () => {
    window.open("https://github.com/Aicirou", "_blank");
    return "Opening GitHub profile...";
  },

  sudo: `
[sudo] password for knullx: ********

Nice try! 😏

You don't have permission to execute commands as root.
But hey, I appreciate the creativity!
`,

  matrix: () => {
    const canvas = document.getElementById("matrix-bg");
    const wasEnabled = canvas.style.opacity !== "0";
    canvas.style.opacity = wasEnabled ? "0" : "0.15";
    return wasEnabled
      ? "Matrix rain disabled. Reality restored."
      : "Matrix rain enabled. Take the red pill.";
  },

  cowsay: (text) => {
    const message = text || "Moo! Try 'cowsay <message>'";
    const border = "_".repeat(message.length + 2);
    return `
 ${border}
< ${message} >
 ${"-".repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
  },

  fortune: () => {
    const fortunes = [
      "The best way to predict the future is to invent it. - Alan Kay",
      "First, solve the problem. Then, write the code. - John Johnson",
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "Programs must be written for people to read. - Harold Abelson",
      "Simplicity is the soul of efficiency. - Austin Freeman",
      "Any fool can write code that a computer can understand.",
      "Talk is cheap. Show me the code. - Linus Torvalds",
      "The only way to learn a new programming language is by writing programs in it.",
      "Sometimes it pays to stay in bed on Monday. - Deep Thought",
      "Security is always excessive until it's not enough.",
      "There are only two hard things: cache invalidation and naming things.",
      "It works on my machine! ¯\\_(ツ)_/¯",
    ];
    return `\n🔮 ${fortunes[Math.floor(Math.random() * fortunes.length)]}\n`;
  },

  date: () => {
    return `\n${new Date().toString()}\n`;
  },

  echo: (text) => {
    return text || "";
  },

  hack: async () => {
    await simulateHack();
    return "";
  },

  history: () => {
    if (commandHistory.length === 0) return "\nNo commands in history.\n";
    return "\n" + commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join("\n") + "\n";
  },

  ls: `
.bashrc    .profile    .ssh/    documents/    projects/    secrets.txt
`,

  cat: (filename) => {
    if (filename === "secrets.txt") {
      return "\n🔐 ACCESS DENIED: Nice try, but secrets stay secret.\n";
    }
    return `cat: ${filename || "[no file specified]"}: Permission denied`;
  },

  pwd: "/home/knullx",

  whoamireally: `
🎭 Behind the terminal:
Just someone who loves technology, security, and building cool things.
Thanks for exploring this interactive portfolio!
`,

  exit: async () => {
    await typeText("\nLogout...\n\nConnection closed.\n\nJust kidding! You can't escape that easily. 😄\n");
    return "";
  },

  "rm -rf /": `
☠️  Nice try, but this terminal is sandboxed!
No filesystems were harmed in the making of this joke.
`,
};

// List of command names for autocomplete (filter out multi-word commands)
const commandNames = Object.keys(commands).filter((name) => !name.includes(" "));

// ═══════════════════════════════════════════════════════════════════════════
// COMMAND HISTORY
// ═══════════════════════════════════════════════════════════════════════════
let commandHistory = [];
let historyIndex = -1;

// ═══════════════════════════════════════════════════════════════════════════
// TYPEWRITER EFFECT
// ═══════════════════════════════════════════════════════════════════════════
let isTyping = false;
const typeSpeed = 5;

async function typeText(text, speed = typeSpeed) {
  isTyping = true;
  for (const char of text) {
    output.textContent += char;
    scrollToBottom();
    await sleep(speed);
  }
  isTyping = false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function scrollToBottom() {
  const terminal = document.getElementById("terminal");
  terminal.scrollTop = terminal.scrollHeight;
}

// ═══════════════════════════════════════════════════════════════════════════
// HACK SIMULATION
// ═══════════════════════════════════════════════════════════════════════════
async function simulateHack() {
  const hackSteps = [
    "Initializing hack sequence...",
    "Connecting to target: 192.168.1.██",
    "Bypassing firewall... [████████████████████] 100%",
    "Exploiting vulnerability CVE-2024-XXXX...",
    "Injecting payload...",
    "Escalating privileges...",
    "Accessing mainframe...",
    "Downloading data... [████░░░░░░░░░░░░░░░░] 20%",
    "Downloading data... [████████░░░░░░░░░░░░] 40%",
    "Downloading data... [████████████░░░░░░░░] 60%",
    "Downloading data... [████████████████░░░░] 80%",
    "Downloading data... [████████████████████] 100%",
    "Erasing traces...",
    "Connection terminated.",
    "",
    "⚠️  JUST KIDDING! This is a simulation.",
    "Remember: Only hack systems you have permission to test!",
    "Stay ethical, stay curious. 🔐",
  ];

  for (const step of hackSteps) {
    output.textContent += "\n" + step;
    scrollToBottom();
    // Use bounded timing (350-450ms) for smoother animation
    await sleep(350 + Math.random() * 100);
  }
  output.textContent += "\n";
}

// ═══════════════════════════════════════════════════════════════════════════
// PRINT FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════
function print(text) {
  output.textContent += text + "\n";
  scrollToBottom();
}

function printInstant(text) {
  output.textContent += text + "\n";
  scrollToBottom();
}

// ═══════════════════════════════════════════════════════════════════════════
// AUTOCOMPLETE
// ═══════════════════════════════════════════════════════════════════════════
function getAutocomplete(partial) {
  if (!partial) return "";
  const matches = commandNames.filter(cmd => cmd.startsWith(partial.toLowerCase()));
  if (matches.length === 1) {
    return matches[0].slice(partial.length);
  }
  return "";
}

function updateAutocomplete() {
  const value = input.value.trim().split(" ")[0];
  autocompleteEl.textContent = getAutocomplete(value);
}

// ═══════════════════════════════════════════════════════════════════════════
// COMMAND PROCESSING
// ═══════════════════════════════════════════════════════════════════════════
async function processCommand(cmd) {
  if (!cmd) return;

  // Add to history
  commandHistory.push(cmd);
  historyIndex = commandHistory.length;

  const parts = cmd.split(" ");
  const command = parts[0].toLowerCase();
  const args = parts.slice(1).join(" ");

  if (command === "clear") {
    output.textContent = "";
    return;
  }

  const handler = commands[command];
  
  if (typeof handler === "function") {
    const result = await handler(args);
    if (result) print(result);
  } else if (handler) {
    print(handler);
  } else {
    print(`\nCommand not found: ${cmd}\nType 'help' for available commands.\n`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════════════
input.addEventListener("input", updateAutocomplete);

input.addEventListener("keydown", async function (e) {
  if (isTyping) {
    e.preventDefault();
    return;
  }

  // Tab for autocomplete
  if (e.key === "Tab") {
    e.preventDefault();
    const completion = getAutocomplete(input.value.trim().split(" ")[0]);
    if (completion) {
      input.value += completion;
      autocompleteEl.textContent = "";
    }
    return;
  }

  // Up arrow for history
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
      updateAutocomplete();
    }
    return;
  }

  // Down arrow for history
  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = "";
    }
    updateAutocomplete();
    return;
  }

  // Enter to execute
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    print(`knullx@me:~$ ${cmd}`);
    input.value = "";
    autocompleteEl.textContent = "";
    await processCommand(cmd);
  }
});

// Keep focus on input, but allow text selection in output area
document.addEventListener("click", (event) => {
  if (!output || !event.target) {
    input.focus();
    return;
  }
  // Do not steal focus when clicking inside the output element
  if (!output.contains(event.target)) {
    input.focus();
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════
async function init() {
  await typeText(banner, 3);
}

init();
