import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Template Tester — Test AI Prompts Across Multiple Models',
  description: 'Run the same prompt against GPT-4, Claude, and other models to compare outputs and costs instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ac86feac-352f-4ac9-bcd7-c7a7eea62775"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
