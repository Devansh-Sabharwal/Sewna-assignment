export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between">
        <Logo />
        <Navbuttons />
      </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <div className="text-[#00b67f] text-3xl">
      <span className="text-4xl font-pacifico">se</span>
      <span className="font-poppins font-semibold">W</span>
      <span className="font-poppins font-semibold italic">N</span>
      <span className="text-4xl font-poppins font-semibold">a</span>
    </div>
  );
};
const Navbuttons = () => {
  return (
    <div className="flex gap-14 text-lg font-inter">
      <span className="cursor-pointer hover:scale-[102%] transition-all duration-300">
        Features
      </span>
      <span className="cursor-pointer hover:scale-[102%] transition-all duration-300">
        Contact
      </span>
      <span className="cursor-pointer hover:scale-[102%] transition-all duration-300">
        About Us
      </span>
    </div>
  );
};
