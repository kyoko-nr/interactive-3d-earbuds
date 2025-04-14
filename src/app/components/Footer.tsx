import { FC } from "react";

/**
 * Footer component
 */
export const Footer: FC = () => (
  <footer className="w-full px-4 py-6 text-xs">
    <p>
      <strong>Model:</strong>
      <a href="https://skfb.ly/oFIzT" target="_blank" rel="noopener noreferrer">
        &quot;AirPods Pro&quot;
      </a>
      by Jed Falcone, licensed under
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC BY 4.0
      </a>
      .
    </p>
    <p className="mt-1">
      <strong>Textures:</strong> Wood 052 and Fabric 077 from
      <a
        href="https://ambientcg.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ambientCG
      </a>
      , licensed under
      <a
        href="https://creativecommons.org/publicdomain/zero/1.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC0 1.0
      </a>
      .
    </p>
  </footer>
);
