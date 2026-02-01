const output = document.getElementById("output");
const input = document.getElementById("commandInput");

const banner = `
██╗  ██╗███╗   ██╗██╗   ██╗██╗     ██╗     ██╗  ██╗
██║ ██╔╝████╗  ██║██║   ██║██║     ██║     ╚██╗██╔╝
█████╔╝ ██╔██╗ ██║██║   ██║██║     ██║      ╚███╔╝ 
██╔═██╗ ██║╚██╗██║██║   ██║██║     ██║      ██╔██╗ 
██║  ██╗██║ ╚████║╚██████╔╝███████╗███████╗██╔╝ ██╗
╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

Welcome to knullx.me
Type 'help' to get started.
`;

const commands = {
  help: `
Available commands:
  whoami     - about me
  projects   - my work
  socials    - links
  clear      - clear terminal
`,
  whoami: `
Security | Systems | Data Engineering
Breaking things to understand them.
`,
  projects: `
- GitHub: https://github.com/Aicirou
- Research, tools, experiments
`,
  socials: `
- GitHub : https://github.com/Aicirou
- Twitter: https://twitter.com/
`,
};

function print(text) {
  output.textContent += text + "\n";
  window.scrollTo(0, document.body.scrollHeight);
}

print(banner);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    print(`knullx@me:~$ ${cmd}`);
    input.value = "";

    if (cmd === "clear") {
      output.textContent = "";
      return;
    }

    print(commands[cmd] || `command not found: ${cmd}`);
  }
});
