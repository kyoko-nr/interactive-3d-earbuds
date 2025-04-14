import { ColorName } from "../constants/colors";
import { TextureName } from "../constants/textures";

type Props<T, U extends ColorName | TextureName> = {
  /** title */
  title: string;
  //** options */
  readonly options: readonly {
    readonly name: U;
    readonly value: T;
  }[];
  /** on click button */
  onClick: (value: T) => void;
};

const buttonStyle = {
  white: `bg-white border border-gray-400`,
  gray: `bg-[#a6a6a6]`,
  blue: `bg-[#8FB6D9]`,
  green: `bg-[#A4BFA8]`,
  purple: `bg-[#B270A0]`,
  peach: `bg-[#E87A7A]`,
  None: `bg-[#ffffff] border border-gray-400`,
  Denim: "bg-[url(/textures/Fabric077.jpg)]",
  Wood: "bg-[url(/textures/Wood052.jpg)]",
} satisfies Record<ColorName | TextureName, string>;

/**
 * Button group
 */
export const ButtonGroup = <T, U extends ColorName | TextureName>({
  title,
  options,
  onClick,
}: Props<T, U>) => {
  return (
    <div>
      <p className="text-base font-medium mb-2">{title}</p>
      <ul className="flex gap-2 max-md:gap-1">
        {options.map((option) => (
          <li key={String(option.name)}>
            <button
              className={`pointer-events-auto cursor-pointer size-8 rounded-[50%] hover:scale-110 transition-[scale] duration-200 ${
                buttonStyle[option.name]
              }`}
              onClick={() => onClick(option.value)}
              aria-label={`${option.name}`}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
