import { FC } from "react";
import { gabarito } from "../styles/fonts";

/**
 * Title component
 */
export const Title: FC = () => (
  <div className="flex flex-col p-16 gap-[24px] items-center justify-center">
    <h1 className={`${gabarito.variable} font-medium text-6xl tracking-tight`}>
      Interactive 3D Earbuds
    </h1>
    <p className="text-lg">
      A clean and simple design showcasing a 3D earbuds with changable texture
      and color.
    </p>
  </div>
);
