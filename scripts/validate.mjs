import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/newsletter/SKILL.md",
  "skills/newsletter/agents/openai.yaml",
  "skills/newsletter/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/newsletter/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: newsletter\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add newsletter")) throw new Error("Missing install shortcut");
console.log("newsletterskill.com ok");
