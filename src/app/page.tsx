import AllFeatures from "@/components/ui/Home/AllFeatures";
import Banner from "@/components/ui/Home/Banner";
import UpcomingService from "@/components/ui/Home/UpcomingService";
import Navbar from "@/components/ui/Navbar/Navbar";
import AllServices from "@/components/ui/Home/AllServices";
import AboutTravel from "@/components/ui/Home/AboutTravel";
import Testimonials from "@/components/ui/Home/Testimonials";
import Blogs from "@/components/ui/Home/Blogs";
import Footer from "@/components/ui/Footer/Footer";
import { PublicHeaderItem } from "@/constants";

export default function Home() {
  return (
    <>
      <Navbar items={PublicHeaderItem} />
      <Banner />
      <AllFeatures />
      <AboutTravel />
      <UpcomingService />
      <AllServices />
      <Testimonials />
      <Blogs />
    </>
  );
}
