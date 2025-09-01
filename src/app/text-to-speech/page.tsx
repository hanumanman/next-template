"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TextToSpeech() {
  const [text, setText] = useState<string>("")
  return (
    <main className="flex grow flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Text to Speech</h1>
      <textarea
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
        className="focus:ring-primary h-32 w-full max-w-2xl resize-none rounded-md border p-3 focus:ring-2 focus:outline-none"
        placeholder="Enter text to convert to speech..."
      />
      <div className="flex gap-2">
        <Button>Speak</Button>
        <Button variant="outline">Stop</Button>
      </div>
    </main>
  )
}
