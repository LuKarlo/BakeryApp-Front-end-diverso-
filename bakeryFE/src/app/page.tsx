import NavBar from "./module/navbar";
import Discover from "./module/discover";
import Hero from "./module/hero";
import Product from "./module/product";
import VisitUs from "./module/visitus";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Discover />
      <Product />
      <VisitUs />
    </div>
  );
}
