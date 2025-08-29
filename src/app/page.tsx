import { ModeToggle } from "@/components/theme-toggler"

export default function Home() {
  return (
    <main className="flex grow flex-col items-center justify-center gap-2">
      <h1 className="text-lg font-bold">Hello im template</h1>
      <ModeToggle />
    </main>
  )
}
