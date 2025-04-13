import { COLOR_OPTIONS, ColorName } from "../constants/colors";
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
  white: `bg-[${COLOR_OPTIONS[0].value}] border border-gray-400`,
  grey: `bg-[${COLOR_OPTIONS[1].value}]`,
  blue: `bg-[${COLOR_OPTIONS[2].value}]`,
  green: `bg-[${COLOR_OPTIONS[3].value}]`,
  purple: `bg-[${COLOR_OPTIONS[4].value}]`,
  peach: `bg-[${COLOR_OPTIONS[5].value}]`,
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
      <p className="text-xl font-medium mb-4">{title}</p>
      <ul className="flex gap-4">
        {options.map((option) => (
          <li key={String(option.name)}>
            <button
              className={`pointer-events-auto cursor-pointer size-10 rounded-sm hover:scale-110 transition-[scale] duration-200 ${
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
