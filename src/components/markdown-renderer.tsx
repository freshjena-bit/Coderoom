"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose-content max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !className;
            if (isInline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <CodeBlock language={match?.[1] || "text"}>
                {String(children).replace(/\n$/, "")}
              </CodeBlock>
            );
          },
          pre({ children }) {
            return <>{children}</>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    toast.success("Kode disalin ke clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4">
      <div className="flex items-center justify-between rounded-t-lg bg-zinc-800 px-4 py-1.5">
        <span className="text-xs font-medium text-zinc-400 uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Tersalin
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Salin
            </>
          )}
        </button>
      </div>
      <pre className="!mt-0 !rounded-t-none overflow-x-auto bg-zinc-900 text-zinc-100 p-4 text-sm">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
