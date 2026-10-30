import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import MessMenu from "@/components/MessMenu";
import Gallery from "@/components/Gallery";
import Rules from "@/components/Rules";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0f172a]">
      <Nav />
      <main id="main-content">
        <Hero />
        <Rooms />
        <Amenities />
        <MessMenu />
        <Gallery />
        <Rules />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
