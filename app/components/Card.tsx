import { ArrowUpRight } from "lucide-react";

interface Props {
  heading: string;
  subheading: string;
  img: string;
  onClick: () => void;
  background: string;
  buttonText: string;
  direction: string;
  buttonColor: string;
}

export default function Card(props: Props) {
  const left = props.direction === "left";

  return (
    <div
      className={`rounded-[50px] flex flex-col md:flex-row border border-black/10 h-auto md:h-[350px] overflow-hidden ${
        left ? "md:flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: props.background }}
    >
      <div className="w-full md:w-auto transition-transform duration-500 hover:scale-105">
        <img
          className={`h-[250px] md:h-full w-full ${
            !left
              ? "md:rounded-bl-[50px] md:rounded-tl-[50px]"
              : "md:rounded-br-[50px] md:rounded-tr-[50px]"
          }`}
          src={props.img}
          alt="Fashion illustration"
        />
      </div>

      <div className="flex-1 px-6 md:px-8 py-6 md:py-4 flex flex-col justify-center">
        <div className="font-anton text-4xl sm:text-5xl md:text-[64px] leading-tight">
          {props.heading}
        </div>
        <div className="mt-3 text-base sm:text-lg font-inter">
          {props.subheading}
        </div>
        <div className="mt-8 md:mt-16">
          <button
            onClick={props.onClick}
            className="active:scale-95 cursor-pointer hover:scale-[105%] transition-all duration-300 flex items-center gap-3 md:gap-4  px-5 md:px-6 py-3 md:py-4 rounded-3xl md:rounded-4xl text-white"
            style={{ backgroundColor: props.buttonColor }}
          >
            <span className="text-sm sm:text-base md:text-lg font-medium font-inter tracking-tighter">
              {props.buttonText}
            </span>
            <span className="p-1 rounded-full border">
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
