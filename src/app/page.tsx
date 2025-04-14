import { EarbudsScene } from "./components/EarbudsScene";
import { Footer } from "./components/Footer";
import { InteractionPanel } from "./components/InteractionPanel";
import { RotationButtons } from "./components/RotationButtons";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <main className="h-full">
        <Title />
        <div className="absolute top-0 left-0 h-full w-full">
          <EarbudsScene />
        </div>
        <div className="absolute top-[50%] left-[5%] -translate-y-[50%] max-md:top-40 max-md:left-1/2 max-md:-translate-x-[50%] max-md:translate-y-0">
          <InteractionPanel />
        </div>
        <div className="absolute right-[5%] bottom-10 max-md:bottom-30">
          <RotationButtons />
        </div>
      </main>
      <div className="absolute bottom-2 left-2">
        <Footer />
      </div>
    </div>
  );
}
