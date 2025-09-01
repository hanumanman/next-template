import { ModeToggle } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-background flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Next TTS</h1>
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/text-to-speech">
          <Button variant="ghost">TTS</Button>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  )
}
