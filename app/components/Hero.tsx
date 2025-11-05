import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="mt-6 sm:mt-8">
      <div className="flex flex-col-reverse lg:flex-row justify-between rounded-[50px] bg-[#E7E6E4] overflow-hidden">
        <div className="py-7 sm:py-14 px-6 sm:px-10 flex-1">
          <div className="font-anton text-[40px] md:text-6xl xl:text-[80px] leading-[1.1]">
            <div>Custom Fashion</div>
            <div>Crafted for You</div>
          </div>
          <div className="font-inter text-base md:text-xl mt-8 max-w-xl leading-7 sm:leading-8">
            Collaborate with talented independent designers to bring your dream
            outfit to life — or join SEWNA as a designer to showcase your
            creativity.
          </div>
          <div className="mt-8 sm:mt-20">
            <button className="active:scale-95 cursor-pointer hover:scale-[105%] transition-all duration-300 flex items-center gap-4 bg-black px-6 py-4 rounded-4xl text-white">
              <span className="text-base sm:text-lg font-medium font-inter tracking-tighter">
                Join Now
              </span>
              <span className="p-1 rounded-full border">
                <ArrowUpRight />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-1">
          <img
            className="rounded-[50px] w-[80%] lg:w-full lg:h-auto object-cover"
            src="/hero-image.png"
            alt="Fashion illustration"
          />
        </div>
      </div>
    </div>
  );
}
