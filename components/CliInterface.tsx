"use client";

import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Copy, ArrowLeft } from "lucide-react";

const ASCII_ART = `
██╗   ██╗ █████╗ ██╗██████╗ ██╗  ██╗ █████╗ ██╗   ██╗██╗     ██████╗██╗     ██╗
██║   ██║██╔══██╗██║██╔══██╗██║  ██║██╔══██╗██║   ██║██║    ██╔════╝██║     ██║
██║   ██║███████║██║██████╔╝███████║███████║██║   ██║██║    ██║     ██║     ██║
╚██╗ ██╔╝██╔══██║██║██╔══██╗██╔══██║██╔══██║╚██╗ ██╔╝██║    ██║     ██║     ██║
 ╚████╔╝ ██║  ██║██║██████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║    ╚██████╗███████╗██║
  ╚═══╝  ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═════╝╚══════╝╚═╝
`;

const ALIASES = {
  h: "help",
  "?": "help",
  a: "about",
  s: "skills",
  p: "projects",
  ls: "projects",
  c: "contact",
  edu: "education",
  g: "gui",
};

const COMMANDS = {
  help: `Available commands:
  help (h, ?)       - Show this help message
  about (a)         - About me
  skills (s)        - List my skills
  projects (p, ls)  - List my projects
  contact (c)       - Contact info
  education (edu)   - My education
  clear             - Clear terminal
  gui (g)           - Go back to GUI view`,

  about: () => `${DATA.name}\n${DATA.description}\n\n${DATA.summary}`,
  skills: () => `Skills:\n${DATA.skills.join(", ")}`,
  projects: () =>
    DATA.projects
      .map(
        (p) =>
          `\n${p.title}\n${p.description}\nTech: ${p.technologies.join(", ")}`
      )
      .join("\n"),
  contact: () =>
    `Email: ${DATA.contact.email}\n` +
    Object.entries(DATA.contact.social)
      .map(([platform, value]) => `${platform}: ${value.url}`)
      .join("\n"),
  education: () =>
    DATA.education
      .map((edu) => `${edu.school} - ${edu.degree}\n${edu.start} - ${edu.end}`)
      .join("\n"),
  clear: "CLEAR",
  gui: "GUI",
};

function makeLinksClickable(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:text-green-300 underline underline-offset-4"
        onClick={(e) => e.stopPropagation()}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

function formatCommandLine(line: string) {
  if (line.startsWith("$")) {
    return (
      <>
        <span className="text-green-400">dev@vaibhavi:~</span>{" "}
        <span className="text-green-300">$</span> {line.slice(1)}
      </>
    );
  }
  return makeLinksClickable(line);
}

export function CliInterface({ onGuiCommand }: { onGuiCommand: () => void }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<
    { type: "centered" | "normal"; content: string }[]
  >([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setOutput([
      { type: "centered", content: ASCII_ART },
      { type: "centered", content: "Welcome to my portfolio CLI! 👋" },
      { type: "centered", content: 'Type "help" or "?" to see available commands.' },
      { type: "normal", content: "" },
    ]);
  }, [setTheme]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const resolvedCmd =
      ALIASES[trimmedCmd as keyof typeof ALIASES] || trimmedCmd;

    if (resolvedCmd === "clear") {
      setOutput([]);
      return;
    }

    if (resolvedCmd === "gui") {
      setOutput((prev) => [...prev, { type: "normal", content: `$ ${cmd}` }, { type: "normal", content: "Switching to GUI mode..." }, { type: "normal", content: "" }]);
      setTimeout(onGuiCommand, 500);
      return;
    }

    const result = COMMANDS[resolvedCmd as keyof typeof COMMANDS];
    if (!result) {
      setOutput((prev) => [
        ...prev,
        { type: "normal", content: `$ ${cmd}` },
        { type: "normal", content: `Command not found: ${cmd}. Type "help" for available commands.` },
        { type: "normal", content: "" },
      ]);
      return;
    }

    const response = typeof result === "function" ? result() : result;
    setOutput((prev) => [
      ...prev,
      { type: "normal", content: `$ ${cmd}` },
      { type: "normal", content: response },
      { type: "normal", content: "" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setCommandHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    handleCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(console.error);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black font-mono flex flex-col"
    >
      {/* Back Button */}
      <div className="absolute top-3 left-4 z-50">
        <button
          onClick={onGuiCommand}
          className="flex items-center gap-2 px-3 py-2 rounded bg-black/50 border border-green-400/30 text-green-400 hover:bg-green-400/10 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4" ref={outputRef}>
        {output.map((line, i) => (
          <div
            key={i}
            className={`group relative whitespace-pre-wrap ${line.type === "centered" ? "flex justify-center" : "text-left"
              }`}
          >
            {line.type === "centered" && i <= 2 ? ( // Only ASCII + welcome lines
              <div className="border border-green-500 p-2 rounded">
                <span className="text-green-400 whitespace-pre-wrap">
                  {formatCommandLine(line.content)}
                </span>
              </div>
            ) : (
              <span className="text-green-400">{formatCommandLine(line.content)}</span>
            )}

            {line.content.trim() && (
              <button
                title="copy-btn"
                onClick={() => copyToClipboard(line.content)}
                className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-4 w-4 text-green-500" />
              </button>
            )}
          </div>
        ))}


        <div ref={bottomRef} />

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center sticky bottom-0 bg-black py-2"
        >
          <span className="text-green-400">dev@vaibhavi:~</span>
          <span className="text-green-300">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none ml-2 text-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </motion.div>
  );
}
