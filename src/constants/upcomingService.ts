import { UpcomingItems } from "@/types";
import { RiUserStarLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdTravelExplore } from "react-icons/md";
import { BsStars } from "react-icons/bs";

import features1 from "@/assets/feature-1.jpg";
import features2 from "@/assets/feature-2.jpg";
import features3 from "@/assets/feature-3.jpg";
import features4 from "@/assets/feature-4.jpg";

export const upcomingService: UpcomingItems[] = [
  {
    icon: RiUserStarLine,
    image: features1,
    key: "1",
    title: "2000+ Our Worldwide Guide",
  },
  {
    icon: VscWorkspaceTrusted,
    image: features2,
    key: "2",
    title: "100% Trusted Tour Agency",
  },
  {
    icon: MdTravelExplore,
    image: features3,
    key: "3",
    title: "12+ Years Of Travel Experience",
  },
  {
    icon: BsStars,
    image: features4,
    key: "5",
    title: "98% Years Of Travel are Happy",
  },
];
