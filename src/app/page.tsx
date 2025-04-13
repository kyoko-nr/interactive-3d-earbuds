import { EarbudsScene } from "./components/EarbudsScene";
import { InteractionPanel } from "./components/InteractionPanel";
import { RotationButtons } from "./components/RotationButtons";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <main className="h-full">
        <Title />
        <EarbudsScene />
        <div className="absolute top-[50%] left-10 -translate-y-[50%]">
          <InteractionPanel />
        </div>
        <div className="absolute bottom-10 right-10">
          <RotationButtons />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        フッターです
      </footer>
    </div>
  );
}
