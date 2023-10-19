import Banner from "@/components/ui/Home/Banner";
import Upcoming from "@/components/ui/Home/Upcomming";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Home() {
  const items = [
    { key: "0", href: "/", label: "Home" },
    {
      key: "1",
      href: "/service",
      label: "Service",
    },
  ];

  return (
    <>
      <Navbar items={items} />
      <Banner />
      <Upcoming />
    </>
  );
}
