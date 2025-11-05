import {
  Users,
  Briefcase,
  CheckCircle2,
  Mail,
  ExternalLink,
} from "lucide-react";
import { cn } from "../lib/utils";
import { StaticImageData } from "next/image";

interface DesignerCardProps {
  name: string;
  description: string;
  followers: number;
  projects: number;
  image: StaticImageData;
  isVerified?: boolean;
  className?: string;
}

const DesignerCard = ({
  name,
  description,
  followers,
  projects,
  image,
  isVerified = false,
  className,
}: DesignerCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-[450px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
        className
      )}
    >
      <div className="absolute inset-0">
        <img
          src={image.src}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10  border-white/10 p-6 text-white">
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-2xl font-poppins font-semibold">{name}</h3>
          {isVerified && <CheckCircle2 className="h-5 w-5 text-[#1D9BF0]" />}
        </div>

        <p className="mb-4 text-sm opacity-90">{description}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm opacity-90">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>{followers}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              <span>{projects}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="hover:scale-[105%] transition-all duration-300 sm:gap-1.5 flex items-center sm:bg-white text-black px-1 sm:px-4 py-2 rounded-xl font-medium sm:shadow-md sm:not-[]:hover:bg-neutral-200">
              <span className="hidden sm:block">Contact</span>
              <Mail className="text-white sm:text-black h-5 w-5 sm:h-4 sm:w-4" />
            </button>
            <button className="hover:scale-[105%] transition-all duration-300 gap-1.5 flex items-center sm:bg-white text-black px-2 sm:px-4 py-2 rounded-xl font-medium sm:shadow-md sm:hover:bg-neutral-200">
              <span className="hidden sm:block">Portfolio</span>
              <ExternalLink className="text-white sm:text-black h-5 w-5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;
