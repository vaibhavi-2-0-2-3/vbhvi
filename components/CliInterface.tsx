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

function makeLinksClickable(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    part.startsWith("http") ? (
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
  const [output, setOutput] = useState<{ type: "centered" | "normal"; content: string }[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();

  // Add output helper
  const addOutput = (command: string, message: string) => {
    setOutput((prev) => [
      ...prev,
      { type: "normal", content: `$ ${command}` },
      { type: "normal", content: message },
      { type: "normal", content: "" },
    ]);
  };

  // Command functions
  const COMMANDS: Record<string, () => string> = {
    help: () => `Available commands:
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
    clear: () => {
      setOutput([]);
      return "";
    },
    gui: () => {
      addOutput("gui", "Switching to GUI mode...");
      setTimeout(onGuiCommand, 500);
      return "";
    },
  };

  // Aliases map to main commands
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

  // Init terminal
  useEffect(() => {
    setTheme("dark");
    setOutput([
      { type: "centered", content: ASCII_ART },
      {
        type: "centered",
        content:
          'Welcome to my portfolio CLI! 👋 Type "help" or "?" to see available commands.',
      },
      { type: "normal", content: "" },
    ]);
  }, [setTheme]);

  // Auto-scroll
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Command handler
  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const resolved = COMMANDS[trimmed]
      ? trimmed
      : ALIASES[trimmed]
        ? ALIASES[trimmed]
        : null;

    if (!resolved || !COMMANDS[resolved]) {
      return addOutput(cmd, `Command not found: ${cmd}. Type "help" for available commands.`);
    }

    const response = COMMANDS[resolved]();
    if (response) addOutput(cmd, response);
  };

  // Submit command
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    handleCommand(input);
    setInput("");
  };

  // Command history navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  // Copy output to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch(console.error);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 font-mono flex flex-col"
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
            {line.type === "centered" ? (
              <div className="overflow-x-auto w-full flex justify-center">
                <pre className="text-green-400 whitespace-pre">
                  {formatCommandLine(line.content)}
                </pre>
              </div>
            ) : (
              <span className="text-green-400 whitespace-pre-wrap">
                {formatCommandLine(line.content)}
              </span>
            )}

            {/* Copy only for command responses */}
            {line.content.trim() && !line.content.startsWith("$") && (
              <button
                title="Copy to clipboard"
                onClick={() => copyToClipboard(line.content)}
                className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-4 w-4 text-green-500" />
              </button>
            )}
          </div>
        ))}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center sticky bottom-0 py-2"
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
