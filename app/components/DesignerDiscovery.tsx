import DesignerCard from "./DesignerCard";
import designer1 from "../assets/designer-1.jpg";
import designer2 from "../assets/designer-2.jpg";
import designer3 from "../assets/designer-3.jpg";
import designer4 from "../assets/designer-4.jpg";
import designer5 from "../assets/designer-5.jpg";
import designer6 from "../assets/designer-6.jpg";
import Navbar from "./Navbar";

const designers = [
  {
    id: 1,
    name: "Elena Rodriguez",
    description: "A fashion designer focused on sustainable haute couture.",
    followers: 312,
    projects: 48,
    image: designer1,
    isVerified: true,
  },
  {
    id: 2,
    name: "Marcus Chen",
    description: "Contemporary menswear designer with a minimalist approach.",
    followers: 524,
    projects: 62,
    image: designer2,
    isVerified: true,
  },
  {
    id: 3,
    name: "Sophia Laurent",
    description: "Avant-garde designer pushing boundaries in modern fashion.",
    followers: 891,
    projects: 73,
    image: designer3,
    isVerified: true,
  },
  {
    id: 4,
    name: "Daniel Kim",
    description: "Street-inspired designer creating urban fashion statements.",
    followers: 427,
    projects: 35,
    image: designer4,
    isVerified: false,
  },
  {
    id: 5,
    name: "Isabella Torres",
    description: "Bold designs merging art and fashion in unique ways.",
    followers: 656,
    projects: 54,
    image: designer5,
    isVerified: true,
  },
  {
    id: 6,
    name: "Alexander Volkov",
    description: "Luxury designer specializing in evening wear and tailoring.",
    followers: 733,
    projects: 81,
    image: designer6,
    isVerified: true,
  },
];

const DesignerDiscovery = () => {
  return (
    <div className="my-2 sm:my-4 mx-4 sm:mx-12 lg:mx-20 font-inter min-h-screen bg-background">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 text-5xl sm:text-7xl font-anton">
        Find Designers
      </div>
      <div className="text-base sm:text-xl mt-3">
        Explore talented designers and discover the creative minds shaping the
        future of fashion
      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designers.map((designer) => (
            <DesignerCard key={designer.id} {...designer} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DesignerDiscovery;
