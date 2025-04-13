import { FC } from "react";
import { useModelStore } from "../stores/useModelStore";

/**
 * Model rotation buttons
 */
export const RotationButtons: FC = () => {
  const rotateX = useModelStore((state) => state.rotateX);
  const rotateY = useModelStore((state) => state.rotateY);
  const setRotateX = useModelStore((state) => state.setRotateX);
  const setRotateY = useModelStore((state) => state.setRotateY);

  const buttons = [
    {
      label: "Rotate left",
      style: "bg-[url('/icons/icon_left.svg')]",
      onClick: () => setRotateY(rotateY - 1),
    },
    {
      label: "Rotate right",
      style: "bg-[url('/icons/icon_right.svg')]",
      onClick: () => setRotateY(rotateY + 1),
    },
    {
      label: "Rotate up",
      style: "bg-[url('/icons/icon_left.svg')] rotate-90",
      onClick: () => setRotateX(rotateX - 1),
    },
    {
      label: "Rotate down",
      style: "bg-[url('/icons/icon_right.svg')] rotate-90",
      onClick: () => setRotateX(rotateX + 1),
    },
  ];

  return (
    <div>
      {buttons.map((button) => (
        <button
          key={button.label}
          className="relative border border-gray-400 pointer-events-auto cursor-pointer size-8 rounded-sm hover:bg-gray-200 transition-colors duration-200"
          onClick={button.onClick}
          aria-label={button.label}
        >
          <span
            className={`absolute inset-0 bg-no-repeat bg-center bg-contain transition-transform duration-200 hover:scale-110 ${button.style}`}
          ></span>
        </button>
      ))}
    </div>
  );
};
