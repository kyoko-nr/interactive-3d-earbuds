import { EarbudsScene } from "./components/EarbudsScene";
import { MaterialChanger } from "./components/MaterialChanger";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <main className="w-full h-full">
        <EarbudsScene />
        <MaterialChanger />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        フッターです
      </footer>
    </div>
  );
}
