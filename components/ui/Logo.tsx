import Image from "next/image";

type Props = {
  logo: string;
};

export default function Logo({ logo }: Props) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="Logo" width={45} height={45} />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-black lg:text-white text-lg">
          Company Name
        </p>
        <span className="text-sm text-black lg:text-white">
          Company Tagline
        </span>
      </div>
    </div>
  );
}
