import { EarbudsScene } from "./components/EarbudsScene";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <main className="w-full h-full">
        <EarbudsScene />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        フッターです
      </footer>
    </div>
  );
}
