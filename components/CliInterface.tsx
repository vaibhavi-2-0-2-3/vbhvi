"use client";

import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/resume";

const ALIASES: Record<string, string> = {
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

const COMMANDS: Record<string, string | (() => string)> = {
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
      .map(
        (edu) =>
          `${edu.school} - ${edu.degree}\n${edu.start} - ${edu.end}`
      )
      .join("\n"),
  clear: "CLEAR",
  gui: "GUI",
};

export function CliInterface({ onGuiCommand }: { onGuiCommand: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const base = trimmed.split(" ")[0];
    const command = ALIASES[base] || base;

    if (command === "clear") {
      setHistory([]);
      return;
    }

    if (command === "gui") {
      setHistory((prev) => [...prev, `$ ${cmd}`, "Switching to GUI mode...\n"]);
      setTimeout(() => {
        onGuiCommand();
      }, 500);
      return;
    }

    const response = COMMANDS[command];

    const output =
      typeof response === "function"
        ? response()
        : response || `Command not found: ${trimmed}`;

    setHistory((prev) => [...prev, `$ ${cmd}`, output, ""]);
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
        const nextIndex = historyIndex + 1;
        setInput(commandHistory[nextIndex]);
        setHistoryIndex(nextIndex);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setInput(commandHistory[nextIndex]);
        setHistoryIndex(nextIndex);
      } else {
        setInput("");
        setHistoryIndex(-1);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full h-screen bg-black text-white font-mono p-6 overflow-hidden">
      <div className="max-w-4xl mx-auto overflow-y-auto h-full">
        <pre className="text-green-500 text-sm mb-6">
          {` 

██╗   ██╗ █████╗ ██╗██████╗ ██╗  ██╗ █████╗ ██╗   ██╗██╗     ██████╗██╗     ██╗
██║   ██║██╔══██╗██║██╔══██╗██║  ██║██╔══██╗██║   ██║██║    ██╔════╝██║     ██║
██║   ██║███████║██║██████╔╝███████║███████║██║   ██║██║    ██║     ██║     ██║
╚██╗ ██╔╝██╔══██║██║██╔══██╗██╔══██║██╔══██║╚██╗ ██╔╝██║    ██║     ██║     ██║
 ╚████╔╝ ██║  ██║██║██████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║    ╚██████╗███████╗██║
  ╚═══╝  ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝     ╚═════╝╚══════╝╚═╝
                                                                                                                                                                                                                                                
Welcome to Vaibhavi's portfolio CLI! 👋
Type "help" or "?" to see available commands.
`}
        </pre>

        <div className="space-y-2 text-sm">
          {history.map((line, i) => (
            <p key={i} className="whitespace-pre-wrap text-white">{line}</p>
          ))}
          <div ref={bottomRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center mt-4 text-sm"
        >
          <span className="text-purple-400">dev@vaibhavi</span>
          <span className="text-green-400 ml-1">:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-white outline-none ml-2 flex-1"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
