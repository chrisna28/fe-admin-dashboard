import Image from "next/image";

interface Props {
  logo: string;
  color?: string;
  width?: number;
  height?: number;
  name?: boolean;
  tagline?: boolean;
}

export default function Logo({
  logo,
  color = "white",
  width = 45,
  height = 45,
  name = true,
  tagline = true,
}: Props) {
  return (
    <div className="flex flex-row items-center">
      <Image src={logo} alt="Logo" width={width} height={height} />
      <div className="flex flex-col">
        {name && (
          <span className={`text-lg font-semibold text-${color} pl-2`}>
            Company Name
          </span>
        )}
        {tagline && (
          <span className={`text-sm text-${color} pl-2`}>Company Tagline</span>
        )}
      </div>
    </div>
  );
}
