import AllFeatures from "@/components/ui/Home/AllFeatures";
import Banner from "@/components/ui/Home/Banner";
import UpcomingService from "@/components/ui/Home/UpcomingService";
import Navbar from "@/components/ui/Navbar/Navbar";
import AllServices from "@/components/ui/Home/AllServices";
import AboutTravel from "@/components/ui/Home/AboutTravel";
import Testimonials from "@/components/ui/Home/Testimonials";
import Blogs from "@/components/ui/Home/Blogs";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  const items = [
    { key: "0", href: "/", label: "Home" },
    {
      key: "1",
      href: "/about-us",
      label: "About us",
    },
    {
      key: "2",
      href: "/services",
      label: "Service",
    },
    {
      key: "3",
      href: "/blogs",
      label: "Blogs",
    },
    {
      key: "4",
      href: "/contact-us",
      label: "Contact Us",
    },
  ];

  return (
    <>
      <Navbar items={items} />
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
