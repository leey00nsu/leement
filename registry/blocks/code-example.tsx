"use client";

/*
 * Adapted from Kibo UI: https://github.com/shadcnblocks/kibo
 * Kibo UI MIT license follows. Keep this notice with the source.
 *
 * Copyright (c) 2023 — Present shadcnblocks
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type CodeSnippet = {
  id: string;
  language: string;
  label: string;
  filename: string;
  code: string;
};
export type CodeExampleProps = {
  tagline?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  snippets?: CodeSnippet[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  className?: string;
};
const defaultSnippets: CodeSnippet[] = [
  {
    id: "javascript",
    language: "javascript",
    label: "Javascript",
    filename: "utils.js",
    code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};`,
  },
  {
    id: "python",
    language: "python",
    label: "Python",
    filename: "utils.py",
    code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

def debounce(func, delay):
    import threading
    timer = None
    def wrapper(*args, **kwargs):
        nonlocal timer
        if timer:
            timer.cancel()
        timer = threading.Timer(delay, func, args, kwargs)
        timer.start()
    return wrapper

def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper`,
  },
  {
    id: "go",
    language: "go",
    label: "Go",
    filename: "utils.go",
    code: `package utils

func Fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}

func Filter[T any](slice []T, predicate func(T) bool) []T {
    result := make([]T, 0)
    for _, item := range slice {
        if predicate(item) {
            result = append(result, item)
        }
    }
    return result
}

func Map[T, U any](slice []T, transform func(T) U) []U {
    result := make([]U, len(slice))
    for i, item := range slice {
        result[i] = transform(item)
    }
    return result
}`,
  },
  {
    id: "ruby",
    language: "ruby",
    label: "Ruby",
    filename: "utils.rb",
    code: `def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

def debounce(delay, &block)
  @timer&.cancel
  @timer = Thread.new do
    sleep(delay)
    block.call
  end
end

def memoize(method_name)
  cache = {}
  define_method(method_name) do |*args|
    cache[args] ||= super(*args)
  end
end`,
  },
];

export function CodeExample({
  tagline = "./install.sh",
  heading = "WRITE CODE.",
  headingHighlight = "SHIP FASTER.",
  description = "Inspect and copy reusable code in the language you need.",
  buttonText = "Get started",
  buttonUrl,
  snippets = defaultSnippets,
  value,
  defaultValue,
  onValueChange,
  className,
}: CodeExampleProps) {
  const [internal, setInternal] = useState(defaultValue ?? snippets[0]?.id);
  const current =
    snippets.find((snippet) => snippet.id === (value ?? internal)) ??
    snippets[0];
  return (
    <section className={cn("w-full min-w-0 py-12 sm:py-20", className)}>
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0 space-y-6">
          <p className="text-sm text-muted-foreground">{tagline}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {heading}
            <br />
            <span className="text-muted-foreground">{headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground">{description}</p>
          {buttonUrl && (
            <Button size="lg" asChild>
              <a href={buttonUrl}>
                {buttonText}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
          )}
        </div>
        <div className="min-w-0">
          {current ? (
            <Tabs
              value={current.id}
              onValueChange={(next) => {
                if (
                  typeof next !== "string" ||
                  !snippets.some((snippet) => snippet.id === next)
                )
                  return;
                if (value === undefined) setInternal(next);
                onValueChange?.(next);
              }}
            >
              <TabsList
                aria-label="Code language"
                className="h-auto max-w-full flex-wrap"
              >
                {snippets.map((snippet) => (
                  <TabsTrigger key={snippet.id} value={snippet.id}>
                    {snippet.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {snippets.map((snippet) => (
                <TabsContent key={snippet.id} value={snippet.id}>
                  <CodeBlock
                    code={snippet.code}
                    language={snippet.language}
                    filename={snippet.filename}
                    showLineNumbers
                    className="max-h-96 overflow-y-auto"
                  />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <p
              role="status"
              className="rounded-xl bg-muted p-6 text-sm text-muted-foreground"
            >
              No code samples to display.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
