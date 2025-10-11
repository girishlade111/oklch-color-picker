import { OKLCHColorPicker } from '../components/OKLCHColorPicker';
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">OKLCH Color Picker</h1>
      <div className="w-full max-w-6xl">
        <OKLCHColorPicker />
      </div>
      <Toaster />
    </main>
  );
}
