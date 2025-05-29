import Earning from "./UI/Earning";
import Hero from "./UI/Hero";
import Navbar from "./UI/Navbar";
import Packs from "./UI/Packs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Earning />
      <Packs />
    </div>
  );
}
